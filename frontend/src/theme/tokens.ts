import { Platform } from 'react-native';

export const colors = {
  surface: '#0F1014',
  onSurface: '#FFFFFF',
  surfaceSecondary: '#1A1C23',
  onSurfaceSecondary: '#EAEBEE',
  surfaceTertiary: '#262933',
  onSurfaceTertiary: '#D1D3D9',
  surfaceInverse: '#FFFFFF',
  onSurfaceInverse: '#0F1014',
  brand: '#D4AF37',
  brandPrimary: '#D4AF37',
  onBrandPrimary: '#1A1500',
  brandSecondary: '#B38F24',
  brandTertiary: '#3D331A',
  onBrandTertiary: '#F5E1A4',
  success: '#2E7D32',
  warning: '#F57C00',
  error: '#D32F2F',
  border: '#2A2C35',
  borderStrong: '#3D404D',
  divider: '#1F212A',
  muted: '#8B8F99',
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

// Use system serif for display headings (elegant, no CDN needed)
// and system sans for body text.
export const fonts = {
  display: Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' }) as string,
  displayItalic: Platform.select({ ios: 'Georgia-Italic', android: 'serif', default: 'serif' }) as string,
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
