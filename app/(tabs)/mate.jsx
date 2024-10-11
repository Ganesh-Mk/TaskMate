import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Mate() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Mate</Text>
      <Text style={styles.description}>
        Here, you can create new tasks, assign them to team members, and track
        progress. Collaborate efficiently and ensure that no task is left
        behind!
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
    backgroundColor: "#e0f7fa",
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
    color: "#006064",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#004d40",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});
