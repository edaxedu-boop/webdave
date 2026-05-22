interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function ContactButton({
  label = 'Contáctame',
  onClick,
  href,
  className = '',
}: ContactButtonProps) {
  const style = {
    background: '#FFFFFF',
    color: '#000000',
    boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.05)',
  };

  const baseClass = `inline-flex items-center justify-center rounded-full overflow-hidden
    px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
    text-black font-bold uppercase tracking-widest
    text-xs sm:text-sm md:text-base
    transition-all duration-200 hover:scale-105 active:scale-95
    whitespace-nowrap ${className}`;

  if (href) {
    return (
      <a href={href} style={style} className={baseClass}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={style} className={baseClass}>
      {label}
    </button>
  );
}
