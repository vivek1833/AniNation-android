import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getEpisode } from "../utils/api";

const Watch = (props) => {
  const ID = props.ID;
  const [episodeData, setEpisodeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const setEpisode = async () => {
    const res = await getEpisode({ ID });
    setEpisodeData(res);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setEpisode();
  }, [ID]);

  return (
    <SafeAreaView>
      {loading ? (
        <Text style={styles.text}>Loading Episodes...Please Wait</Text>
      ) : (
        <>
          <View>
            <Text style={styles.text}>
              Total Episodes: {episodeData.totalEpisodes}
            </Text>
            {episodeData && episodeData.length === 0 ? (
              <Text style={styles.text}>Loading...</Text>
            ) : (
              <ScrollView horizontal={true}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    gap: 10,
                  }}>
                  {episodeData.episodes.map((episode) => (
                    <Button
                      key={episode.number}
                      title={episode.number.toString()}
                      color={"orange"}
                      navigation={props.navigation}
                      onPress={() =>
                        navigation.navigate("Player", { episode: episode })
                      }
                    />
                  ))}
                </View>
              </ScrollView>
            )}
          </View>
        </>
      )}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Watch;
