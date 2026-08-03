import {
  BookOpen,
  Globe,
  Heart,
  Users,
  Award,
  Gift,
  type LucideIcon,
} from 'lucide-react';
import type { ProgramIcon } from '../types/socialWorks';

export const programIconMap: Record<ProgramIcon, LucideIcon> = {
  BookOpen,
  Globe,
  Heart,
  Users,
  Award,
  Gift,
};

export const programIconOptions: { value: ProgramIcon; label: string }[] = [
  { value: 'BookOpen', label: 'Libro' },
  { value: 'Globe', label: 'Globo' },
  { value: 'Heart', label: 'Corazón' },
  { value: 'Users', label: 'Personas' },
  { value: 'Award', label: 'Premio' },
  { value: 'Gift', label: 'Regalo' },
];
