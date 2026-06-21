import { useEffect, useRef, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

interface VimeoPlayerProps {
  videoId: string;
  title: string;
}

export default function VimeoPlayer({ videoId, title }: VimeoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let activePlayer: any = null;

    // Safety timeout: if Vimeo events fail to fire (e.g. slow connection),
    // fade in the iframe after 2.5 seconds anyway.
    const safetyTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    const initPlayer = async () => {
      if (!iframeRef.current) return;
      try {
        const Vimeo = await getVimeoSDK();
        if (!Vimeo) {
          console.warn('Vimeo Player SDK not loaded, fallback mode active.');
          setIsLoaded(true);
          return;
        }
        const p = new Vimeo.Player(iframeRef.current);
        setPlayer(p);
        activePlayer = p;

        // Sync player events
        p.on('loaded', () => {
          setIsLoaded(true);
          clearTimeout(safetyTimeout);
        });
        p.on('play', () => {
          setIsPlaying(true);
          setIsLoaded(true);
          clearTimeout(safetyTimeout);
        });
        p.on('pause', () => setIsPlaying(false));
        p.on('volumechange', async () => {
          const muted = await p.getMuted();
          setIsMuted(muted);
        });
      } catch (err) {
        console.error('Failed to initialize Vimeo Player:', err);
        setIsLoaded(true);
      }
    };

    initPlayer();

    return () => {
      clearTimeout(safetyTimeout);
      if (activePlayer) {
        activePlayer.unload().catch(() => {});
      }
    };
  }, [videoId]);

  const handleTogglePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!player) return;
    try {
      const paused = await player.getPaused();
      if (paused) {
        await player.play();
      } else {
        await player.pause();
      }
    } catch (err) {
      console.error('Failed to toggle play/pause:', err);
    }
  };

  const handleToggleMute = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!player) return;
    try {
      const muted = !isMuted;
      await player.setMuted(muted);
      setIsMuted(muted);
    } catch (err) {
      console.error('Failed to toggle mute state:', err);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[20px] bg-black border border-white/5 shadow-inner select-none" style={{ paddingBottom: '177.78%' }}>
      {/* Dynamic Indeterminate Progress Bar Animation */}
      <style>{`
        @keyframes loadingProgress {
          0% {
            left: -35%;
            width: 35%;
          }
          50% {
            left: 30%;
            width: 40%;
          }
          100% {
            left: 100%;
            width: 35%;
          }
        }
      `}</style>

      {/* Loading Skeleton / Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#0C0C0C] flex flex-col items-center justify-center z-15 transition-opacity duration-500 px-6">
          {/* Custom Pulsing Spinner */}
          <div className="relative flex items-center justify-center w-12 h-12 mb-3">
            <div className="absolute w-full h-full rounded-full border border-blue-500/20 border-t-blue-500 animate-spin" />
            <div className="w-6 h-6 rounded-full bg-blue-500/10 animate-ping" />
          </div>
          
          <span className="text-[#D7E2EA]/50 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
            Cargando Video
          </span>

          {/* Indeterminate progress bar */}
          <div className="w-36 h-1 rounded-full bg-white/5 overflow-hidden border border-white/5 relative">
            <div 
              className="absolute top-0 bottom-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              style={{
                animation: 'loadingProgress 1.6s infinite ease-in-out'
              }}
            />
          </div>
        </div>
      )}

      {/* Background loop video with smooth fade-in once loaded */}
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&background=1&muted=1&autoplay=1&loop=1`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className={`absolute inset-0 w-full h-full pointer-events-none scale-[1.02] transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        title={title}
      />
      
      {/* Interactive overlay zone for play/pause and mute/unmute control */}
      <div 
        className="absolute inset-0 flex items-center justify-center cursor-pointer group/overlay" 
        onClick={handleTogglePlay}
      >
        {/* Subtle play/pause indicator on hover */}
        <div className="opacity-0 group-hover/overlay:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/15 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-black/45 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-105">
            {isPlaying ? (
              <div className="flex gap-1 justify-center items-center">
                <div className="w-1.5 h-5 bg-white rounded-full animate-pulse" />
                <div className="w-1.5 h-5 bg-white rounded-full animate-pulse [animation-delay:0.2s]" />
              </div>
            ) : (
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            )}
          </div>
        </div>

        {/* Sound Mute/Unmute Toggle Button */}
        <button
          onClick={handleToggleMute}
          className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 hover:border-white/20 transition-all duration-300 z-20 group/mute shadow-lg"
        >
          {isMuted ? (
            <span className="text-[10px] text-red-400 font-extrabold flex items-center gap-1.5 px-1.5 py-0.5 uppercase tracking-wider">
              <VolumeX className="w-3.5 h-3.5 animate-pulse" /> Activar Sonido
            </span>
          ) : (
            <span className="text-[10px] text-blue-400 font-extrabold flex items-center gap-1.5 px-1.5 py-0.5 uppercase tracking-wider">
              <Volume2 className="w-3.5 h-3.5 animate-pulse" /> Con Sonido
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

// Global script helper with fallback resolution
const getVimeoSDK = (): Promise<any> => {
  return new Promise((resolve) => {
    if ((window as any).Vimeo) {
      resolve((window as any).Vimeo);
      return;
    }
    let retries = 0;
    const interval = setInterval(() => {
      retries++;
      if ((window as any).Vimeo) {
        clearInterval(interval);
        resolve((window as any).Vimeo);
      } else if (retries >= 60) { // 3 seconds max wait
        clearInterval(interval);
        resolve(null);
      }
    }, 50);
  });
};
