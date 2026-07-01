import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

import { colors, fonts, radius, spacing } from '@/src/theme/tokens';
import { SERVICES, STYLISTS, TIME_SLOTS } from '@/src/data/salon';
import { useBookings } from '@/src/context/BookingContext';
import GoldButton from '@/src/components/GoldButton';

const { width } = Dimensions.get('window');

function getNextDays(n: number) {
  const days = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

export default function BookingFlow() {
  const params = useLocalSearchParams<{ serviceId?: string; tierIdx?: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { addBooking } = useBookings();

  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<string>(params.serviceId || SERVICES[0].id);
  const [tierIdx, setTierIdx] = useState<number>(parseInt(params.tierIdx || '0', 10));
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [stylistId, setStylistId] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  const days = useMemo(() => getNextDays(14), []);
  const service = SERVICES.find((s) => s.id === serviceId)!;
  const tier = service.tiers[tierIdx] || service.tiers[0];
  const stylist = STYLISTS.find((s) => s.id === stylistId);

  const stepLabels = ['Service', 'Date & Time', 'Stylist', 'Confirm'];

  const canNext = () => {
    if (step === 0) return !!service;
    if (step === 1) return !!time;
    if (step === 2) return !!stylistId;
    return true;
  };

  const onNext = () => {
    Haptics.selectionAsync().catch(() => {});
    if (step < 3) setStep(step + 1);
    else handleConfirm();
  };

  const handleConfirm = () => {
    if (!stylist) return;
    addBooking({
      serviceId: service.id,
      serviceName: service.name,
      tierLabel: tier.label,
      price: tier.price,
      stylistId: stylist.id,
      stylistName: stylist.name,
      date: date.toISOString(),
      time: time!,
    });
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    setBooked(true);
  };

  if (booked) {
    return (
      <View style={[styles.container, styles.successWrap, { paddingTop: insets.top + spacing.xl, paddingBottom: insets.bottom + spacing.xl }]}>
        <View style={styles.successIconWrap}>
          <Ionicons name="checkmark" size={48} color={colors.onBrandPrimary} />
        </View>
        <Text style={styles.successTitle}>Appointment Confirmed</Text>
        <Text style={styles.successSub}>We've sent confirmation to your account.</Text>

        <View style={styles.summaryCard}>
          <SummaryRow label="Service" value={service.name} />
          <SummaryRow label="Tier" value={tier.label} />
          <SummaryRow label="Date" value={date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })} />
          <SummaryRow label="Time" value={time!} />
          <SummaryRow label="Stylist" value={stylist?.name || ''} />
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalPrice}>₹{tier.price}</Text>
          </View>
        </View>

        <View style={{ width: '100%', gap: spacing.sm, marginTop: spacing.xl }}>
          <GoldButton label="View My Bookings" onPress={() => router.replace('/profile')} testID="view-bookings-btn" />
          <GoldButton label="Done" variant="outline" onPress={() => router.replace('/')} testID="done-btn" />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + spacing.sm }]}>
        <Pressable testID="booking-back" onPress={() => (step === 0 ? router.back() : setStep(step - 1))} style={styles.navBtn}>
          <Ionicons name="chevron-back" size={20} color={colors.onSurface} />
        </Pressable>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.kicker}>STEP {step + 1} OF 4</Text>
          <Text style={styles.headTitle}>{stepLabels[step]}</Text>
        </View>
        <View style={{ width: 42 }} />
      </View>

      {/* Progress bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${((step + 1) / 4) * 100}%` }]} />
      </View>

      <ScrollView contentContainerStyle={{ padding: spacing.lg, paddingBottom: 140 }} showsVerticalScrollIndicator={false}>
        {step === 0 && (
          <>
            <Text style={styles.section}>Choose service</Text>
            <View style={{ gap: spacing.sm }}>
              {SERVICES.map((s) => {
                const sel = serviceId === s.id;
                return (
                  <Pressable
                    key={s.id}
                    testID={`pick-service-${s.id}`}
                    onPress={() => { setServiceId(s.id); setTierIdx(0); }}
                    style={[styles.serviceRow, sel && styles.serviceRowActive]}
                  >
                    <Image source={s.image} style={styles.serviceImg} contentFit="cover" />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.serviceName} numberOfLines={1}>{s.name}</Text>
                      <Text style={styles.serviceMeta}>{s.duration} min · from ₹{s.tiers[0].price}</Text>
                    </View>
                    {sel ? <Ionicons name="checkmark-circle" size={22} color={colors.brand} /> : <View style={styles.unchecked} />}
                  </Pressable>
                );
              })}
            </View>

            {service.tiers.length > 1 && (
              <>
                <Text style={styles.section}>Choose tier</Text>
                <View style={{ gap: spacing.sm }}>
                  {service.tiers.map((t, idx) => {
                    const sel = idx === tierIdx;
                    return (
                      <Pressable
                        key={t.label}
                        testID={`pick-tier-${idx}`}
                        onPress={() => setTierIdx(idx)}
                        style={[styles.tier, sel && styles.tierActive]}
                      >
                        <Text style={[styles.tierLabel, sel && { color: colors.brand }]}>{t.label}</Text>
                        <Text style={[styles.tierPrice, sel && { color: colors.brand }]}>₹{t.price}</Text>
                      </Pressable>
                    );
                  })}
                </View>
              </>
            )}
          </>
        )}

        {step === 1 && (
          <>
            <Text style={styles.section}>Select date</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: spacing.sm }}>
              {days.map((d) => {
                const sel = d.toDateString() === date.toDateString();
                return (
                  <Pressable
                    key={d.toISOString()}
                    testID={`date-${d.getDate()}`}
                    onPress={() => setDate(d)}
                    style={[styles.dateCard, sel && styles.dateCardActive]}
                  >
                    <Text style={[styles.dateDow, sel && { color: colors.onBrandPrimary }]}>
                      {d.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}
                    </Text>
                    <Text style={[styles.dateNum, sel && { color: colors.onBrandPrimary }]}>{d.getDate()}</Text>
                    <Text style={[styles.dateMon, sel && { color: colors.onBrandPrimary }]}>
                      {d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>

            <Text style={styles.section}>Available time slots</Text>
            <View style={styles.slotGrid}>
              {TIME_SLOTS.map((t) => {
                const sel = time === t;
                return (
                  <Pressable
                    key={t}
                    testID={`slot-${t}`}
                    onPress={() => { setTime(t); Haptics.selectionAsync().catch(() => {}); }}
                    style={[styles.slot, sel && styles.slotActive]}
                  >
                    <Text style={[styles.slotText, sel && { color: colors.onBrandPrimary }]}>{t}</Text>
                  </Pressable>
                );
              })}
            </View>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={styles.section}>Pick your stylist</Text>
            <View style={styles.stylistGrid}>
              {STYLISTS.map((st) => {
                const sel = stylistId === st.id;
                return (
                  <Pressable
                    key={st.id}
                    testID={`pick-stylist-${st.id}`}
                    onPress={() => setStylistId(st.id)}
                    style={[styles.stylistCard, sel && styles.stylistCardActive]}
                  >
                    <Image source={st.image} style={styles.stylistImg} contentFit="cover" />
                    {sel && (
                      <View style={styles.stylistCheck}>
                        <Ionicons name="checkmark-circle" size={22} color={colors.brand} />
                      </View>
                    )}
                    <View style={{ padding: spacing.sm }}>
                      <Text style={styles.stylistName}>{st.name}</Text>
                      <Text style={styles.stylistTitle}>{st.title}</Text>
                      <View style={styles.stylistRating}>
                        <Ionicons name="star" size={10} color={colors.brand} />
                        <Text style={styles.stylistRatingText}>{st.rating} · {st.experience}y</Text>
                      </View>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </>
        )}

        {step === 3 && (
          <>
            <Text style={styles.section}>Review your booking</Text>
            <View style={styles.summaryCard}>
              <SummaryRow label="Service" value={service.name} />
              <SummaryRow label="Tier" value={tier.label} />
              <SummaryRow label="Date" value={date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })} />
              <SummaryRow label="Time" value={time || '—'} />
              <SummaryRow label="Stylist" value={stylist?.name || '—'} />
              <SummaryRow label="Duration" value={`${service.duration} min`} />
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalPrice}>₹{tier.price}</Text>
              </View>
            </View>
            <View style={styles.noteCard}>
              <Ionicons name="information-circle-outline" size={16} color={colors.brand} />
              <Text style={styles.noteText}>
                {"You can cancel or reschedule up to 4 hours before your appointment."}
              </Text>
            </View>
          </>
        )}
      </ScrollView>

      {/* Bottom CTA */}
      <View style={[styles.footer, { paddingBottom: insets.bottom || spacing.md }]}>
        <GoldButton
          label={step === 3 ? 'Confirm Booking' : 'Continue'}
          onPress={onNext}
          disabled={!canNext()}
          testID="step-next-btn"
        />
      </View>
    </View>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.sumRow}>
      <Text style={styles.sumLabel}>{label}</Text>
      <Text style={styles.sumValue} numberOfLines={1}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.lg, paddingBottom: spacing.md },
  navBtn: {
    width: 42, height: 42, borderRadius: 21,
    backgroundColor: colors.surfaceSecondary,
    borderWidth: 1, borderColor: colors.border,
    alignItems: 'center', justifyContent: 'center',
  },
  kicker: { color: colors.brand, fontSize: 10, letterSpacing: 2, fontFamily: fonts.bodyMedium },
  headTitle: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 22, marginTop: 2 },
  progressBar: { height: 2, backgroundColor: colors.divider, marginHorizontal: spacing.lg, borderRadius: 1 },
  progressFill: { height: 2, backgroundColor: colors.brand, borderRadius: 1 },
  section: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 20, marginBottom: spacing.md, marginTop: spacing.lg },
  serviceRow: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.md,
    padding: 10,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceSecondary,
    borderWidth: 1, borderColor: colors.border,
  },
  serviceRowActive: { borderColor: colors.brand },
  serviceImg: { width: 56, height: 56, borderRadius: radius.sm, backgroundColor: colors.surfaceTertiary },
  serviceName: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 14 },
  serviceMeta: { color: colors.muted, fontSize: 12, fontFamily: fonts.body, marginTop: 2 },
  unchecked: {
    width: 22, height: 22, borderRadius: 11,
    borderWidth: 1.5, borderColor: colors.borderStrong,
  },
  tier: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    padding: spacing.md, borderRadius: radius.md,
    borderWidth: 1, borderColor: colors.border,
    backgroundColor: colors.surfaceSecondary,
  },
  tierActive: { borderColor: colors.brand },
  tierLabel: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 14 },
  tierPrice: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 14 },
  dateCard: {
    width: 60, paddingVertical: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceSecondary,
    borderWidth: 1, borderColor: colors.border,
    alignItems: 'center',
    flexShrink: 0,
  },
  dateCardActive: { backgroundColor: colors.brand, borderColor: colors.brand },
  dateDow: { color: colors.muted, fontSize: 10, letterSpacing: 1, fontFamily: fonts.bodyMedium },
  dateNum: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 24, marginTop: 2 },
  dateMon: { color: colors.muted, fontSize: 9, fontFamily: fonts.bodyMedium, letterSpacing: 1, marginTop: 2 },
  slotGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  slot: {
    width: '31%',
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1, borderColor: colors.border,
    backgroundColor: colors.surfaceSecondary,
    alignItems: 'center',
  },
  slotActive: { backgroundColor: colors.brand, borderColor: colors.brand },
  slotText: { color: colors.onSurfaceSecondary, fontSize: 12, fontFamily: fonts.bodyMedium },
  stylistGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: spacing.md },
  stylistCard: {
    width: (width - spacing.lg * 2 - spacing.md) / 2,
    borderRadius: radius.lg, overflow: 'hidden',
    backgroundColor: colors.surfaceSecondary,
    borderWidth: 1, borderColor: colors.border,
  },
  stylistCardActive: { borderColor: colors.brand },
  stylistImg: { width: '100%', height: 160, backgroundColor: colors.surfaceTertiary },
  stylistCheck: { position: 'absolute', top: 8, right: 8 },
  stylistName: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 13 },
  stylistTitle: { color: colors.muted, fontSize: 11, fontFamily: fonts.body, marginTop: 2 },
  stylistRating: { flexDirection: 'row', alignItems: 'center', gap: 3, marginTop: 6 },
  stylistRatingText: { color: colors.brand, fontSize: 10, fontFamily: fonts.bodyMedium },
  summaryCard: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    borderWidth: 1, borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  sumRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 4 },
  sumLabel: { color: colors.muted, fontSize: 12, fontFamily: fonts.body },
  sumValue: { color: colors.onSurface, fontSize: 13, fontFamily: fonts.bodyMedium, maxWidth: '60%' },
  totalRow: {
    marginTop: spacing.sm, paddingTop: spacing.md,
    borderTopWidth: 1, borderTopColor: colors.divider,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  totalLabel: { color: colors.onSurface, fontFamily: fonts.bodyMedium, fontSize: 14 },
  totalPrice: { color: colors.brand, fontFamily: fonts.display, fontSize: 26 },
  noteCard: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.sm,
    padding: spacing.md, marginTop: spacing.md,
    backgroundColor: 'rgba(212,175,55,0.08)',
    borderRadius: radius.md,
    borderWidth: 1, borderColor: colors.brandTertiary,
  },
  noteText: { color: colors.onBrandTertiary, fontSize: 12, fontFamily: fonts.body, flex: 1, lineHeight: 17 },
  footer: {
    position: 'absolute', left: 0, right: 0, bottom: 0,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderTopWidth: 1, borderTopColor: colors.border,
  },
  successWrap: { alignItems: 'center', justifyContent: 'center', padding: spacing.lg },
  successIconWrap: {
    width: 96, height: 96, borderRadius: 48,
    backgroundColor: colors.brand,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  successTitle: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 32, marginBottom: spacing.sm },
  successSub: { color: colors.muted, fontSize: 13, fontFamily: fonts.body, marginBottom: spacing.xl, textAlign: 'center' },
});
