import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

import { colors, fonts, radius, spacing } from '@/src/theme/tokens';
import { SERVICES, SALON } from '@/src/data/salon';
import GoldButton from '@/src/components/GoldButton';

export default function BookingFlow() {
  const params = useLocalSearchParams<{ serviceId?: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState<string>(params.serviceId || '');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [booked, setBooked] = useState(false);

  const service = SERVICES.find((s) => s.id === serviceId);
  const valid =
    name.trim().length > 0 &&
    phone.trim().length >= 10 &&
    !!service &&
    date.trim().length > 0 &&
    time.trim().length > 0;

  const handleConfirm = () => {
    if (!valid || !service) return;
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});

    const lines = [
      'New Appointment Request',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service.name}`,
      `Date: ${date}`,
      `Time: ${time}`,
    ];
    if (notes.trim()) lines.push(`Notes: ${notes.trim()}`);
    const msg = encodeURIComponent(lines.join('\n'));
    // Send the booking details to the salon's booking WhatsApp number
    Linking.openURL(`https://wa.me/${SALON.bookingWhatsapp}?text=${msg}`).catch(() => {});
    setBooked(true);
  };

  if (booked) {
    return (
      <View
        style={[
          styles.container,
          styles.successWrap,
          { paddingTop: insets.top + spacing.xl, paddingBottom: insets.bottom + spacing.xl },
        ]}
      >
        <View style={styles.successIconWrap}>
          <Ionicons name="checkmark" size={48} color={colors.onBrandPrimary} />
        </View>
        <Text style={styles.successTitle}>Booking Requested</Text>
        <Text style={styles.successSub}>
          We've sent your details to the salon on WhatsApp. We'll confirm your slot within minutes.
        </Text>

        <View style={styles.summaryCard}>
          <SummaryRow label="Name" value={name} />
          <SummaryRow label="Phone" value={phone} />
          <SummaryRow label="Service" value={service?.name || '—'} />
          <SummaryRow label="Date" value={date} />
          <SummaryRow label="Time" value={time} />
        </View>

        <View style={{ width: '100%', gap: spacing.sm, marginTop: spacing.xl }}>
          <GoldButton
            label="Message on WhatsApp again"
            onPress={handleConfirm}
            testID="resend-wa-btn"
          />
          <GoldButton label="Done" variant="outline" onPress={() => router.replace('/')} testID="done-btn" />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + spacing.sm }]}>
        <Pressable testID="booking-back" onPress={() => router.back()} style={styles.navBtn}>
          <Ionicons name="chevron-back" size={20} color={colors.onSurface} />
        </Pressable>
        <View style={{ width: 42 }} />
      </View>

      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, paddingBottom: 160 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.kicker}>BOOK YOUR SLOT</Text>
        <Text style={styles.title}>Reserve Your Slot</Text>
        <Text style={styles.subtitle}>
          Tell us what you'd love — we'll confirm your appointment on WhatsApp within minutes.
        </Text>

        {/* Name */}
        <Text style={styles.label}>
          Your Name <Text style={styles.req}>*</Text>
        </Text>
        <TextInput
          testID="input-name"
          value={name}
          onChangeText={setName}
          placeholder="e.g. Priya Sharma"
          placeholderTextColor={colors.muted}
          style={styles.input}
        />

        {/* Phone */}
        <Text style={styles.label}>
          Phone Number <Text style={styles.req}>*</Text>
        </Text>
        <TextInput
          testID="input-phone"
          value={phone}
          onChangeText={setPhone}
          placeholder="10-digit mobile"
          placeholderTextColor={colors.muted}
          keyboardType="phone-pad"
          maxLength={10}
          style={styles.input}
        />

        {/* Service */}
        <Text style={styles.label}>
          Service <Text style={styles.req}>*</Text>
        </Text>
        <Pressable testID="input-service" style={styles.select} onPress={() => setPickerOpen(true)}>
          <Text style={[styles.selectText, !service && { color: colors.muted }]}>
            {service ? service.name : 'Select a service'}
          </Text>
          <Ionicons name="chevron-down" size={18} color={colors.muted} />
        </Pressable>

        {/* Date & Time */}
        <View style={styles.rowTwo}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>
              Date <Text style={styles.req}>*</Text>
            </Text>
            <TextInput
              testID="input-date"
              value={date}
              onChangeText={setDate}
              placeholder="DD/MM/YY"
              placeholderTextColor={colors.muted}
              style={styles.input}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>
              Time <Text style={styles.req}>*</Text>
            </Text>
            <TextInput
              testID="input-time"
              value={time}
              onChangeText={setTime}
              placeholder="e.g. 5:00 PM"
              placeholderTextColor={colors.muted}
              style={styles.input}
            />
          </View>
        </View>

        {/* Notes */}
        <Text style={styles.label}>Notes (optional)</Text>
        <TextInput
          testID="input-notes"
          value={notes}
          onChangeText={setNotes}
          placeholder="Anything we should know?"
          placeholderTextColor={colors.muted}
          multiline
          style={[styles.input, styles.textarea]}
        />
      </ScrollView>

      {/* Bottom CTA */}
      <View style={[styles.footer, { paddingBottom: insets.bottom || spacing.md }]}>
        <GoldButton
          label="Confirm Booking"
          onPress={handleConfirm}
          disabled={!valid}
          testID="confirm-booking-btn"
        />
      </View>

      {/* Service picker overlay */}
      {pickerOpen && (
        <View style={styles.pickerOverlay}>
          <Pressable style={StyleSheet.absoluteFill} onPress={() => setPickerOpen(false)} />
          <View style={[styles.pickerCard, { paddingBottom: insets.bottom + spacing.md }]}>
            <View style={styles.pickerHead}>
              <Text style={styles.pickerTitle}>Select a service</Text>
              <Pressable testID="picker-close" onPress={() => setPickerOpen(false)}>
                <Ionicons name="close" size={22} color={colors.onSurface} />
              </Pressable>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {SERVICES.map((s) => {
                const sel = s.id === serviceId;
                return (
                  <Pressable
                    key={s.id}
                    testID={`pick-service-${s.id}`}
                    onPress={() => {
                      Haptics.selectionAsync().catch(() => {});
                      setServiceId(s.id);
                      setPickerOpen(false);
                    }}
                    style={styles.pickerRow}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={styles.pickerRowName}>{s.name}</Text>
                      <Text style={styles.pickerRowMeta}>from ₹{s.tiers[0].price}</Text>
                    </View>
                    {sel ? (
                      <Ionicons name="checkmark-circle" size={20} color={colors.brand} />
                    ) : null}
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.sumRow}>
      <Text style={styles.sumLabel}>{label}</Text>
      <Text style={styles.sumValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.lg, paddingBottom: spacing.sm },
  navBtn: {
    width: 42, height: 42, borderRadius: 21,
    backgroundColor: colors.surfaceSecondary,
    borderWidth: 1, borderColor: colors.border,
    alignItems: 'center', justifyContent: 'center',
  },
  kicker: { color: colors.brand, fontSize: 11, letterSpacing: 3, fontFamily: fonts.bodyMedium },
  title: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 32, marginTop: 6 },
  subtitle: { color: colors.onSurfaceTertiary, fontSize: 13, fontFamily: fonts.body, lineHeight: 20, marginTop: spacing.sm, marginBottom: spacing.lg },
  label: { color: colors.onSurface, fontSize: 13, fontFamily: fonts.bodyMedium, marginTop: spacing.lg, marginBottom: spacing.sm },
  req: { color: colors.brand },
  input: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.md,
    borderWidth: 1, borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    color: colors.onSurface,
    fontSize: 14,
    fontFamily: fonts.body,
  },
  textarea: { height: 90, textAlignVertical: 'top' },
  select: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.md,
    borderWidth: 1, borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  selectText: { color: colors.onSurface, fontSize: 14, fontFamily: fonts.body },
  rowTwo: { flexDirection: 'row', gap: spacing.md },
  footer: {
    position: 'absolute', left: 0, right: 0, bottom: 0,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderTopWidth: 1, borderTopColor: colors.border,
  },
  pickerOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  pickerCard: {
    maxHeight: '75%',
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.lg, borderTopRightRadius: radius.lg,
    borderTopWidth: 1, borderColor: colors.border,
    paddingHorizontal: spacing.lg, paddingTop: spacing.lg,
  },
  pickerHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.md },
  pickerTitle: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 20 },
  pickerRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1, borderBottomColor: colors.divider,
  },
  pickerRowName: { color: colors.onSurface, fontSize: 14, fontFamily: fonts.bodyMedium },
  pickerRowMeta: { color: colors.brand, fontSize: 12, fontFamily: fonts.body, marginTop: 2 },
  summaryCard: {
    width: '100%',
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    borderWidth: 1, borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  sumRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 4 },
  sumLabel: { color: colors.muted, fontSize: 12, fontFamily: fonts.body },
  sumValue: { color: colors.onSurface, fontSize: 13, fontFamily: fonts.bodyMedium, maxWidth: '60%' },
  successWrap: { alignItems: 'center', justifyContent: 'center', padding: spacing.lg },
  successIconWrap: {
    width: 96, height: 96, borderRadius: 48,
    backgroundColor: colors.brand,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  successTitle: { color: colors.onSurface, fontFamily: fonts.display, fontSize: 32, marginBottom: spacing.sm },
  successSub: { color: colors.muted, fontSize: 13, fontFamily: fonts.body, marginBottom: spacing.md, textAlign: 'center', lineHeight: 19 },
});
