import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions, Platform } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';

import { colors, fonts, radius, spacing } from '@/src/theme/tokens';
import { SERVICES } from '@/src/data/salon';
import GoldButton from '@/src/components/GoldButton';

const { width } = Dimensions.get('window');

export default function ServiceDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const service = SERVICES.find((s) => s.id === id);
  const [tierIdx, setTierIdx] = useState(0);

  if (!service) {
    return (
      <View style={[styles.container, { padding: spacing.xl, paddingTop: insets.top + spacing.xl }]}>
        <Text style={{ color: colors.onSurface, fontFamily: fonts.body }}>Service not found.</Text>
      </View>
    );
  }

  const tier = service.tiers[tierIdx];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 140 }} showsVerticalScrollIndicator={false}>
        {/* Image */}
        <View style={styles.heroBox}>
          <Image source={service.image} style={StyleSheet.absoluteFillObject} contentFit="cover" />
          <LinearGradient
            colors={['rgba(15,16,20,0.5)', 'transparent', 'rgba(15,16,20,1)']}
            locations={[0, 0.45, 1]}
            style={StyleSheet.absoluteFill}
          />
          <View style={[styles.topNav, { paddingTop: insets.top + spacing.sm }]}>
            <Pressable testID="back-btn" onPress={() => router.back()} style={styles.navBtn}>
              <Ionicons name="chevron-back" size={22} color={colors.onSurface} />
            </Pressable>
            <Pressable testID="fav-btn" style={styles.navBtn}>
              <Ionicons name="heart-outline" size={20} color={colors.onSurface} />
            </Pressable>
          </View>
        </View>

        {/* Content */}
        <View style={styles.body}>
          <Text style={styles.kicker}>SIGNATURE TREATMENT</Text>
          <Text style={styles.title}>{service.name}</Text>
          <View style={styles.metaRow}>
            <View style={styles.metaPill}>
              <Ionicons name="time-outline" size={13} color={colors.brand} />
              <Text style={styles.metaText}>{service.duration} min</Text>
            </View>
            <View style={styles.metaPill}>
              <Ionicons name="star" size={13} color={colors.brand} />
              <Text style={styles.metaText}>4.9</Text>
            </View>
          </View>

          <Text style={styles.section}>About</Text>
          <Text style={styles.desc}>{service.description}</Text>

          <Text style={styles.section}>Choose your tier</Text>
          <View style={{ gap: spacing.sm }}>
            {service.tiers.map((t, idx) => {
              const sel = idx === tierIdx;
              return (
                <Pressable
                  key={t.label}
                  testID={`tier-${idx}`}
                  onPress={() => setTierIdx(idx)}
                  style={[styles.tier, sel && styles.tierActive]}
                >
                  <View style={[styles.radio, sel && styles.radioActive]}>
                    {sel ? <View style={styles.radioDot} /> : null}
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.tierLabel, sel && { color: colors.brand }]}>{t.label}</Text>
                    <Text style={styles.tierSub}>Performed by certified artist</Text>
                  </View>
                  <Text style={[styles.tierPrice, sel && { color: colors.brand }]}>₹{t.price}</Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={styles.section}>{"What's included"}</Text>
          <View style={{ gap: spacing.sm }}>
            {['Personal consultation', 'Premium products', 'Refreshments on the house', 'Aftercare guidance'].map((inc) => (
              <View key={inc} style={styles.incRow}>
                <Ionicons name="checkmark-circle" size={16} color={colors.brand} />
                <Text style={styles.incText}>{inc}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Sticky bottom CTA */}
      <View style={[styles.cta, { paddingBottom: insets.bottom || spacing.md }]}>
        {Platform.OS !== 'web' ? (
          <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill}>
            <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(15,16,20,0.92)' }]} />
          </BlurView>
        ) : (
          <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(15,16,20,0.98)' }]} />
        )}
        <View style={styles.ctaInner}>
          <View>
            <Text style={styles.ctaLabel}>Total</Text>
            <Text style={styles.ctaPrice}>₹{tier.price}</Text>
          </View>
          <GoldButton
            label="Book Now"
            testID="book-now-btn"
            style={{ paddingHorizontal: spacing.xxl }}
            onPress={() =>
              router.push({
                pathname: '/booking',
                params: { serviceId: service.id, tierIdx: String(tierIdx) },
              })
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  heroBox: { width, height: 380, backgroundColor: '#000' },
  topNav: {
    position: 'absolute', top: 0, left: 0, right: 0,
    flexDirection: 'row', justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
  },
  navBtn: {
    width: 42, height: 42, borderRadius: 21,
    backgroundColor: 'rgba(15,16,20,0.6)',
    borderWidth: 1, borderColor: colors.borderStrong,
    alignItems: 'center', justifyContent: 'center',
  },
  body: { paddingHorizontal: spacing.lg, paddingTop: spacing.lg },
  kicker: { color: colors.brand, fontSize: 10, letterSpacing: 3, fontFamily: fonts.bodyMedium },
  title: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 32, lineHeight: 36, marginTop: 6 },
  metaRow: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.md },
  metaPill: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    backgroundColor: 'rgba(212,175,55,0.12)',
    borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 5,
  },
  metaText: { color: colors.brand, fontSize: 12, fontFamily: fonts.bodyMedium },
  section: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 20, marginTop: spacing.xl, marginBottom: spacing.md },
  desc: { color: colors.onSurfaceTertiary, fontSize: 13, lineHeight: 21, fontFamily: fonts.body },
  tier: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1, borderColor: colors.border,
    backgroundColor: colors.surfaceSecondary,
  },
  tierActive: { borderColor: colors.brand, backgroundColor: 'rgba(212,175,55,0.06)' },
  radio: {
    width: 22, height: 22, borderRadius: 11,
    borderWidth: 1.5, borderColor: colors.borderStrong,
    alignItems: 'center', justifyContent: 'center',
  },
  radioActive: { borderColor: colors.brand },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.brand },
  tierLabel: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 14 },
  tierSub: { color: colors.muted, fontSize: 11, fontFamily: fonts.body, marginTop: 2 },
  tierPrice: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 15 },
  incRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  incText: { color: colors.onSurfaceSecondary, fontSize: 13, fontFamily: fonts.body },
  cta: {
    position: 'absolute', left: 0, right: 0, bottom: 0,
    borderTopWidth: 1, borderTopColor: colors.border,
    paddingTop: spacing.md, paddingHorizontal: spacing.lg,
    overflow: 'hidden',
  },
  ctaInner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  ctaLabel: { color: colors.muted, fontSize: 10, letterSpacing: 2, fontFamily: fonts.bodyMedium },
  ctaPrice: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 26, marginTop: 2 },
});
