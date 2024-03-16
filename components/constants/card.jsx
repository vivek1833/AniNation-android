import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

const Card = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: props.data.poster }} />
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
};

export default Card;

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
