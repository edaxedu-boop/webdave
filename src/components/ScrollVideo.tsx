import { useEffect, useRef, useState } from 'react';
import { useTransform, type MotionValue } from 'framer-motion';

interface ScrollVideoProps {
  frameCount: number;
  baseUrl: string;
  className?: string;
  reverse?: boolean;
  progress: MotionValue<number>;
}

export default function ScrollVideo({ frameCount, baseUrl, className = '', reverse = false, progress }: ScrollVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Map scroll progress to frame index
  const frameIndex = useTransform(
    progress, 
    [0, 1], 
    reverse ? [frameCount, 1] : [1, frameCount]
  );

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    const preloadImages = async () => {
      const promises = Array.from({ length: frameCount }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          const frameNumber = (i + 1).toString().padStart(3, '0');
          img.src = `${baseUrl}/ezgif-frame-${frameNumber}.jpg`;
          img.onload = () => {
            loadedCount++;
            if (isMounted) setLoadProgress(Math.round((loadedCount / frameCount) * 100));
            resolve(img);
          };
          img.onerror = reject;
        });
      });

      try {
        const results = await Promise.all(promises);
        if (isMounted) {
          imagesRef.current = results;
          setIsLoaded(true);
          // Initial render after all images are loaded
          render(frameIndex.get());
        }
      } catch (err) {
        console.error("Failed to load some frames", err);
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, [frameCount, baseUrl]);

  const render = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const images = imagesRef.current;

    if (!canvas || !ctx || images.length === 0) return;

    const imgIndex = Math.floor(index) - 1;
    const safeIndex = Math.max(0, Math.min(imgIndex, frameCount - 1));
    const img = images[safeIndex];

    if (img) {
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShiftX = (canvas.width - img.width * ratio) / 2;
      const centerShiftY = (canvas.height - img.height * ratio) / 2;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
      );
    }
  };

  useEffect(() => {
    if (!isLoaded) return;

    const unsubscribe = frameIndex.on('change', (latest) => {
      render(latest);
    });

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        render(frameIndex.get());
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set size

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded]);

  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{ 
          opacity: isLoaded ? 0.6 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0C0C0C]">
          <div className="text-white font-bold text-xs uppercase tracking-widest opacity-40">
            Cargando experiencia... {loadProgress}%
          </div>
        </div>
      )}
    </div>
  );
}
