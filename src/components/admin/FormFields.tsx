import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
        {label}
      </label>
      {children}
    </div>
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-[#0C0C0C] border border-white/10 focus:border-emerald-500 rounded-xl py-3 px-4 text-white text-sm outline-none transition-colors"
    />
  );
}

export function TextArea({
  value,
  onChange,
  rows = 3,
}: {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="w-full bg-[#0C0C0C] border border-white/10 focus:border-emerald-500 rounded-xl py-3 px-4 text-white text-sm outline-none transition-colors resize-y"
    />
  );
}

export function ImageInput({
  value,
  onChange,
  label = 'URL de imagen',
}: {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}) {
  const [error, setError] = useState(false);

  return (
    <Field label={label}>
      <TextInput value={value} onChange={(v) => { onChange(v); setError(false); }} placeholder="https://..." />
      <div className="mt-3 rounded-2xl overflow-hidden border border-white/10 bg-[#0C0C0C] aspect-video max-h-52 relative">
        {value && !error ? (
          <img
            src={value}
            alt="Vista previa"
            className="w-full h-full object-cover"
            onError={() => setError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/25">
            <ImageIcon className="w-8 h-8" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {error ? 'No se pudo cargar la imagen' : 'Sin vista previa'}
            </span>
          </div>
        )}
      </div>
    </Field>
  );
}

export function ContentCard({
  title,
  subtitle,
  imageUrl,
  onEdit,
  onDelete,
}: {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  onEdit: () => void;
  onDelete?: () => void;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 transition-all overflow-hidden">
      {imageUrl && (
        <div className="aspect-[21/9] overflow-hidden bg-[#0C0C0C]">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className="p-5 flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-white font-bold text-sm truncate">{title}</h3>
          {subtitle && (
            <p className="text-white/40 text-xs mt-1 line-clamp-2 font-light">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onEdit}
            className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
          >
            Editar
          </button>
          {onDelete && (
            <button
              onClick={onDelete}
              className="px-3 py-1.5 rounded-lg border border-red-500/20 text-red-400/70 hover:text-red-400 hover:bg-red-500/10 text-[10px] font-bold uppercase tracking-widest transition-colors"
            >
              Eliminar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function SectionCard({
  title,
  description,
  children,
  action,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6 flex flex-col gap-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-white font-bold uppercase text-sm tracking-wide">{title}</h2>
          {description && (
            <p className="text-white/40 text-xs mt-1 font-light">{description}</p>
          )}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export { Field };
