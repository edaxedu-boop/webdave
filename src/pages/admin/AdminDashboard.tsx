import { useState } from 'react';
import { Plus, Pencil, ExternalLink, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useSocialWorksContent } from '../../hooks/useSocialWorksContent';
import type {
  DonationTier,
  ProgramIcon,
  SocialWorksContent,
  TeamInvolvementItem,
} from '../../types/socialWorks';
import { defaultSocialWorksContent } from '../../data/defaultSocialWorks';
import { programIconOptions, programIconMap } from '../../lib/programIcons';
import AdminSidebar, { type TabId, tabs } from '../../components/admin/AdminSidebar';
import EditModal from '../../components/admin/EditModal';
import {
  Field, TextInput, TextArea, ImageInput, ContentCard, SectionCard,
} from '../../components/admin/FormFields';

type ModalKey =
  | 'hero'
  | 'programs-header'
  | `program-${number}`
  | `stat-${number}`
  | 'team-header'
  | `team-item-${number}`
  | 'footer-cta'
  | 'donation-header'
  | `donation-${number}`
  | 'settings'
  | null;

function updateArrayItem<T>(items: T[], index: number, patch: Partial<T>): T[] {
  return items.map((item, i) => (i === index ? { ...item, ...patch } : item));
}

export default function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { content, loading, saving, error, save } = useSocialWorksContent();
  const [draft, setDraft] = useState<SocialWorksContent | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>('hero');
  const [modal, setModal] = useState<ModalKey>(null);
  const [saved, setSaved] = useState(false);

  const data = draft ?? content;

  const patch = (updater: (prev: SocialWorksContent) => SocialWorksContent) => {
    setDraft(updater(data));
    setSaved(false);
  };

  const closeModal = () => setModal(null);

  const handleSave = async () => {
    try {
      await save(data);
      setDraft(null);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      // handled in hook
    }
  };

  const handleReset = () => {
    if (confirm('¿Restaurar todo el contenido a los valores originales?')) {
      setDraft(defaultSocialWorksContent);
      setSaved(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login', { replace: true });
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center text-white/40 text-sm uppercase tracking-widest">
        Cargando contenido...
      </div>
    );
  }

  return (
    <div className="flex flex-1 min-h-0 w-full">
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onSave={handleSave}
        onReset={handleReset}
        saving={saving}
        saved={saved}
      />

      <div className="flex-1 flex flex-col min-w-0 min-h-0">
        <div className="lg:hidden shrink-0 px-4 py-3 border-b border-white/10 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                  activeTab === tab.id ? 'bg-emerald-600 text-white' : 'bg-white/5 text-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-white font-black uppercase text-2xl tracking-tight">
                  {tabs.find((t) => t.id === activeTab)?.label}
                </h2>
                <p className="text-white/40 text-sm mt-1">
                  Tocá <span className="text-emerald-400">Editar</span> en cada bloque para modificar en popup.
                </p>
              </div>
              <div className="flex items-center gap-2 lg:hidden">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest"
                >
                  {saving ? 'Guardando...' : 'Guardar'}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            {activeTab === 'hero' && (
              <ContentCard
                title={data.hero.title}
                subtitle={data.hero.subtitle}
                imageUrl={data.hero.backgroundImage}
                onEdit={() => setModal('hero')}
              />
            )}

            {activeTab === 'stats' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-emerald-400 font-black text-2xl">{stat.val}</p>
                      <p className="text-white/40 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                    </div>
                    <button
                      onClick={() => setModal(`stat-${i}`)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-emerald-600/20 text-white/50 hover:text-emerald-400 transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'programs' && (
              <>
                <SectionCard
                  title="Encabezado de sección"
                  description={data.programsSection.subtitle}
                  action={
                    <button
                      onClick={() => setModal('programs-header')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest"
                    >
                      <Pencil className="w-3 h-3" /> Editar
                    </button>
                  }
                />
                <div className="flex flex-col gap-4">
                  {data.programs.map((prog, i) => (
                    <ContentCard
                      key={i}
                      title={prog.title}
                      subtitle={prog.impact}
                      imageUrl={prog.image}
                      onEdit={() => setModal(`program-${i}`)}
                      onDelete={
                        data.programs.length > 1
                          ? () => patch((p) => ({ ...p, programs: p.programs.filter((_, idx) => idx !== i) }))
                          : undefined
                      }
                    />
                  ))}
                  <button
                    onClick={() => {
                      patch((p) => ({
                        ...p,
                        programs: [
                          ...p.programs,
                          {
                            icon: 'Heart' as ProgramIcon,
                            title: 'Nueva obra social',
                            desc: 'Descripción del programa.',
                            impact: 'Impacto del programa',
                            image: defaultSocialWorksContent.programs[0].image,
                          },
                        ],
                      }));
                    }}
                    className="flex items-center justify-center gap-2 p-5 rounded-2xl border border-dashed border-white/15 text-white/40 hover:text-white hover:border-emerald-500/40 transition-colors text-[10px] font-bold uppercase tracking-widest"
                  >
                    <Plus className="w-4 h-4" /> Agregar programa
                  </button>
                </div>
              </>
            )}

            {activeTab === 'team' && (
              <>
                <SectionCard
                  title={data.teamSection.title}
                  description={data.teamSection.subtitle}
                  action={
                    <button onClick={() => setModal('team-header')} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                      <Pencil className="w-3 h-3" /> Editar
                    </button>
                  }
                />
                <div className="grid grid-cols-1 gap-4">
                  {data.teamInvolvement.map((item, i) => (
                    <ContentCard key={i} title={item.title} subtitle={item.desc} onEdit={() => setModal(`team-item-${i}`)} />
                  ))}
                </div>
                <ContentCard title={data.footerCta.title} subtitle={data.footerCta.subtitle} onEdit={() => setModal('footer-cta')} />
              </>
            )}

            {activeTab === 'donations' && (
              <>
                <SectionCard
                  title={data.donationSection.title}
                  description={data.donationSection.subtitle}
                  action={
                    <button onClick={() => setModal('donation-header')} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                      <Pencil className="w-3 h-3" /> Editar
                    </button>
                  }
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.donationTiers.map((tier, i) => (
                    <div key={i} className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                      <p className="text-emerald-400 font-black text-xl">{tier.amount} Gs</p>
                      <p className="text-white font-bold text-sm mt-2">{tier.title}</p>
                      <p className="text-white/40 text-xs mt-1 line-clamp-2">{tier.desc}</p>
                      <button
                        onClick={() => setModal(`donation-${i}`)}
                        className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest"
                      >
                        <Pencil className="w-3 h-3" /> Editar
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'settings' && (
              <ContentCard
                title="PayPal y WhatsApp"
                subtitle={data.settings.paypalUrl}
                onEdit={() => setModal('settings')}
              />
            )}
          </div>
        </div>

        <div className="lg:hidden shrink-0 border-t border-white/10 px-5 py-3 flex items-center justify-between">
          <Link to="/" target="_blank" className="text-white/40 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
            <ExternalLink className="w-3.5 h-3.5" /> Ver sitio
          </Link>
          <button onClick={handleLogout} className="text-red-400/70 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
            <LogOut className="w-3.5 h-3.5" /> Salir
          </button>
        </div>
      </div>

      {/* ── MODALES ── */}
      <EditModal open={modal === 'hero'} title="Editar Hero" subtitle="Encabezado principal" onClose={closeModal}>
        <Field label="Etiqueta"><TextInput value={data.hero.badge} onChange={(v) => patch((p) => ({ ...p, hero: { ...p.hero, badge: v } }))} /></Field>
        <Field label="Título"><TextInput value={data.hero.title} onChange={(v) => patch((p) => ({ ...p, hero: { ...p.hero, title: v } }))} /></Field>
        <Field label="Palabra destacada"><TextInput value={data.hero.titleHighlight} onChange={(v) => patch((p) => ({ ...p, hero: { ...p.hero, titleHighlight: v } }))} /></Field>
        <Field label="Subtítulo"><TextArea value={data.hero.subtitle} onChange={(v) => patch((p) => ({ ...p, hero: { ...p.hero, subtitle: v } }))} /></Field>
        <ImageInput value={data.hero.backgroundImage} onChange={(v) => patch((p) => ({ ...p, hero: { ...p.hero, backgroundImage: v } }))} label="Imagen de fondo" />
      </EditModal>

      {data.stats.map((stat, i) => (
        <EditModal key={i} open={modal === `stat-${i}`} title={`Estadística ${i + 1}`} onClose={closeModal}>
          <Field label="Valor"><TextInput value={stat.val} onChange={(v) => patch((p) => ({ ...p, stats: updateArrayItem(p.stats, i, { val: v }) }))} /></Field>
          <Field label="Etiqueta"><TextInput value={stat.label} onChange={(v) => patch((p) => ({ ...p, stats: updateArrayItem(p.stats, i, { label: v }) }))} /></Field>
        </EditModal>
      ))}

      <EditModal open={modal === 'programs-header'} title="Encabezado de programas" onClose={closeModal}>
        <Field label="Etiqueta"><TextInput value={data.programsSection.label} onChange={(v) => patch((p) => ({ ...p, programsSection: { ...p.programsSection, label: v } }))} /></Field>
        <Field label="Título"><TextInput value={data.programsSection.title} onChange={(v) => patch((p) => ({ ...p, programsSection: { ...p.programsSection, title: v } }))} /></Field>
        <Field label="Descripción"><TextArea value={data.programsSection.subtitle} onChange={(v) => patch((p) => ({ ...p, programsSection: { ...p.programsSection, subtitle: v } }))} /></Field>
      </EditModal>

      {data.programs.map((prog, i) => {
        const Icon = programIconMap[prog.icon];
        return (
          <EditModal key={i} open={modal === `program-${i}`} title={`Programa: ${prog.title}`} onClose={closeModal}>
            <ImageInput value={prog.image} onChange={(v) => patch((p) => ({ ...p, programs: updateArrayItem(p.programs, i, { image: v }) }))} />
            <Field label="Título"><TextInput value={prog.title} onChange={(v) => patch((p) => ({ ...p, programs: updateArrayItem(p.programs, i, { title: v }) }))} /></Field>
            <Field label="Icono">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <select
                  value={prog.icon}
                  onChange={(e) => patch((p) => ({ ...p, programs: updateArrayItem(p.programs, i, { icon: e.target.value as ProgramIcon }) }))}
                  className="flex-1 bg-[#0C0C0C] border border-white/10 rounded-xl py-3 px-4 text-white text-sm outline-none"
                >
                  {programIconOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </Field>
            <Field label="Impacto"><TextInput value={prog.impact} onChange={(v) => patch((p) => ({ ...p, programs: updateArrayItem(p.programs, i, { impact: v }) }))} /></Field>
            <Field label="Descripción"><TextArea value={prog.desc} onChange={(v) => patch((p) => ({ ...p, programs: updateArrayItem(p.programs, i, { desc: v }) }))} rows={4} /></Field>
          </EditModal>
        );
      })}

      <EditModal open={modal === 'team-header'} title="Compromiso interno" onClose={closeModal}>
        <Field label="Etiqueta"><TextInput value={data.teamSection.label} onChange={(v) => patch((p) => ({ ...p, teamSection: { ...p.teamSection, label: v } }))} /></Field>
        <Field label="Título"><TextInput value={data.teamSection.title} onChange={(v) => patch((p) => ({ ...p, teamSection: { ...p.teamSection, title: v } }))} /></Field>
        <Field label="Descripción"><TextArea value={data.teamSection.subtitle} onChange={(v) => patch((p) => ({ ...p, teamSection: { ...p.teamSection, subtitle: v } }))} /></Field>
        <Field label="Título misión"><TextInput value={data.teamSection.missionTitle} onChange={(v) => patch((p) => ({ ...p, teamSection: { ...p.teamSection, missionTitle: v } }))} /></Field>
        <Field label="Descripción misión"><TextArea value={data.teamSection.missionDesc} onChange={(v) => patch((p) => ({ ...p, teamSection: { ...p.teamSection, missionDesc: v } }))} /></Field>
      </EditModal>

      {data.teamInvolvement.map((item: TeamInvolvementItem, i: number) => (
        <EditModal key={i} open={modal === `team-item-${i}`} title={item.title} onClose={closeModal}>
          <Field label="Título"><TextInput value={item.title} onChange={(v) => patch((p) => ({ ...p, teamInvolvement: updateArrayItem(p.teamInvolvement, i, { title: v }) }))} /></Field>
          <Field label="Descripción"><TextArea value={item.desc} onChange={(v) => patch((p) => ({ ...p, teamInvolvement: updateArrayItem(p.teamInvolvement, i, { desc: v }) }))} rows={4} /></Field>
        </EditModal>
      ))}

      <EditModal open={modal === 'footer-cta'} title="Llamado a colaboración" onClose={closeModal}>
        <Field label="Título"><TextInput value={data.footerCta.title} onChange={(v) => patch((p) => ({ ...p, footerCta: { ...p.footerCta, title: v } }))} /></Field>
        <Field label="Descripción"><TextArea value={data.footerCta.subtitle} onChange={(v) => patch((p) => ({ ...p, footerCta: { ...p.footerCta, subtitle: v } }))} /></Field>
        <Field label="Texto del botón"><TextInput value={data.footerCta.buttonText} onChange={(v) => patch((p) => ({ ...p, footerCta: { ...p.footerCta, buttonText: v } }))} /></Field>
      </EditModal>

      <EditModal open={modal === 'donation-header'} title="Sección de donaciones" onClose={closeModal}>
        <Field label="Etiqueta"><TextInput value={data.donationSection.label} onChange={(v) => patch((p) => ({ ...p, donationSection: { ...p.donationSection, label: v } }))} /></Field>
        <Field label="Título"><TextInput value={data.donationSection.title} onChange={(v) => patch((p) => ({ ...p, donationSection: { ...p.donationSection, title: v } }))} /></Field>
        <Field label="Descripción"><TextArea value={data.donationSection.subtitle} onChange={(v) => patch((p) => ({ ...p, donationSection: { ...p.donationSection, subtitle: v } }))} /></Field>
      </EditModal>

      {data.donationTiers.map((tier: DonationTier, i: number) => (
        <EditModal key={i} open={modal === `donation-${i}`} title={tier.title} onClose={closeModal}>
          <Field label="Monto (Gs)"><TextInput value={tier.amount} onChange={(v) => patch((p) => ({ ...p, donationTiers: updateArrayItem(p.donationTiers, i, { amount: v }) }))} /></Field>
          <Field label="Título"><TextInput value={tier.title} onChange={(v) => patch((p) => ({ ...p, donationTiers: updateArrayItem(p.donationTiers, i, { title: v }) }))} /></Field>
          <Field label="Descripción"><TextArea value={tier.desc} onChange={(v) => patch((p) => ({ ...p, donationTiers: updateArrayItem(p.donationTiers, i, { desc: v }) }))} /></Field>
        </EditModal>
      ))}

      <EditModal open={modal === 'settings'} title="Enlaces" onClose={closeModal}>
        <Field label="URL de PayPal"><TextInput value={data.settings.paypalUrl} onChange={(v) => patch((p) => ({ ...p, settings: { ...p.settings, paypalUrl: v } }))} /></Field>
        <Field label="URL de WhatsApp"><TextArea value={data.settings.whatsappUrl} onChange={(v) => patch((p) => ({ ...p, settings: { ...p.settings, whatsappUrl: v } }))} rows={3} /></Field>
      </EditModal>
    </div>
  );
}
