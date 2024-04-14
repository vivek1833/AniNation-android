import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Header from "../constants/header";

import { getLink } from "../utils/api";
import { Button } from "react-native-web";

const Player = (props) => {
  const data = props.route.params.episode;
  const [episode, setEpisode] = useState([]);
  const [loading, setLoading] = useState(true);

  const setLink = async () => {
    const res = await getLink({ ID: data });
    setEpisode(res);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setLink();
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <Header page="player" />
      {loading ? (
        <Text style={styles.text}>Loading Episodes...Please Wait</Text>
      ) : (
        <>
          {episode && episode.error.length !== 0 ? (
            <Text
              style={{
                color: "red",
                fontSize: 20,
              }}>
              Server Error...Please try again later
              <Button
                title="Go Home"
                color="orange"
                onPress={() => props.navigation.navigate("Home")}
              />
            </Text>
          ) : (
            <View>
              <Text style={styles.text}>{episode.link}</Text>
            </View>
          )}
        </>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Player;
