import {
  LayoutDashboard, Sparkles, BarChart3, Heart, Users, Gift, Link2, Save, RotateCcw, CheckCircle,
} from 'lucide-react';

export type TabId = 'hero' | 'stats' | 'programs' | 'team' | 'donations' | 'settings';

const tabs: { id: TabId; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'hero', label: 'Hero', icon: Sparkles },
  { id: 'stats', label: 'Estadísticas', icon: BarChart3 },
  { id: 'programs', label: 'Obras Sociales', icon: Heart },
  { id: 'team', label: 'Compromiso', icon: Users },
  { id: 'donations', label: 'Donaciones', icon: Gift },
  { id: 'settings', label: 'Enlaces', icon: Link2 },
];

interface AdminSidebarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  onSave: () => void;
  onReset: () => void;
  saving: boolean;
  saved: boolean;
}

export default function AdminSidebar({
  activeTab,
  onTabChange,
  onSave,
  onReset,
  saving,
  saved,
}: AdminSidebarProps) {
  return (
    <aside className="hidden lg:flex w-72 shrink-0 h-screen flex-col border-r border-white/10 bg-[#0a0a0a]">
      <div className="px-6 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-emerald-400 text-[9px] font-black uppercase tracking-[0.3em]">Admin</p>
            <h1 className="text-white font-black uppercase text-sm tracking-tight">Obras Sociales</h1>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-5 flex flex-col gap-1 overflow-hidden">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                active
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-white' : 'text-white/40'}`} />
              <span className="text-[11px] font-bold uppercase tracking-wider">{tab.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10 flex flex-col gap-2">
        <button
          onClick={onSave}
          disabled={saving}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-[10px] font-black uppercase tracking-widest transition-colors"
        >
          {saved ? <CheckCircle className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
          {saving ? 'Guardando...' : saved ? 'Guardado' : 'Guardar todo'}
        </button>
        <button
          onClick={onReset}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-white/45 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Restaurar
        </button>
      </div>
    </aside>
  );
}

export { tabs };
