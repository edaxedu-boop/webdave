export type ProgramIcon = 'BookOpen' | 'Globe' | 'Heart' | 'Users' | 'Award' | 'Gift';

export interface SocialWorksStat {
  val: string;
  label: string;
}

export interface SocialWorksProgram {
  icon: ProgramIcon;
  title: string;
  desc: string;
  impact: string;
  image: string;
}

export interface TeamInvolvementItem {
  title: string;
  desc: string;
}

export interface DonationTier {
  amount: string;
  title: string;
  desc: string;
}

export interface SocialWorksContent {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    backgroundImage: string;
  };
  stats: SocialWorksStat[];
  programsSection: {
    label: string;
    title: string;
    subtitle: string;
  };
  programs: SocialWorksProgram[];
  teamSection: {
    label: string;
    title: string;
    subtitle: string;
    missionTitle: string;
    missionDesc: string;
  };
  teamInvolvement: TeamInvolvementItem[];
  donationSection: {
    label: string;
    title: string;
    subtitle: string;
  };
  donationTiers: DonationTier[];
  footerCta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  settings: {
    paypalUrl: string;
    whatsappUrl: string;
  };
}
