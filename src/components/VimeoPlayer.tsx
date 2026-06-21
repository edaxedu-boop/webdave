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
  const [hasInteracted, setHasInteracted] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    // Fetch thumbnail via oEmbed API for instant cover
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.thumbnail_url) {
          setThumbnailUrl(data.thumbnail_url);
        }
      })
      .catch(err => console.error('Failed to fetch Vimeo thumbnail:', err));
  }, [videoId]);

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

        // If the user already clicked the play button before the player was fully initialized,
        // play and unmute it now.
        if (hasInteractedRef.current) {
          try {
            await p.setMuted(false);
            await p.setVolume(1);
            await p.play();
          } catch (err) {
            console.error('Failed to play/unmute on late init:', err);
          }
        }
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

  const handlePlayUnmute = async (e: React.MouseEvent) => {
    e.stopPropagation();
    hasInteractedRef.current = true;
    setHasInteracted(true);
    setIsPlaying(true);
    setIsMuted(false);

    if (player) {
      try {
        await player.setMuted(false);
        await player.setVolume(1);
        await player.play();
      } catch (err) {
        console.error('Failed to play/unmute:', err);
      }
    }
  };

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
    <div className="relative w-full overflow-hidden rounded-[20px] bg-[#0c0c0c] border border-white/5 shadow-inner select-none" style={{ paddingBottom: '177.78%' }}>
      
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

      {/* Blurred Cover Poster Image (hides video background loading) */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 z-10 pointer-events-none ${
          hasInteracted ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {thumbnailUrl ? (
          <img 
            src={thumbnailUrl} 
            alt={title} 
            className="w-full h-full object-cover filter blur-[12px] scale-[1.08] brightness-[0.55]" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-[#121212] to-[#080808] animate-pulse" />
        )}
      </div>

      {/* Dark overlay for cover state */}
      <div 
        className={`absolute inset-0 transition-all duration-700 bg-black/30 z-10 ${
          !hasInteracted ? 'backdrop-blur-[1px]' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Central Play with Sound Button */}
      {!hasInteracted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <button
            onClick={handlePlayUnmute}
            className="group/btn relative flex flex-col items-center justify-center transition-all duration-300 hover:scale-105"
          >
            {/* Glowing outer rings with distinct pulse animations */}
            <div className="absolute w-24 h-24 rounded-full bg-blue-500/20 blur-md animate-ping duration-1000" />
            <div className="absolute w-20 h-20 rounded-full bg-blue-500/30 animate-pulse duration-700" />
            
            {/* Central Play & Sound Button */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-white/20 transition-all duration-300">
              <Play className="w-6 h-6 text-white fill-white ml-0.5 transition-transform group-hover/btn:scale-110" />
            </div>
            
            {/* Combined Play + Audio Action Badge */}
            <span className="mt-5 px-5 py-3 rounded-full bg-black/85 border border-blue-500/35 text-white font-extrabold text-[11px] uppercase tracking-[0.15em] shadow-[0_0_20px_rgba(59,130,246,0.25)] flex items-center gap-2 hover:border-blue-400 transition-colors">
              Reproducir con Sonido
            </span>
          </button>
        </div>
      )}

      {/* Interactive controls and overlays after initial play */}
      {hasInteracted && (
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer group/overlay z-15" 
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
      )}
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
