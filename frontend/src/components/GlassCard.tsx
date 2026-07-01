import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { colors, radius } from '@/src/theme/tokens';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  intensity?: number;
};

export default function GlassCard({ children, style, intensity = 30 }: Props) {
  if (Platform.OS === 'web') {
    return <View style={[styles.fallback, style]}>{children}</View>;
  }
  return (
    <BlurView intensity={intensity} tint="dark" style={[styles.glass, style]}>
      <View style={styles.tint}>{children}</View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  glass: {
    borderRadius: radius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  tint: {
    backgroundColor: 'rgba(26, 28, 35, 0.55)',
    flex: 1,
  },
  fallback: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
