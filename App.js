import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./components/constants/header";
import Home from "./components/pages/home";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <Home />
        <StatusBar style="light" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  }
});