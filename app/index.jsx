import React, { useEffect, useState } from "react";
import * as Updates from "expo-updates";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function checkForUpdates() {
      try {
        const { isAvailable } = await Updates.checkForUpdateAsync();
        if (isAvailable) {
          setLoading(true); // Set loading state to true
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync(); // Will reload the app with the new update
        }
      } catch (error) {
        console.error("Error checking for updates:", error);
      } finally {
        setLoading(false); // Reset loading state after process
      }
    }

    checkForUpdates(); // Call this function on app start
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#e43f5a" />
          <Text style={styles.loadingText}>Updating...</Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Welcome to TaskMate!</Text>
          <Text style={styles.description}>
            TaskMate is your ultimate companion for managing tasks effortlessly.
            Create, organize, and track your daily tasks in a simple and
            intuitive way. Let's get started!
          </Text>

          <View style={styles.btnContainer}>
            <View style={styles.buttonWrapper}>
              <Button
                title="Get Started"
                onPress={() => alert("Navigating to Task Mate")}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                title="View Profile"
                onPress={() => alert("Navigating to Profile")}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
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
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: "#333",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Home;
