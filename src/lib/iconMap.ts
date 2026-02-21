/**
 * Maps Lucide icon names (stored in CMS) to actual React components.
 * Used by pages that store iconName strings in Sanity schemas.
 */
import {
  Video,
  PenTool,
  Box,
  Smile,
  ScanLine,
  Sparkles,
  Crown,
  Shield,
  Globe,
  Award,
  Cpu,
  HeartPulse,
  Plane,
  Clock,
  Car,
  Utensils,
  ScanFace,
  Lightbulb,
  Ship,
  Music,
  MapPin,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Video,
  PenTool,
  Box,
  Smile,
  ScanLine,
  Sparkles,
  Crown,
  Shield,
  Globe,
  Award,
  Cpu,
  HeartPulse,
  Plane,
  Clock,
  Car,
  Utensils,
  ScanFace,
  Lightbulb,
  Ship,
  Music,
  MapPin,
  BookOpen,
};

/**
 * Look up a Lucide icon by its string name.
 * Returns the component or a fallback (Sparkles) if not found.
 */
export function getIcon(name?: string): LucideIcon {
  if (!name) return Sparkles;
  return iconMap[name] ?? Sparkles;
}
