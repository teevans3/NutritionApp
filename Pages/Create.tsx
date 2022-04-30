import React, { ReactElement, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import FooterNav from "../components/FooterNav";
import AwesomeButton from "react-native-really-awesome-button";
import { createMeal } from "../mealsSlice";
import { container } from "../styles/general";
import { themePalette } from "../styles/general";
import uuid from "react-native-uuid";

const Create = ({ navigation }): ReactElement => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [calories, setCalories] = useState<number>(0);
  const [protein, setProtein] = useState<number>(0);
  const [netCarbs, setNetCarbs] = useState<number>(0);

  const dispatch = useDispatch();

  // TODO - save this to actual database
  const createNewMeal = () => {
    console.log(uuid.v4());
    const newMealItem = {
      id: uuid.v4(),
      name: name,
      description: description,
      calories: calories,
      protein: protein,
      netCarbs: netCarbs,
    };

    dispatch(createMeal({ newMealItem: newMealItem }));
    navigation.navigate("Meals");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor="gray"
          onChangeText={setName}
        />
        <TextInput
          style={styles.textInputDescription}
          numberOfLines={6}
          multiline={true}
          placeholder="Description"
          placeholderTextColor="gray"
          onChangeText={setDescription}
        />
        <View style={styles.nutritionInputContainer}>
          <TextInput
            style={styles.nutritionInput}
            placeholder="Calories"
            placeholderTextColor="gray"
            keyboardType="numeric"
            onChangeText={(newVal: string) => setCalories(parseInt(newVal, 10))}
          />
          <TextInput
            style={styles.nutritionInput}
            placeholder="Protein (g)"
            placeholderTextColor="gray"
            keyboardType="numeric"
            onChangeText={(newVal: string) => setProtein(parseInt(newVal, 10))}
          />
          <TextInput
            style={styles.nutritionInput}
            placeholder="Net Carbs (g)"
            placeholderTextColor="gray"
            keyboardType="numeric"
            onChangeText={(newVal: string) => setNetCarbs(parseInt(newVal, 10))}
          />
        </View>

        <AwesomeButton
          stretch
          backgroundColor={themePalette.dark}
          borderColor={themePalette.bright}
          borderWidth={1}
          raiseLevel={0}
          onPress={createNewMeal}
        >
          Create
        </AwesomeButton>
      </View>
      <FooterNav navigation={navigation} />
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: container,
  pageHeader: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
  },
  contentContainer: {
    justifyContent: "center",
    height: "90%",
  },
  textInput: {
    color: "white",
    height: 40,
    borderColor: themePalette.bright,
    borderWidth: 1,
    marginBottom: 6,
    padding: 10,
  },
  nutritionInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nutritionInput: {
    width: "32%",
    color: "white",
    height: 40,
    borderColor: themePalette.bright,
    borderWidth: 1,
    marginBottom: 4,
    padding: 10,
  },
  textInputDescription: {
    color: "white",
    height: 80,
    borderColor: themePalette.bright,
    borderWidth: 1,
    marginBottom: 6,
    padding: 10,
  },
});
