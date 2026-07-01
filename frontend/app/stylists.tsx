import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, fonts, radius, spacing } from '@/src/theme/tokens';
import { STYLISTS } from '@/src/data/salon';

const { width } = Dimensions.get('window');
const CARD_W = (width - spacing.lg * 2 - spacing.md) / 2;

export default function StylistsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: colors.surface }}>
      <View style={[styles.header, { paddingTop: insets.top + spacing.sm }]}>
        <Pressable testID="stylists-back" onPress={() => router.back()} style={styles.navBtn}>
          <Ionicons name="chevron-back" size={20} color={colors.onSurface} />
        </Pressable>
        <View>
          <Text style={styles.kicker}>OUR TEAM</Text>
          <Text style={styles.title}>The Experts</Text>
        </View>
        <View style={{ width: 42 }} />
      </View>

      <ScrollView contentContainerStyle={styles.grid} showsVerticalScrollIndicator={false}>
        {STYLISTS.map((st) => (
          <View key={st.id} style={styles.card} testID={`stylist-${st.id}`}>
            <Image source={st.image} style={styles.img} contentFit="cover" />
            <View style={styles.cardBody}>
              <Text style={styles.name}>{st.name}</Text>
              <Text style={styles.role}>{st.title}</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={11} color={colors.brand} />
                <Text style={styles.ratingText}>{st.rating}</Text>
                <Text style={styles.exp}> · {st.experience}y exp</Text>
              </View>
              <View style={styles.specRow}>
                {st.specialties.slice(0, 2).map((sp) => (
                  <View key={sp} style={styles.specPill}>
                    <Text style={styles.specText}>{sp}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: spacing.lg, paddingBottom: spacing.lg,
    borderBottomWidth: 1, borderBottomColor: colors.divider,
  },
  navBtn: {
    width: 42, height: 42, borderRadius: 21,
    backgroundColor: colors.surfaceSecondary,
    borderWidth: 1, borderColor: colors.border,
    alignItems: 'center', justifyContent: 'center',
  },
  kicker: { color: colors.brand, fontSize: 10, letterSpacing: 3, fontFamily: fonts.bodyMedium, textAlign: 'center' },
  title: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 22, marginTop: 2, textAlign: 'center' },
  grid: {
    flexDirection: 'row', flexWrap: 'wrap',
    paddingHorizontal: spacing.lg, paddingTop: spacing.lg,
    paddingBottom: 120,
    gap: spacing.md,
    justifyContent: 'space-between',
  },
  card: {
    width: CARD_W,
    borderRadius: radius.lg, overflow: 'hidden',
    backgroundColor: colors.surfaceSecondary,
    borderWidth: 1, borderColor: colors.border,
  },
  img: { width: '100%', height: 200, backgroundColor: colors.surfaceTertiary },
  cardBody: { padding: spacing.md },
  name: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 14 },
  role: { color: colors.muted, fontSize: 11, fontFamily: fonts.body, marginTop: 2 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 3, marginTop: 6 },
  ratingText: { color: colors.brand, fontSize: 11, fontFamily: fonts.bodyMedium },
  exp: { color: colors.muted, fontSize: 11, fontFamily: fonts.body },
  specRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginTop: spacing.sm },
  specPill: {
    backgroundColor: 'rgba(212,175,55,0.1)',
    paddingHorizontal: 8, paddingVertical: 3,
    borderRadius: radius.pill,
  },
  specText: { color: colors.brand, fontSize: 9, fontFamily: fonts.bodyMedium, letterSpacing: 0.4 },
});
