import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          style={styles.headerLogo}
          source={require("../../assets/icon.png")}
        />
        <Text style={styles.headerText}>AniNation</Text>
        <Text onPress={() => alert("Search")}>🔍</Text>
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    top: 35
  },
  headerLogo: {
    width: 30,
    height: 30,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
