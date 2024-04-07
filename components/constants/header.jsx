import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          style={styles.headerLogo}
          source={require("../../assets/icon.png")}
        />
        <Text style={styles.headerText}>AniNation</Text>

        {/* If the page is search, show the home button */}
        {props.page === "search" && (
          <Button
            title="Home"
            color="orange"
            onPress={() => navigation.navigate("Home")}
          />
        )}

        {/* If the page is not search, show the search button */}
        {props.page !== "search" && (
          <Button
            title="Search"
            color="orange"
            onPress={() => navigation.navigate("Search")}
          />
        )}

        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    paddingTop: 50,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
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
