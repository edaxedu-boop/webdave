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

  useEffect(() => {
    let activePlayer: any = null;

    const initPlayer = async () => {
      if (!iframeRef.current) return;
      const Vimeo = await loadVimeoSDK();
      const p = new Vimeo.Player(iframeRef.current);
      setPlayer(p);
      activePlayer = p;

      // Sync initial state
      p.on('play', () => setIsPlaying(true));
      p.on('pause', () => setIsPlaying(false));
      p.on('volumechange', async () => {
        const muted = await p.getMuted();
        setIsMuted(muted);
      });
    };

    initPlayer();

    return () => {
      if (activePlayer) {
        activePlayer.unload();
      }
    };
  }, [videoId]);

  const handlePlayUnmute = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!player) return;
    try {
      await player.setMuted(false);
      await player.setVolume(1);
      await player.play();
      setIsPlaying(true);
      setIsMuted(false);
      setHasInteracted(true);
    } catch (err) {
      console.error('Failed to play/unmute:', err);
    }
  };

  const handleTogglePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!player) return;
    if (isPlaying) {
      await player.pause();
    } else {
      await player.play();
    }
  };

  const handleToggleMute = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!player) return;
    const muted = !isMuted;
    await player.setMuted(muted);
    setIsMuted(muted);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[20px] bg-black border border-white/5 shadow-inner" style={{ paddingBottom: '177.78%' }}>
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&background=1&muted=1&autoplay=1&loop=1`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 w-full h-full pointer-events-none scale-[1.02]"
        title={title}
      />
      
      {/* Dark overlay with dynamic backdrop blur */}
      <div 
        className={`absolute inset-0 transition-all duration-700 bg-black/40 ${
          !hasInteracted ? 'backdrop-blur-[4px]' : 'backdrop-blur-0 pointer-events-none'
        }`}
      />

      {/* Striking Play Button Overlay */}
      {!hasInteracted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <button
            onClick={handlePlayUnmute}
            className="group/btn relative flex flex-col items-center justify-center transition-all duration-300 hover:scale-105"
          >
            {/* Glowing outer rings with distinct pulse animations */}
            <div className="absolute w-24 h-24 rounded-full bg-blue-500/20 blur-md animate-ping duration-1000" />
            <div className="absolute w-20 h-20 rounded-full bg-blue-500/30 animate-pulse duration-700" />
            
            {/* Central Play Button */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-white/20 transition-all duration-300">
              <Play className="w-7 h-7 text-white fill-white ml-1 transition-transform group-hover/btn:scale-110" />
            </div>
            
            {/* Eye-catching badge text */}
            <span className="mt-5 px-5 py-2.5 rounded-full bg-black/80 border border-blue-500/30 text-blue-400 font-extrabold text-xs uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(59,130,246,0.2)] animate-bounce">
              Reproducir Video
            </span>
          </button>
        </div>
      )}

      {/* Interactive Controls Overlay after initial click */}
      {hasInteracted && (
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer group/overlay" 
          onClick={handleTogglePlay}
        >
          {/* Subtle play/pause indicator on hover */}
          <div className="opacity-0 group-hover/overlay:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-105">
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
            className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 hover:border-white/20 transition-all duration-300 z-20 group/mute"
          >
            {isMuted ? (
              <span className="text-[10px] text-red-400 font-extrabold flex items-center gap-1.5 px-1 uppercase tracking-wider">
                <VolumeX className="w-3.5 h-3.5" /> Activar Sonido
              </span>
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}

// Global script loader for Vimeo API
const loadVimeoSDK = (): Promise<any> => {
  return new Promise((resolve) => {
    if ((window as any).Vimeo) {
      resolve((window as any).Vimeo);
      return;
    }
    const existingScript = document.getElementById('vimeo-sdk-script');
    if (existingScript) {
      const checkInterval = setInterval(() => {
        if ((window as any).Vimeo) {
          clearInterval(checkInterval);
          resolve((window as any).Vimeo);
        }
      }, 50);
      return;
    }
    const script = document.createElement('script');
    script.id = 'vimeo-sdk-script';
    script.src = 'https://player.vimeo.com/api/player.js';
    script.onload = () => resolve((window as any).Vimeo);
    document.body.appendChild(script);
  });
};
