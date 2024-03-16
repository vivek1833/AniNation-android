import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Card from "../constants/card";
import { homePage } from "../utils/api";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [latest, setLatest] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [genre, setGenre] = useState([]);

  const setHomeData = async () => {
    const homeData = await homePage();
    setTrending(homeData.trendingAnimes);
    setLatest(homeData.latestEpisodeAnimes);
    setUpcoming(homeData.topUpcomingAnimes);
    setGenre(homeData.genres);
  };

  useEffect(() => {
    setHomeData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {trending.length === 0 ? (
            <Text style={styles.text}>Loading...</Text>
          ) : (
            <>
              <Text style={styles.text}>Top Airing Animes</Text>
              <FlatList
                horizontal
                data={trending}
                renderItem={({ item }) => <Card data={item} />}
                keyExtractor={(item) => item.id.toString()}
                style={styles.scrollContainer}
              />

              <Text style={styles.text}>Latest Episodes</Text>
              <FlatList
                horizontal
                data={latest}
                renderItem={({ item }) => <Card data={item} />}
                keyExtractor={(item) => item.id.toString()}
                style={styles.scrollContainer}
              />

              <Text style={styles.text}>Top Upcoming Animes</Text>
              <FlatList
                horizontal
                data={upcoming}
                renderItem={({ item }) => <Card data={item} />}
                keyExtractor={(item) => item.id.toString()}
                style={styles.scrollContainer}
              />

              <View
                style={{
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                  marginTop: 10,
                }}
              />
              <Text style={styles.text}>Genres</Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginLeft: 5,
                }}>
                {genre.map((name, index) => (
                  <Text key={index} style={styles.genretext}>
                    {name}
                  </Text>
                ))}
              </View>
            </>
          )}
          <View
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              marginTop: 10,
            }}
          />
        </View>
      </ScrollView>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 10,
    position: "relative",
    top: 35,
    marginBottom: 130,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 10,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  genretext: {
    color: "black",
    fontSize: 12,
    margin: 3,
    backgroundColor: "#f7d794",
    padding: 7,
    borderRadius: 5,
  },
});
