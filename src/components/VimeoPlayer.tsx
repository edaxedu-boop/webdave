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

  useEffect(() => {
    let activePlayer: any = null;

    const initPlayer = async () => {
      if (!iframeRef.current) return;
      try {
        const Vimeo = await getVimeoSDK();
        if (!Vimeo) {
          console.warn('Vimeo Player SDK not loaded, fallback mode active.');
          return;
        }
        const p = new Vimeo.Player(iframeRef.current);
        setPlayer(p);
        activePlayer = p;

        // Sync player events
        p.on('play', () => setIsPlaying(true));
        p.on('pause', () => setIsPlaying(false));
        p.on('volumechange', async () => {
          const muted = await p.getMuted();
          setIsMuted(muted);
        });
      } catch (err) {
        console.error('Failed to initialize Vimeo Player:', err);
      }
    };

    initPlayer();

    return () => {
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
      {/* Background loop video */}
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&background=1&muted=1&autoplay=1&loop=1`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 w-full h-full pointer-events-none scale-[1.02]"
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
