import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";

import client from "../../api/client";
import Card from "./shared/card";

const ListView = ({ navigation }) => {
  const [data, setData] = useState([]);
  const newText = "by ProgramwithUs";

  const getList = async () => {
    try {
      const response = await client.get("/");
      if (!response.ok) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    // <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Detail", {
                    objUrl: item.absolute_url,
                    hey: "Best Pizza",
                  });
                }}
              >
                <Card
                  logo={item.logo_image}
                  title={item.pizzeria_name}
                  details={item.city}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    height:500,
    overflow: 'auto',
    marginBottom: 10
  },
  container: {
    backgroundColor: "#eeeeee",
    padding: 20,
    marginBottom: 20
  }
});

export default ListView;
