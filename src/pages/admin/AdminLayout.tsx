import { Link, Outlet, useNavigate } from 'react-router-dom';
import { LogOut, ExternalLink } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="h-screen overflow-hidden bg-[#0C0C0C] text-white flex flex-col">
      <header className="lg:hidden shrink-0 z-50 border-b border-white/10 bg-[#0C0C0C]/95 backdrop-blur-xl">
        <div className="px-5 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.35em]">Admin</p>
            <h1 className="font-black uppercase text-base tracking-tight">Obras Sociales</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              target="_blank"
              className="p-2 rounded-full border border-white/10 text-white/50 hover:text-white"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
            <button
              onClick={handleLogout}
              className="p-2 rounded-full border border-white/10 text-white/50 hover:text-red-300"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        <Outlet />
      </div>
    </div>
  );
}
