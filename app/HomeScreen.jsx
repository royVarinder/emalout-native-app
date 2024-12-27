// HomeScreen.tsx
import CustomHeader from "@/components/CustomHeader";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Home Screen!</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")} // Navigate to the Details screen
        />
      </View>
      <CustomHeader />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default HomeScreen;
