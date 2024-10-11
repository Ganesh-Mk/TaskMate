import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.description}>
        Manage your profile settings here. Update your information, view your
        tasks history, and set notifications to stay on track.
      </Text>
      <View style={styles.btnContainer}>
        <Button
          title="Get Started"
          onPress={() => alert("Navigating to Task Mate")}
        />
        <View style={{ marginTop: 10 }}>
          {" "}
          {/* Added margin for spacing */}
          <Button
            title="View Profile"
            onPress={() => alert("Navigating to Profile")}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff3e0",
    borderRadius: 20,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#bf360c",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#7b1fa2",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});
