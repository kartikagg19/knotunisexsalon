import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, fonts, radius, spacing } from '@/src/theme/tokens';
import { GALLERY } from '@/src/data/salon';

const { width } = Dimensions.get('window');
const GAP = 6;
const COL = (width - spacing.lg * 2 - GAP) / 2;

export default function GalleryScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const left = GALLERY.filter((_, i) => i % 2 === 0);
  const right = GALLERY.filter((_, i) => i % 2 === 1);

  return (
    <View style={{ flex: 1, backgroundColor: colors.surface }}>
      <View style={[styles.header, { paddingTop: insets.top + spacing.sm }]}>
        <Pressable testID="gallery-back" onPress={() => router.back()} style={styles.navBtn}>
          <Ionicons name="chevron-back" size={20} color={colors.onSurface} />
        </Pressable>
        <View>
          <Text style={styles.kicker}>PORTFOLIO</Text>
          <Text style={styles.title}>Recent Looks</Text>
        </View>
        <View style={{ width: 42 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.cols}>
          <View style={{ width: COL, gap: GAP }}>
            {left.map((url, i) => (
              <Image
                key={url}
                source={url}
                style={[styles.img, { height: i % 2 === 0 ? 220 : 280 }]}
                contentFit="cover"
              />
            ))}
          </View>
          <View style={{ width: COL, gap: GAP, marginTop: 30 }}>
            {right.map((url, i) => (
              <Image
                key={url}
                source={url}
                style={[styles.img, { height: i % 2 === 0 ? 260 : 200 }]}
                contentFit="cover"
              />
            ))}
          </View>
        </View>
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
  scroll: { paddingHorizontal: spacing.lg, paddingTop: spacing.lg, paddingBottom: 120 },
  cols: { flexDirection: 'row', gap: GAP },
  img: { width: '100%', borderRadius: radius.md, backgroundColor: colors.surfaceSecondary },
});
