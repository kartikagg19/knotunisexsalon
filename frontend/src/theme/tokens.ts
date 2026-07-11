import { Platform } from 'react-native';

export const colors = {
  // Using RGBA colors to support glassmorphism layers beneath UI components
  surface: 'rgba(18, 18, 23, 0.75)',
  onSurface: '#F9FAFB',
  surfaceSecondary: 'rgba(30, 32, 40, 0.65)', // Sleek dark glass
  onSurfaceSecondary: '#E5E7EB',
  surfaceTertiary: 'rgba(40, 42, 52, 0.8)',
  onSurfaceTertiary: '#D1D5DB',
  surfaceInverse: '#F3F4F6',
  onSurfaceInverse: '#111827',
  brand: '#D4AF37', // Refined sophisticated gold
  brandPrimary: '#C29B16',
  onBrandPrimary: '#000000',
  brandSecondary: '#FF4E50', // Energetic advanced coral/gold blend vibe
  brandTertiary: '#2A2415',
  onBrandTertiary: '#D4AF37',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  border: 'rgba(255, 255, 255, 0.12)',
  borderStrong: 'rgba(255, 255, 255, 0.25)',
  divider: 'rgba(255, 255, 255, 0.08)',
  muted: '#9CA3AF',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const radius = {
  sm: 6,
  md: 12,
  lg: 20,
  pill: 999,
};

// Use a clean, modern aesthetic for display and body text
export const fonts = {
  display: Platform.select({ ios: 'Avenir', android: 'sans-serif', default: 'sans-serif' }) as string,
  displayItalic: Platform.select({ ios: 'Avenir-Oblique', android: 'sans-serif', default: 'sans-serif' }) as string,
  body: Platform.select({ ios: 'System', android: 'sans-serif', default: 'System' }) as string,
  bodyMedium: Platform.select({ ios: 'System', android: 'sans-serif-medium', default: 'System' }) as string,
};

export const fontSize = {
  sm: 12,
  base: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  display: 40,
};
