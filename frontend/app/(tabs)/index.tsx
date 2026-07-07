import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
  Linking,
} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

import { colors, fonts, radius, spacing } from '@/src/theme/tokens';
import { SALON, HERO_IMAGE, CATEGORIES, REVIEWS } from '@/src/data/salon';
import GoldButton from '@/src/components/GoldButton';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const call = () => {
    Haptics.selectionAsync().catch(() => {});
    Linking.openURL(`tel:${SALON.phone}`).catch(() => {});
  };
  const whatsapp = () => {
    Haptics.selectionAsync().catch(() => {});
    Linking.openURL(`https://wa.me/${SALON.whatsapp}`).catch(() => {});
  };
  const instagram = () => {
    Haptics.selectionAsync().catch(() => {});
    Linking.openURL(SALON.instagram).catch(() => {});
  };
  const directions = () => {
    Haptics.selectionAsync().catch(() => {});
    const q = encodeURIComponent(SALON.address);
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${q}`).catch(() => {});
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
        testID="home-scroll"
      >
        {/* HERO */}
        <View style={styles.hero}>
          <Image source={HERO_IMAGE} style={styles.heroImg} contentFit="cover" transition={400} />
          <LinearGradient
            colors={['rgba(15,16,20,0.55)', 'rgba(15,16,20,0.2)', 'rgba(15,16,20,0.98)']}
            locations={[0, 0.4, 1]}
            style={StyleSheet.absoluteFill}
          />
          <View style={[styles.heroHeader, { paddingTop: insets.top + spacing.md }]}>
            <View>
              <Text style={styles.brandPill}>EST. {SALON.established}</Text>
              <Text style={styles.brandWord} numberOfLines={1}>KNOTT</Text>
              <Text style={styles.brandSub}>Unisex Salon & Academy</Text>
            </View>
            <Pressable
              testID="contact-icon"
              onPress={() => router.push('/contact')}
              style={styles.iconBtn}
            >
              <Ionicons name="location-outline" size={20} color={colors.brand} />
            </Pressable>
          </View>

          <View style={styles.heroFoot}>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={14} color={colors.brand} />
              <Text style={styles.ratingText}>{SALON.rating}</Text>
              <Text style={styles.ratingSub}>· {SALON.reviewCount} reviews · {SALON.location}</Text>
            </View>
            <Text style={styles.heroTitle}>Luxury crafted{'\n'}for every guest.</Text>
            <Text style={styles.heroBody}>
              Editorial hair, flawless makeup, hand-painted nails and skin therapy by award-winning artists.
            </Text>
            <View style={styles.heroCtaRow}>
              <GoldButton
                label="Book Appointment"
                onPress={() => router.push('/booking')}
                testID="hero-book-btn"
                style={{ flex: 1 }}
              />
              <Pressable
                testID="hero-call-btn"
                onPress={call}
                style={styles.circleBtn}
              >
                <Ionicons name="call-outline" size={20} color={colors.brand} />
              </Pressable>
              <Pressable
                testID="hero-wa-btn"
                onPress={whatsapp}
                style={styles.circleBtn}
              >
                <Ionicons name="logo-whatsapp" size={20} color={colors.brand} />
              </Pressable>
              <Pressable
                testID="hero-ig-btn"
                onPress={instagram}
                style={styles.circleBtn}
              >
                <Ionicons name="logo-instagram" size={20} color={colors.brand} />
              </Pressable>
            </View>
          </View>
        </View>

        {/* CATEGORIES */}
        <SectionTitle label="Explore" sub="Curated by category" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsRow}
          style={{ height: 122 }}
        >
          {CATEGORIES.map((c) => (
            <Pressable
              key={c.id}
              testID={`cat-${c.id}`}
              onPress={() => router.push({ pathname: '/(tabs)/services', params: { category: c.id } })}
              style={styles.catCard}
            >
              <Image source={c.image} style={styles.catImg} contentFit="cover" />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.7)']}
                style={StyleSheet.absoluteFill}
              />
              <View style={styles.catLabelWrap}>
                <Ionicons name={c.icon as any} size={14} color={colors.brand} />
                <Text style={styles.catLabel}>{c.name}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        {/* REVIEWS */}
        <SectionTitle label="Loved by Delhi" sub={`${SALON.rating}/5 from real guests`} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: spacing.lg, gap: spacing.md }}
        >
          {REVIEWS.map((r) => (
            <View key={r.id} style={styles.reviewCard} testID={`review-${r.id}`}>
              <View style={styles.reviewHead}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{r.initials}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.reviewName}>{r.name}</Text>
                  <View style={{ flexDirection: 'row', gap: 2 }}>
                    {[...Array(r.rating)].map((_, i) => (
                      <Ionicons key={i} name="star" size={11} color={colors.brand} />
                    ))}
                  </View>
                </View>
              </View>
              <Text style={styles.reviewText}>{r.text}</Text>
              <Text style={styles.reviewDate}>{r.date}</Text>
            </View>
          ))}
        </ScrollView>

        {/* VISIT US */}
        <SectionTitle label="Visit Us" sub="Book an appointment or drop by" />
        <View style={styles.visitWrap}>
          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Ionicons name="location-outline" size={18} color={colors.brand} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.infoLabel}>ADDRESS</Text>
              <Text style={styles.infoValue}>{SALON.address}</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Ionicons name="time-outline" size={18} color={colors.brand} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.infoLabel}>HOURS</Text>
              <Text style={styles.infoValue}>Mon – Sun · {SALON.hours}</Text>
            </View>
          </View>
          <Pressable style={styles.infoRow} testID="visit-call" onPress={call}>
            <View style={styles.infoIcon}>
              <Ionicons name="call-outline" size={18} color={colors.brand} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.infoLabel}>CALL US</Text>
              <Text style={styles.infoValue}>{SALON.phoneDisplay}</Text>
            </View>
          </Pressable>

          <GoldButton
            label="Book Appointment"
            onPress={() => router.push('/booking')}
            testID="visit-book-btn"
            style={{ marginTop: spacing.md }}
          />

          <View style={styles.actionRow}>
            <Pressable style={styles.actionBtn} testID="action-call" onPress={call}>
              <Ionicons name="call" size={20} color={colors.brand} />
              <Text style={styles.actionText}>Call</Text>
            </Pressable>
            <Pressable style={styles.actionBtn} testID="action-wa" onPress={whatsapp}>
              <Ionicons name="logo-whatsapp" size={20} color={colors.brand} />
              <Text style={styles.actionText}>WhatsApp</Text>
            </Pressable>
            <Pressable style={styles.actionBtn} testID="action-ig" onPress={instagram}>
              <Ionicons name="logo-instagram" size={20} color={colors.brand} />
              <Text style={styles.actionText}>Instagram</Text>
            </Pressable>
            <Pressable style={styles.actionBtn} testID="action-map" onPress={directions}>
              <Ionicons name="navigate" size={20} color={colors.brand} />
              <Text style={styles.actionText}>Directions</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function SectionTitle({ label, sub }: { label: string; sub: string }) {
  return (
    <View style={styles.sectionTitle}>
      <Text style={styles.sectionLabel}>{label}</Text>
      <Text style={styles.sectionSub}>{sub}</Text>
    </View>
  );
}

const HERO_H = 560;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  hero: { width, height: HERO_H, backgroundColor: '#000' },
  heroImg: { ...StyleSheet.absoluteFillObject },
  heroHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  brandPill: {
    color: colors.brand,
    fontSize: 10,
    letterSpacing: 3,
    fontFamily: fonts.bodyMedium,
    marginBottom: 4,
  },
  brandWord: {
    color: colors.onSurface,
    fontFamily: fonts.display,
    fontSize: 36,
    letterSpacing: 4,
  },
  brandSub: {
    color: colors.onSurfaceTertiary,
    fontSize: 11,
    letterSpacing: 2,
    fontFamily: fonts.body,
    marginTop: 2,
  },
  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    backgroundColor: 'rgba(26,28,35,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroFoot: {
    position: 'absolute',
    bottom: spacing.xl,
    left: spacing.lg,
    right: spacing.lg,
  },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.md },
  ratingText: {
    color: colors.onSurface,
    fontFamily: fonts.bodyMedium,
    fontSize: 13,
    marginLeft: 4,
  },
  ratingSub: {
    color: colors.onSurfaceTertiary,
    fontSize: 12,
    fontFamily: fonts.body,
    marginLeft: 6,
    flex: 1,
  },
  heroTitle: {
    color: colors.onSurface,
    fontFamily: fonts.display,
    fontSize: 38,
    lineHeight: 44,
    marginBottom: spacing.sm,
  },
  heroBody: {
    color: colors.onSurfaceTertiary,
    fontSize: 13,
    fontFamily: fonts.body,
    lineHeight: 20,
    marginBottom: spacing.lg,
  },
  heroCtaRow: { flexDirection: 'row', gap: spacing.sm, alignItems: 'center' },
  circleBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(212,175,55,0.08)',
  },
  sectionTitle: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
  },
  sectionLabel: {
    color: colors.onSurface,
    fontFamily: fonts.display,
    fontSize: 26,
  },
  sectionSub: {
    color: colors.muted,
    fontSize: 12,
    fontFamily: fonts.body,
    marginTop: 2,
    letterSpacing: 0.4,
  },
  seeAll: { color: colors.brand, fontSize: 12, fontFamily: fonts.bodyMedium, letterSpacing: 0.5 },
  chipsRow: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    paddingVertical: 4,
  },
  catCard: {
    width: 96,
    height: 110,
    borderRadius: radius.md,
    overflow: 'hidden',
    backgroundColor: colors.surfaceSecondary,
    flexShrink: 0,
  },
  catImg: { ...StyleSheet.absoluteFillObject },
  catLabelWrap: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  catLabel: {
    color: colors.onSurface,
    fontFamily: fonts.bodyMedium,
    fontSize: 12,
  },
  featCard: {
    width: 240,
    height: 300,
    borderRadius: radius.lg,
    overflow: 'hidden',
    backgroundColor: colors.surfaceSecondary,
  },
  featImg: { ...StyleSheet.absoluteFillObject },
  featBody: { position: 'absolute', bottom: 16, left: 16, right: 16 },
  featName: {
    color: colors.onSurface,
    fontFamily: fonts.display,
    fontSize: 22,
    lineHeight: 26,
    marginBottom: spacing.md,
  },
  featMeta: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  metaPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(212,175,55,0.15)',
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  metaText: { color: colors.brand, fontSize: 11, fontFamily: fonts.bodyMedium },
  featPrice: { color: colors.brand, fontSize: 14, fontFamily: fonts.bodyMedium },
  offerCard: {
    height: 140,
    borderRadius: radius.lg,
    overflow: 'hidden',
    backgroundColor: colors.surfaceSecondary,
  },
  offerBody: { position: 'absolute', left: 18, bottom: 18, right: 60 },
  offerBadge: {
    color: colors.brand,
    fontSize: 11,
    letterSpacing: 2,
    fontFamily: fonts.bodyMedium,
    marginBottom: 4,
  },
  offerTitle: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 24 },
  offerSub: { color: colors.onSurfaceTertiary, fontSize: 12, fontFamily: fonts.body, marginTop: 2 },
  offerArrow: { position: 'absolute', right: 18, bottom: 18 },
  stylistCard: { width: 140 },
  stylistImg: {
    width: 140,
    height: 170,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceSecondary,
    marginBottom: spacing.sm,
  },
  stylistName: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 14 },
  stylistTitle: { color: colors.muted, fontSize: 11, fontFamily: fonts.body, marginTop: 2 },
  reviewCard: {
    width: 280,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  reviewHead: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.md },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.brandTertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: colors.onBrandTertiary, fontFamily: fonts.bodyMedium, fontSize: 12 },
  reviewName: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 13 },
  reviewText: {
    color: colors.onSurfaceSecondary,
    fontSize: 13,
    lineHeight: 19,
    fontFamily: fonts.body,
    marginBottom: spacing.sm,
  },
  reviewDate: { color: colors.muted, fontSize: 11, fontFamily: fonts.body },
  galleryCta: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
    padding: spacing.lg,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  galleryTitle: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 14 },
  gallerySub: { color: colors.muted, fontSize: 12, fontFamily: fonts.body, marginTop: 2 },
  visitWrap: {
    marginHorizontal: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  infoIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(212,175,55,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoLabel: { color: colors.muted, fontSize: 10, letterSpacing: 2, fontFamily: fonts.bodyMedium },
  infoValue: { color: colors.onSurface, fontSize: 13, fontFamily: fonts.body, marginTop: 4, lineHeight: 19 },
  actionRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  actionBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    backgroundColor: 'rgba(212,175,55,0.06)',
  },
  actionText: { color: colors.onSurfaceSecondary, fontSize: 11, fontFamily: fonts.bodyMedium },
});
