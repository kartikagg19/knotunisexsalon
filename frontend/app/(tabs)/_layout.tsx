import React from 'react';
import { Tabs } from 'expo-router';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '@/src/theme/tokens';

function TabBarBackground() {
  if (Platform.OS === 'web') {
    return <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(15,16,20,0.96)' }]} />;
  }
  return (
    <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill}>
      <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(15,16,20,0.78)' }]} />
    </BlurView>
  );
}

function TabIcon({ name, color, focused }: { name: any; color: string; focused: boolean }) {
  return (
    <View style={styles.iconWrap}>
      <Ionicons name={name} size={22} color={color} />
      {focused ? <View style={styles.dot} /> : null}
    </View>
  );
}

function TabLabel({ label, color }: { label: string; color: string }) {
  return <Text style={[styles.label, { color }]} numberOfLines={1}>{label}</Text>;
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.brand,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          height: 76,
          paddingTop: 8,
          paddingBottom: 18,
        },
        tabBarBackground: () => <TabBarBackground />,
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.itemWrap} testID="tab-home">
              <TabIcon name={focused ? 'home' : 'home-outline'} color={color} focused={focused} />
              <TabLabel label="Home" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.itemWrap} testID="tab-services">
              <TabIcon name={focused ? 'sparkles' : 'sparkles-outline'} color={color} focused={focused} />
              <TabLabel label="Services" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="academy"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.itemWrap} testID="tab-academy">
              <TabIcon name={focused ? 'school' : 'school-outline'} color={color} focused={focused} />
              <TabLabel label="Academy" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.itemWrap} testID="tab-profile">
              <TabIcon name={focused ? 'person' : 'person-outline'} color={color} focused={focused} />
              <TabLabel label="Profile" color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  itemWrap: { alignItems: 'center', justifyContent: 'center', minWidth: 64 },
  iconWrap: { alignItems: 'center', justifyContent: 'center', height: 26 },
  dot: {
    position: 'absolute',
    bottom: -6,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.brand,
  },
  label: {
    marginTop: 6,
    fontSize: 10,
    fontFamily: fonts.bodyMedium,
    letterSpacing: 0.5,
  },
});
