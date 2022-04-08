import React, { ReactElement, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FooterNav from "../components/FooterNav";
import AwesomeButton from "react-native-really-awesome-button";
import { createMeal, selectMealItems } from "../mealsSlice";

const Create = ({ navigation }): ReactElement => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [calories, setCalories] = useState<number>(0);
  const [protein, setProtein] = useState<number>(0);
  const [netCarbs, setNetCarbs] = useState<number>(0);

  const dispatch = useDispatch();
  const mealItems = useSelector(selectMealItems);

  // TODO - save this to actual database
  const createNewMeal = () => {
    // TODO - generate a random id
    const lastMealItem = mealItems[mealItems.length - 1];

    const newMealItem = {
      id: lastMealItem.id + 1,
      name: name,
      description: description,
      calories: calories,
      protein: protein,
      netCarbs: netCarbs,
    };

    dispatch(createMeal({ newMealItem: newMealItem }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageHeader}>Create Page</Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        placeholderTextColor="white"
        onChangeText={setName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Description"
        placeholderTextColor="white"
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Calories"
        placeholderTextColor="white"
        keyboardType="numeric"
        onChangeText={setCalories}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Protein (g)"
        placeholderTextColor="white"
        keyboardType="numeric"
        onChangeText={setProtein}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Net Carbs (g)"
        placeholderTextColor="white"
        keyboardType="numeric"
        onChangeText={setNetCarbs}
      />
      <AwesomeButton
        stretch
        backgroundColor="#3d3d3d"
        borderColor="#fff"
        borderWidth={1}
        raiseLevel={0}
        onPress={createNewMeal}
      >
        Create
      </AwesomeButton>
      <FooterNav navigation={navigation} />
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "#2e2e2e",
    padding: 24,
    paddingTop: 46,
    justifyContent: "space-between",
  },
  pageHeader: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
  },
  contentContainer: {
    height: "90%",
  },
  textInput: {
    color: "white",
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
  },
});
