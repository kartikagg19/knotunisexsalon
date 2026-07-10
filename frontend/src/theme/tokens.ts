import { Platform } from 'react-native';

export const colors = {
  // Using RGBA colors to support glassmorphism layers beneath UI components
  surface: 'rgba(255, 255, 255, 0.65)',
  onSurface: '#1F1406',
  surfaceSecondary: 'rgba(255, 248, 235, 0.5)', // warm gold tinted glass
  onSurfaceSecondary: '#3E2A14',
  surfaceTertiary: 'rgba(255, 255, 255, 0.8)',
  onSurfaceTertiary: '#644723',
  surfaceInverse: '#140c03',
  onSurfaceInverse: '#FFFFFF',
  brand: '#F9D423',
  brandPrimary: '#F8C01B',
  onBrandPrimary: '#FFFFFF',
  brandSecondary: '#FF4E50', // energetic advanced coral/gold blend vibe
  brandTertiary: '#FFF5E1',
  onBrandTertiary: '#C29311',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  border: 'rgba(255, 255, 255, 0.55)',
  borderStrong: 'rgba(255, 255, 255, 0.85)',
  divider: 'rgba(0, 0, 0, 0.06)',
  muted: '#8E7152',
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
