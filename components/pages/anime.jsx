import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

const Anime = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: props.data.poster }} />
        <Text style={styles.text}>{props.data.name}</Text>
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
};

export default Anime;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    width: 130,
  },
  cardImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
});
