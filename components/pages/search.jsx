import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  TextInput,
} from "react-native";

import Card from "../constants/card";
import Header from "../constants/header";
import { getSearch } from "../utils/api";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(false);

  const setSearch = async () => {
    const data = await getSearch({ query });
    setSearchData(data);
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header page="search" />
      <ScrollView>
        <TextInput
          style={{
            backgroundColor: "white",
            color: "black",
            padding: 10,
            margin: 10,
          }}
          placeholder="Search"
          onChangeText={(text) => setQuery(text)}
          onSubmitEditing={() => {
            setSearch();
            setLoading(true);
          }}
        />

        {loading === true || searchData.length === 0 ? (
          <>
            {loading ? (
              <Text style={styles.text}>Loading...</Text>
            ) : (
              <Text style={styles.text}>Search for Animes</Text>
            )}
          </>
        ) : (
          <>
            <Text style={styles.text}>Search Results for "{query}"</Text>
            <FlatList
              data={searchData.animes}
              horizontal
              renderItem={({ item }) => <Card data={item} />}
              keyExtractor={(item) => item.id.toString()}
              style={styles.scrollContainer}
            />

            <Text style={styles.text}>Most Popular Animes</Text>
            <FlatList
              data={searchData.mostPopularAnimes}
              horizontal
              renderItem={({ item }) => <Card data={item} />}
              keyExtractor={(item) => item.id.toString()}
              style={styles.scrollContainer}
            />
          </>
        )}
      </ScrollView>

      <StatusBar style="light" />
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
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 10,
  },
});

export default Search;
