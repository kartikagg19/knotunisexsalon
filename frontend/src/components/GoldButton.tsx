import React from 'react';
import { Pressable, Text, StyleSheet, ActivityIndicator, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { colors, radius, spacing, fonts } from '@/src/theme/tokens';

type Props = {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  loading?: boolean;
  disabled?: boolean;
  testID?: string;
  style?: ViewStyle;
  icon?: React.ReactNode;
};

export default function GoldButton({
  label,
  onPress,
  variant = 'primary',
  loading,
  disabled,
  testID,
  style,
  icon,
}: Props) {
  const handlePress = () => {
    if (disabled || loading) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onPress?.();
  };

  return (
    <Pressable
      testID={testID}
      onPress={handlePress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'outline' && styles.outline,
        variant === 'ghost' && styles.ghost,
        pressed && { opacity: 0.85 },
        (disabled || loading) && { opacity: 0.5 },
        style,
      ]}
    >
      {variant === 'primary' && !disabled && !loading && (
        <LinearGradient
          colors={['#F0D275', '#D4AF37', '#A9821F']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[StyleSheet.absoluteFill, { borderRadius: radius.pill }]}
        />
      )}
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? colors.onBrandPrimary : colors.brand} />
      ) : (
        <>
          {icon}
          <Text
            style={[
              styles.label,
              variant === 'primary' && { color: colors.onBrandPrimary },
              variant === 'outline' && { color: colors.brand },
              variant === 'ghost' && { color: colors.onSurface },
            ]}
          >
            {label}
          </Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 52,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.xl,
    overflow: 'hidden',
  },
  primary: { backgroundColor: colors.brand },
  outline: {
    borderWidth: 1,
    borderColor: colors.brand,
    backgroundColor: 'transparent',
  },
  ghost: { backgroundColor: colors.surfaceSecondary },
  label: { fontFamily: fonts.bodyMedium, fontSize: 15, letterSpacing: 0.4 },
});
