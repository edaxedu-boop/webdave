import { useState, useEffect, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AdminLogin() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email.trim(), password);
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center px-5 py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Volver al sitio
        </Link>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-xl">
          <div className="mb-8">
            <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.35em] mb-3">
              Panel de Administración
            </p>
            <h1 className="text-white font-black text-2xl uppercase tracking-tight">
              Iniciar sesión
            </h1>
            <p className="text-white/40 text-sm mt-2 font-light">
              Accede para editar la sección de Obras Sociales.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@mundodigital.com"
                  className="w-full bg-[#0C0C0C]/60 border border-white/10 focus:border-emerald-500 rounded-2xl py-3.5 pl-11 pr-4 text-white text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#0C0C0C]/60 border border-white/10 focus:border-emerald-500 rounded-2xl py-3.5 pl-11 pr-4 text-white text-sm outline-none transition-colors"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-xs font-medium bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-black uppercase tracking-widest text-xs transition-all"
            >
              {loading ? 'Ingresando...' : 'Iniciar sesión'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
