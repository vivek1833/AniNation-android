// make a loading component that can be reused in multiple places

import React from "react";
import { Text, StyleSheet } from "react-native";

const Loading = () => {
  return <Text style={styles.text}>Loading...</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    position: "relative",
    top: "50%",
  },
});

export default Loading;
