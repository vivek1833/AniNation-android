import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/pages/home";
import Anime from "./components/pages/anime";
import Search from "./components/pages/search";
import Player from "./components/pages/player";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, headerStyle: { backgroundColor: "black" }, headerTintColor: "white" }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Anime" component={Anime} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Player" component={Player} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black"
  },
});
