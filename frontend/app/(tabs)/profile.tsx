import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

import { colors, fonts, radius, spacing } from '@/src/theme/tokens';
import { SALON } from '@/src/data/salon';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.surface }}
      contentContainerStyle={{ paddingTop: insets.top + spacing.lg, paddingBottom: 140 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>G</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Welcome, Guest</Text>
          <Text style={styles.sub}>Member of {SALON.name}</Text>
        </View>
        <Pressable
          testID="profile-settings"
          style={styles.iconBtn}
          onPress={() => Haptics.selectionAsync().catch(() => {})}
        >
          <Ionicons name="settings-outline" size={20} color={colors.brand} />
        </Pressable>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickRow}>
        <QuickAction
          icon="calendar-outline"
          label="Book"
          onPress={() => router.push('/booking')}
          testID="qa-book"
        />
        <QuickAction
          icon="sparkles-outline"
          label="Services"
          onPress={() => router.push('/services')}
          testID="qa-services"
        />
        <QuickAction
          icon="location-outline"
          label="Visit"
          onPress={() => router.push('/contact')}
          testID="qa-visit"
        />
      </View>

      {/* Links */}
      <View style={styles.linksGroup}>
        <LinkRow icon="call-outline" label="Call salon" sub={SALON.phoneDisplay} onPress={() => Linking.openURL(`tel:${SALON.phone}`).catch(() => {})} testID="link-call" />
        <LinkRow icon="logo-whatsapp" iconColor="#25D366" label="WhatsApp us" sub="Quick replies" onPress={() => Linking.openURL(`https://wa.me/${SALON.whatsapp}`).catch(() => {})} testID="link-wa" />
        <LinkRow icon="logo-instagram" iconColor="#E1306C" label="Instagram" sub="See latest looks" onPress={() => Linking.openURL(SALON.instagram).catch(() => {})} testID="link-ig" />
        <LinkRow icon="help-circle-outline" label="Help & Support" sub="FAQs and contact" onPress={() => {}} testID="link-help" last />
      </View>
    </ScrollView>
  );
}

function QuickAction({ icon, label, onPress, testID }: { icon: any; label: string; onPress: () => void; testID?: string }) {
  return (
    <Pressable
      testID={testID}
      onPress={() => {
        Haptics.selectionAsync().catch(() => {});
        onPress();
      }}
      style={styles.qa}
    >
      <View style={styles.qaIcon}>
        <Ionicons name={icon} size={20} color={colors.brand} />
      </View>
      <Text style={styles.qaLabel}>{label}</Text>
    </Pressable>
  );
}

function LinkRow({ icon, label, sub, onPress, testID, last, iconColor }: { icon: any; label: string; sub: string; onPress: () => void; testID?: string; last?: boolean; iconColor?: string }) {
  return (
    <Pressable testID={testID} onPress={onPress} style={[styles.link, !last && { borderBottomWidth: 1, borderBottomColor: colors.divider }]}>
      <View style={styles.linkIcon}>
        <Ionicons name={icon} size={18} color={iconColor || colors.brand} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.linkLabel}>{label}</Text>
        <Text style={styles.linkSub}>{sub}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.muted} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.brandTertiary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.brand,
  },
  avatarText: { color: colors.brand, fontFamily: fonts.display, fontSize: 24 },
  name: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 22 },
  sub: { color: colors.muted, fontSize: 12, fontFamily: fonts.body, marginTop: 2 },
  iconBtn: {
    width: 42, height: 42, borderRadius: 21,
    borderWidth: 1, borderColor: colors.border,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: colors.surfaceSecondary,
  },
  quickRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  qa: {
    flex: 1,
    backgroundColor: colors.surfaceSecondary,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'center',
  },
  qaIcon: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: 'rgba(212,175,55,0.12)',
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 6,
  },
  qaLabel: { color: colors.onSurface, fontSize: 11, fontFamily: fonts.bodyMedium },
  loyalty: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.brandTertiary,
    padding: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  loyaltyKicker: { color: colors.brand, fontSize: 10, letterSpacing: 3, fontFamily: fonts.bodyMedium },
  loyaltyTitle: { color: colors.muted, fontSize: 12, fontFamily: fonts.body, marginTop: 4 },
  loyaltyValue: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 28, marginTop: 2 },
  sectionTitle: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 24, paddingHorizontal: spacing.lg },
  sectionSub: { color: colors.muted, fontSize: 12, fontFamily: fonts.body, paddingHorizontal: spacing.lg, marginTop: 2, marginBottom: spacing.md },
  empty: {
    marginHorizontal: spacing.lg,
    padding: spacing.xl,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  emptyTitle: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 14, marginTop: spacing.md },
  emptySub: { color: colors.muted, fontSize: 12, fontFamily: fonts.body, marginTop: 4, marginBottom: spacing.lg },
  emptyBtn: {
    paddingHorizontal: spacing.xl, paddingVertical: spacing.md,
    borderRadius: radius.pill, backgroundColor: colors.brand,
  },
  emptyBtnText: { color: colors.onBrandPrimary, fontFamily: fonts.bodyMedium, fontSize: 13 },
  bookingCard: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  bookingTop: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  dateBox: {
    width: 56, height: 64,
    borderRadius: radius.md,
    backgroundColor: colors.brandTertiary,
    alignItems: 'center', justifyContent: 'center',
  },
  dateDay: { color: colors.brand, fontFamily: fonts.display, fontSize: 24, lineHeight: 26 },
  dateMon: { color: colors.brand, fontSize: 10, fontFamily: fonts.bodyMedium, letterSpacing: 2 },
  bookingName: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 14 },
  bookingTier: { color: colors.brand, fontSize: 12, fontFamily: fonts.body, marginTop: 2 },
  bookingMeta: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 6 },
  bookingMetaText: { color: colors.muted, fontSize: 11, fontFamily: fonts.body },
  cancelBtn: {
    marginTop: spacing.md,
    paddingVertical: 10,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  cancelText: { color: colors.muted, fontSize: 12, fontFamily: fonts.bodyMedium, letterSpacing: 0.5 },
  linksGroup: {
    marginTop: spacing.xl,
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  link: { flexDirection: 'row', alignItems: 'center', padding: spacing.md, gap: spacing.md },
  linkIcon: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: 'rgba(212,175,55,0.1)',
    alignItems: 'center', justifyContent: 'center',
  },
  linkLabel: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 13 },
  linkSub: { color: colors.muted, fontSize: 11, fontFamily: fonts.body, marginTop: 1 },
});
