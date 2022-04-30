import React from "react";
import { StyleSheet, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { themePalette } from "../styles/general";

const MealOptions = ({ navigation }) => {
  return (
    <View style={styles.mealOptionsContainer}>
      <AwesomeButton
        stretch
        backgroundColor={themePalette.dark}
        borderWidth={1}
        raiseLevel={2}
        style={styles.mealOptionsButton}
        key={"search"}
        onPress={() => {
          // TODO - search
          console.log("TODO - search");
        }}
      >
        Search
      </AwesomeButton>
      <AwesomeButton
        stretch
        backgroundColor={themePalette.dark}
        borderWidth={1}
        raiseLevel={2}
        style={styles.mealOptionsButton}
        key={"create-new-meal"}
        onPress={() => {
          navigation.navigate("Create");
        }}
      >
        Create Meal
      </AwesomeButton>
    </View>
  );
};

export default MealOptions;

const styles = StyleSheet.create({
  mealOptionsContainer: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "space-around",
  },
  mealOptionsButton: {
    width: "50%",
    padding: 2,
  },
});
