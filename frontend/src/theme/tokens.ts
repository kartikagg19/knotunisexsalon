import { Platform } from 'react-native';

export const colors = {
  surface: '#FFFFFF',
  onSurface: '#111827',
  surfaceSecondary: '#F9FAFB',
  onSurfaceSecondary: '#374151',
  surfaceTertiary: '#F3F4F6',
  onSurfaceTertiary: '#4B5563',
  surfaceInverse: '#0F1014',
  onSurfaceInverse: '#FFFFFF',
  brand: '#D4AF37',
  brandPrimary: '#B38F24',
  onBrandPrimary: '#FFFFFF',
  brandSecondary: '#D4AF37',
  brandTertiary: '#FDFBF4',
  onBrandTertiary: '#B38F24',
  success: '#2E7D32',
  warning: '#F57C00',
  error: '#D32F2F',
  border: '#E5E7EB',
  borderStrong: '#D1D5DB',
  divider: '#F3F4F6',
  muted: '#6B7280',
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
