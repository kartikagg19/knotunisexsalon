import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

import { colors, fonts, radius, spacing } from '@/src/theme/tokens';
import { SALON } from '@/src/data/salon';

export default function ContactScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const openMap = () => {
    Haptics.selectionAsync().catch(() => {});
    const q = encodeURIComponent(SALON.address);
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${q}`).catch(() => {});
  };
  const call = () => {
    Haptics.selectionAsync().catch(() => {});
    Linking.openURL(`tel:${SALON.phone}`).catch(() => {});
  };
  const whatsapp = () => {
    Haptics.selectionAsync().catch(() => {});
    Linking.openURL(`https://wa.me/${SALON.whatsapp}`).catch(() => {});
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.surface }} contentContainerStyle={{ paddingBottom: 140 }}>
      {/* Top nav */}
      <View style={[styles.topNav, { paddingTop: insets.top + spacing.sm }]}>
        <Pressable testID="contact-back" onPress={() => router.back()} style={styles.navBtn}>
          <Ionicons name="chevron-back" size={20} color={colors.onSurface} />
        </Pressable>
      </View>

      {/* Map graphic */}
      <View style={styles.mapBox}>
        <Image
          source="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=85&auto=format&fit=crop"
          style={StyleSheet.absoluteFillObject}
          contentFit="cover"
        />
        <LinearGradient
          colors={['rgba(15,16,20,0.5)', 'rgba(15,16,20,0.4)', 'rgba(15,16,20,1)']}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.pinWrap}>
          <View style={styles.pin}>
            <Ionicons name="cut" size={20} color={colors.onBrandPrimary} />
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.kicker}>VISIT US</Text>
        <Text style={styles.title}>Knott Unisex Salon</Text>
        <Text style={styles.tagline}>Best Salon & Academy · Uttam Nagar, Delhi</Text>

        <View style={styles.row}>
          <View style={styles.rowIcon}>
            <Ionicons name="location-outline" size={18} color={colors.brand} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowLabel}>Address</Text>
            <Text style={styles.rowValue}>{SALON.address}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rowIcon}>
            <Ionicons name="time-outline" size={18} color={colors.brand} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowLabel}>Hours</Text>
            <Text style={styles.rowValue}>{SALON.hours}</Text>
            <Text style={styles.rowSub}>Mon – Sun · 10:00 AM – 10:00 PM</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rowIcon}>
            <Ionicons name="star-outline" size={18} color={colors.brand} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowLabel}>Rating</Text>
            <Text style={styles.rowValue}>{SALON.rating}/5 from {SALON.reviewCount} Google reviews</Text>
          </View>
        </View>

        {/* Big buttons */}
        <View style={{ gap: spacing.md, marginTop: spacing.xl }}>
          <BigBtn icon="call-outline" label="Call Salon" sub={SALON.phoneDisplay} onPress={call} testID="big-call" />
          <BigBtn icon="logo-whatsapp" label="Chat on WhatsApp" sub="Quick booking" onPress={whatsapp} testID="big-wa" />
          <BigBtn icon="navigate-outline" label="Get Directions" sub="Open in Google Maps" onPress={openMap} testID="big-map" />
        </View>
      </View>
    </ScrollView>
  );
}

function BigBtn({ icon, label, sub, onPress, testID }: { icon: any; label: string; sub: string; onPress: () => void; testID: string }) {
  return (
    <Pressable testID={testID} onPress={onPress} style={styles.bigBtn}>
      <View style={styles.bigBtnIcon}>
        <Ionicons name={icon} size={22} color={colors.brand} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.bigBtnLabel}>{label}</Text>
        <Text style={styles.bigBtnSub}>{sub}</Text>
      </View>
      <Ionicons name="arrow-forward" size={18} color={colors.brand} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  topNav: { position: 'absolute', top: 0, left: 0, paddingHorizontal: spacing.lg, zIndex: 5 },
  navBtn: {
    width: 42, height: 42, borderRadius: 21,
    backgroundColor: 'rgba(15,16,20,0.7)',
    borderWidth: 1, borderColor: colors.borderStrong,
    alignItems: 'center', justifyContent: 'center',
  },
  mapBox: { height: 320, backgroundColor: colors.surfaceSecondary },
  pinWrap: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
  pin: {
    width: 56, height: 56, borderRadius: 28,
    backgroundColor: colors.brand,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 4, borderColor: 'rgba(15,16,20,0.6)',
  },
  body: { padding: spacing.lg, marginTop: -40 },
  kicker: { color: colors.brand, fontSize: 10, letterSpacing: 3, fontFamily: fonts.bodyMedium },
  title: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 32, marginTop: 4 },
  tagline: { color: colors.onSurfaceTertiary, fontSize: 13, fontFamily: fonts.body, marginTop: 4, marginBottom: spacing.xl },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.md, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.divider },
  rowIcon: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: 'rgba(212,175,55,0.1)',
    alignItems: 'center', justifyContent: 'center',
  },
  rowLabel: { color: colors.muted, fontSize: 10, letterSpacing: 2, fontFamily: fonts.bodyMedium },
  rowValue: { color: colors.onSurface, fontSize: 13, fontFamily: fonts.body, marginTop: 4, lineHeight: 19 },
  rowSub: { color: colors.muted, fontSize: 11, fontFamily: fonts.body, marginTop: 2 },
  bigBtn: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.md,
    padding: spacing.md, paddingRight: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceSecondary,
    borderWidth: 1, borderColor: colors.border,
  },
  bigBtnIcon: {
    width: 48, height: 48, borderRadius: 24,
    backgroundColor: 'rgba(212,175,55,0.1)',
    alignItems: 'center', justifyContent: 'center',
  },
  bigBtnLabel: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 15 },
  bigBtnSub: { color: colors.muted, fontSize: 12, fontFamily: fonts.body, marginTop: 2 },
});
