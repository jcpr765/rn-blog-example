import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(BlogContext);
  const id = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === id) || {
    title: "",
    content: "",
  };
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  return (
    <View>
      <Text style={styles.label}>Enter New Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter New Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save"
        onPress={() => {
          editBlogPost(id, title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    marginLeft: 5,
    fontSize: 20,
    marginBottom: 5,
  },
});

export default EditScreen;
