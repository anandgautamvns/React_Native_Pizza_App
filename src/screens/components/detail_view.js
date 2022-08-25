import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, Image, FlatList } from "react-native";
import client from "./../../api/client";

// import styles from "./detail_styles";

const DetailView = ({ navigation, route }) => {
  const [detail, setDetail] = useState("");
  const { objUrl } = route.params;
  const { hey } = route.params;

  const getDetail = async (url) => {
    try {
      const response = await client.get(url);
      if (!response.ok) {
        setDetail(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail(objUrl);
  }, []);

  console.log("details", detail);
  return (
    <View style={styles.center}>
      <FlatList
        horizontal={true}
        data={detail.pizzeria_images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.photo}
              source={{
                uri: item.image,
              }}
            />
          );
        }}
      />
      <Image
        style={styles.photo}
        source={{
          uri: detail.logo_image,
        }}
      />
      <Text style={styles.title}>Pizzeria: {detail.pizzeria_name}</Text>
      <Text style={styles.details}>Address: {detail.street}</Text>
      <Text style={styles.details}>
        City: {detail.city}, {detail.state},{detail.zip_code}
      </Text>
      <Text style={styles.details}>Web: {detail.website}</Text>
      <Text style={styles.details}>Ph: {detail.phone_number}</Text>
      <Text style={styles.details}>Description: {detail.description}</Text>
      <Text style={styles.details}>Email: {detail.email}</Text>

      <Button
        title="Click for Tabs"
        onPress={() => navigation.navigate("Tabs")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Cochin",
    margin: 10,
    marginBottom: 5,
    color: "red",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  pizzaImage: { width: 400, height: 400, borderRadius: 20 },
  details: {
    margin: 10,
    marginBottom: 5,
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default DetailView;
