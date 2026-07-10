import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

import { colors, fonts, radius, spacing } from '@/src/theme/tokens';
import { COURSES } from '@/src/data/salon';
import GoldButton from '@/src/components/GoldButton';

export default function AcademyScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={[styles.hero, { paddingTop: insets.top + spacing.xl }]}>
          <Image
            source="https://images.unsplash.com/photo-1613966802194-d46a163af70d?w=1600&q=85&auto=format&fit=crop"
            style={StyleSheet.absoluteFillObject}
            contentFit="cover"
          />
          <LinearGradient
            colors={['rgba(15,16,20,0.65)', 'rgba(15,16,20,0.4)', 'rgba(15,16,20,0.98)']}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.heroBody}>
            <Text style={styles.kicker}>KNOTT ACADEMY</Text>
            <Text style={styles.heroTitle}>Master the{'\n'}art of beauty.</Text>
            <Text style={styles.heroSub}>
              Industry-led courses with real salon floor practice. Become a certified beauty professional.
            </Text>
            <View style={styles.statsRow}>
              <Stat label="Graduates" value="500+" />
              <View style={styles.statDivider} />
              <Stat label="Faculty" value="12" />
              <View style={styles.statDivider} />
              <Stat label="Placement" value="92%" />
            </View>
          </View>
        </View>

        {/* Courses */}
        <Text style={styles.sectionTitle}>Live Courses</Text>
        <Text style={styles.sectionSub}>Admissions open · Hands-on training</Text>

        <View style={styles.courses}>
          {COURSES.map((c) => (
            <View key={c.id} style={styles.courseCard} testID={`course-${c.id}`}>
              <Image source={c.image} style={styles.courseImg} contentFit="cover" />
              <View style={styles.courseBody}>
                <View style={styles.badgeRow}>
                  <View style={styles.badge}>
                    <Ionicons name="time-outline" size={11} color={colors.brand} />
                    <Text style={styles.badgeText}>{c.duration}</Text>
                  </View>
                  <View style={styles.badge}>
                    <Ionicons name="people-outline" size={11} color={colors.brand} />
                    <Text style={styles.badgeText}>{c.seats} seats</Text>
                  </View>
                </View>
                <Text style={styles.courseTitle}>{c.title}</Text>
                <Text style={styles.courseLevel}>{c.level}</Text>
                <View style={styles.courseFoot}>
                  <View>
                    <Text style={styles.coursePriceLabel}>Fee</Text>
                    <Text style={styles.coursePrice}>₹{c.price.toLocaleString('en-IN')}</Text>
                  </View>
                  <GoldButton
                    label="Enroll"
                    onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {})}
                    testID={`enroll-${c.id}`}
                    style={{ paddingHorizontal: spacing.xl, height: 44 }}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <Text style={styles.statVal}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  hero: { height: 460, justifyContent: 'flex-end' },
  heroBody: { padding: spacing.lg, paddingBottom: spacing.xl },
  kicker: {
    color: colors.brand,
    fontSize: 10,
    letterSpacing: 3,
    fontFamily: fonts.bodyMedium,
    marginBottom: spacing.sm,
  },
  heroTitle: {
    color: colors.onSurface,
    fontFamily: fonts.display,
    fontSize: 40,
    lineHeight: 46,
    marginBottom: spacing.md,
  },
  heroSub: {
    color: colors.onSurfaceTertiary,
    fontSize: 13,
    lineHeight: 20,
    fontFamily: fonts.body,
    marginBottom: spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(26,28,35,0.7)',
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.md,
  },
  statDivider: { width: 1, backgroundColor: colors.border, marginVertical: 6 },
  statVal: { color: colors.brand, fontFamily: fonts.display, fontSize: 22 },
  statLabel: { color: colors.muted, fontSize: 10, fontFamily: fonts.body, letterSpacing: 1, marginTop: 2 },
  sectionTitle: {
    color: colors.onSurface,
    fontFamily: fonts.display,
    fontSize: 26,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  sectionSub: {
    color: colors.muted,
    fontSize: 12,
    fontFamily: fonts.body,
    paddingHorizontal: spacing.lg,
    marginTop: 2,
    marginBottom: spacing.lg,
  },
  courses: { paddingHorizontal: spacing.lg, gap: spacing.md },
  courseCard: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  courseImg: { width: '100%', height: 160 },
  courseBody: { padding: spacing.lg },
  badgeRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.sm },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(212,175,55,0.12)',
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: { color: colors.brand, fontSize: 10, fontFamily: fonts.bodyMedium },
  courseTitle: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 22, marginBottom: 2 },
  courseLevel: { color: colors.muted, fontSize: 12, fontFamily: fonts.body, marginBottom: spacing.lg },
  courseFoot: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  coursePriceLabel: { color: colors.muted, fontSize: 10, fontFamily: fonts.body, letterSpacing: 1 },
  coursePrice: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 18, marginTop: 2 },
});
