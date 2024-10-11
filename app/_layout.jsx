import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Layout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarStyle: styles.tabBarStyle, // Apply custom tab bar styles
          tabBarActiveTintColor: "#007bff", // Active tab color
          tabBarInactiveTintColor: "#000", // Inactive tab color
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Icon name="home-outline" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/mate"
          options={{
            title: "Task Mate",
            tabBarIcon: ({ color }) => (
              <Icon name="checkmark-done-outline" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <Icon name="person-outline" size={20} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  tabBarStyle: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});
