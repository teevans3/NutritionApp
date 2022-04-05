import React, { ReactElement, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import AwesomeButton from "react-native-really-awesome-button";
import { addMeal, removeMeal } from "../nutritionSlice";

const MealItem = ({ item, navigation }): ReactElement => {
  const [displayMealData, setDisplayMealData] = useState<boolean>(false);

  const dispatch = useDispatch();

  const trackMeal = () => {
    dispatch(
      addMeal({
        calories: item.calories,
        protein: item.protein,
        netCarbs: item.netCarbs,
      })
    );
    navigation.navigate("Home");
  };

  const untrackMeal = () => {
    dispatch(
      removeMeal({
        calories: item.calories,
        protein: item.protein,
        netCarbs: item.netCarbs,
      })
    );
    navigation.navigate("Home");
  };

  return (
    <View style={styles.mealItemContainer}>
      <AwesomeButton
        stretch
        backgroundColor="#3d3d3d"
        borderColor="#fff"
        borderWidth={1}
        raiseLevel={0}
        key={item.id}
        onPress={() => setDisplayMealData(!displayMealData)}
      >
        {item.name}
      </AwesomeButton>
      {displayMealData ? (
        <>
          <AwesomeButton onPress={trackMeal}>Track Meal</AwesomeButton>
          <AwesomeButton onPress={untrackMeal}>Untrack Meal</AwesomeButton>
          <View style={styles.nutritionContainer}>
            <Text style={[styles.mealDataText, styles.nutritionText]}>
              Protein: {item.protein}g
            </Text>
            <Text style={[styles.mealDataText, styles.nutritionText]}>
              Net Carbs: {item.netCarbs}g
            </Text>
            <Text style={[styles.mealDataText, styles.nutritionText]}>
              Calories: {item.calories}
            </Text>
          </View>
          <Text style={styles.mealDataText}>{item.description}</Text>
        </>
      ) : null}
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItemContainer: {},
  mealItemBtn: {
    alignSelf: "flex-start",
  },
  mealDataText: {
    color: "white",
    fontSize: 12,
  },
  nutritionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
  },
  nutritionText: {
    fontSize: 16,
  },
});
