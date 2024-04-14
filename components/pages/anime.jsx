import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "../constants/card";
import Header from "../constants/header";
import Watch from "../pages/watch";
import Loading from "../constants/loading";
import { getAnime } from "../utils/api";

const Anime = (props) => {
  const navigation = useNavigation();
  const ID = props.route.params.id;
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const setAnime = async () => {
    const anime = await getAnime({ id: ID });
    setAnimeData(anime);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setAnime();
  }, [ID]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        height: "100%",
      }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header page="anime" />
          <ScrollView>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Image
                style={styles.cardImage}
                source={{ uri: animeData.anime.info.poster }}
              />
              <Text style={styles.text}>{animeData.anime.info.name}</Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}>
                <Text
                  style={{
                    padding: 10,
                    backgroundColor: "grey",
                    borderRadius: 10,
                    height: 40,
                  }}>
                  {animeData.anime.info.stats.episodes.sub === null ? (
                    <Text style={styles.text}>0</Text>
                  ) : (
                    <Text style={styles.text}>
                      {animeData.anime.info.stats.episodes.sub}
                    </Text>
                  )}{" "}
                  <Icon name="cc" size={20} color="white" />
                </Text>
                <Text
                  style={{
                    padding: 10,
                    backgroundColor: "lightblue",
                    borderRadius: 10,
                    height: 40,
                  }}>
                  {animeData.anime.info.stats.episodes.dub === null ? (
                    <Text style={styles.text}>0</Text>
                  ) : (
                    <Text style={styles.text}>
                      {animeData.anime.info.stats.episodes.dub}
                    </Text>
                  )}{" "}
                  <Icon name="microphone" size={20} color="white" />
                </Text>
                <Text
                  style={{
                    padding: 10,
                    backgroundColor: "lightgreen",
                    borderRadius: 10,
                    height: 40,
                  }}>
                  {animeData.anime.moreInfo.status}
                </Text>
              </View>
              <Text style={styles.text}>
                Aired: {animeData.anime.moreInfo.aired}
              </Text>

              {animeData.anime.info.description.length > 100 ? (
                <Text style={styles.text}>
                  {animeData.anime.info.description.substring(0, 100)}...
                </Text>
              ) : (
                <Text style={styles.text}>
                  {animeData.anime.info.description}
                </Text>
              )}
            </View>

            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1,
                marginTop: 10,
                marginBottom: 10,
              }}
            />

            <Watch ID={ID} />

            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1,
                marginTop: 10,
              }}
            />

            <Text style={styles.text}>Related Animes</Text>

            <FlatList
              horizontal
              data={animeData.relatedAnimes}
              renderItem={({ item }) => (
                <Card
                  data={{
                    id: item.id,
                    name: item.name,
                    poster: item.poster,
                  }}
                  navigation={props.navigation}
                  key={item.id}
                  onPress={() => {
                    navigation.navigate("Anime", {
                      id: item.id,
                      name: item.name,
                      poster: item.poster,
                    });
                  }}
                />
              )}
              style={styles.scrollContainer}
            />
            <StatusBar style="light" />
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default Anime;

const styles = StyleSheet.create({
  cardImage: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginTop: 60,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
});
