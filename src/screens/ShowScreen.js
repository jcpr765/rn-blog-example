import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Foundation } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const id = navigation.getParam("id");

  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Foundation name="pencil" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
