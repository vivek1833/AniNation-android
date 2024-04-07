import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View>
          {loading ? (
            <Text style={styles.text}>Loading...</Text>
          ) : (
            <>
              <Image
                style={styles.cardImage}
                source={{ uri: animeData.anime.info.poster }}
              />
              <Text style={styles.text}>{animeData.anime.info.name}</Text>
              <Text style={styles.text}>
                {animeData.anime.info.stats.episodes.sub} Sub
              </Text>
              <Text style={styles.text}>
                {animeData.anime.info.stats.episodes.dub} Dub
              </Text>
              <Text style={styles.text}>{animeData.anime.moreInfo.aired}</Text>
              <Text style={styles.text}>{animeData.anime.moreInfo.status}</Text>
              <Text style={styles.text}>
                {animeData.anime.info.description}
              </Text>

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
            </>
          )}
          <StatusBar style="light" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Anime;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    padding: 10,
    alignItems: "center",
  },
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
