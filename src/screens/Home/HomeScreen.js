import React, { useLayoutEffect } from "react";
import { FlatList,ScrollView, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";


export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <ScrollView
            contentContainerStyle={{ minHeight: "100%", overflow: "visible" }}
            style={{
              minHeight: "100%",
            }}>
    <View>
      <Text style={{fontSize: 28,
    color: '#000', // Set text color
    textAlign: 'center',
    marginBottom: 0,marginTop: 8,}}>Podcast Categories</Text>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.categoryId}`} />
    </View>
    </ScrollView>

  );
}


