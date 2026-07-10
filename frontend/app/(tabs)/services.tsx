import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  Platform,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';

import { colors, fonts, radius, spacing } from '@/src/theme/tokens';
import { CATEGORIES, SERVICES } from '@/src/data/salon';

export default function ServicesScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const params = useLocalSearchParams<{ category?: string }>();
  const [active, setActive] = useState<string>(params.category || 'all');

  const data = useMemo(() => {
    if (active === 'all') return SERVICES;
    return SERVICES.filter((s) => s.categoryId === active);
  }, [active]);

  const chips = [{ id: 'all', name: 'All' }, ...CATEGORIES.map((c) => ({ id: c.id, name: c.name }))];

  return (
    <View style={styles.container}>
      {/* Sticky glass header */}
      <View style={[styles.header, { paddingTop: insets.top + spacing.sm }]}>
        {Platform.OS !== 'web' ? (
          <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill}>
            <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(15,16,20,0.85)' }]} />
          </BlurView>
        ) : (
          <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(15,16,20,0.96)' }]} />
        )}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.kicker}>OUR MENU</Text>
            <Text style={styles.title}>Services</Text>
          </View>
          <Text style={styles.count}>{data.length} treatments</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsRow}
        >
          {chips.map((c) => {
            const sel = active === c.id;
            return (
              <Pressable
                key={c.id}
                testID={`chip-${c.id}`}
                onPress={() => setActive(c.id)}
                style={[styles.chip, sel && styles.chipActive]}
              >
                <Text style={[styles.chipText, sel && styles.chipTextActive]}>{c.name}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <FlatList
        data={data}
        keyExtractor={(s) => s.id}
        contentContainerStyle={{
          paddingTop: insets.top + 130,
          paddingHorizontal: spacing.lg,
          paddingBottom: 120,
          gap: spacing.md,
        }}
        testID="services-list"
        renderItem={({ item }) => (
          <Pressable
            testID={`service-${item.id}`}
            onPress={() => router.push(`/service/${item.id}`)}
            style={styles.row}
          >
            <Image source={item.image} style={styles.rowImg} contentFit="cover" />
            <View style={styles.rowBody}>
              <Text style={styles.rowName} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.rowDesc} numberOfLines={2}>{item.description}</Text>
              <View style={styles.rowMeta}>
                <View style={styles.metaPill}>
                  <Ionicons name="time-outline" size={11} color={colors.brand} />
                  <Text style={styles.metaText}>{item.duration} min</Text>
                </View>
                <Text style={styles.rowPrice}>from ₹{item.tiers[0].price}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingBottom: spacing.sm,
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  kicker: {
    color: colors.brand,
    fontSize: 10,
    letterSpacing: 3,
    fontFamily: fonts.bodyMedium,
    marginBottom: 4,
  },
  title: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 30 },
  count: { color: colors.muted, fontSize: 11, fontFamily: fonts.body, paddingBottom: 6 },
  chipsRow: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    alignItems: 'center',
    height: 56,
  },
  chip: {
    height: 36,
    paddingHorizontal: 16,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    backgroundColor: 'rgba(26,28,35,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  chipActive: { borderColor: colors.brand, backgroundColor: 'rgba(212,175,55,0.12)' },
  chipText: { color: colors.onSurfaceTertiary, fontSize: 12, fontFamily: fonts.bodyMedium, letterSpacing: 0.4 },
  chipTextActive: { color: colors.brand },
  row: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    gap: spacing.md,
  },
  rowImg: {
    width: 92,
    height: 92,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceTertiary,
  },
  rowBody: { flex: 1, justifyContent: 'space-between', paddingVertical: 2 },
  rowName: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 15 },
  rowDesc: { color: colors.muted, fontSize: 12, fontFamily: fonts.body, lineHeight: 17, marginTop: 4 },
  rowMeta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  metaPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'rgba(212,175,55,0.12)',
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  metaText: { color: colors.brand, fontSize: 10, fontFamily: fonts.bodyMedium },
  rowPrice: { color: colors.brand, fontFamily: fonts.bodyMedium, fontSize: 14 },
});
