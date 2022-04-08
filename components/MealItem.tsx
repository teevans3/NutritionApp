import React, { ReactElement, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AwesomeButton from "react-native-really-awesome-button";
import { addMeal, removeMeal, selectMealIds } from "../nutritionSlice";

const MealItem = ({
  item,
  navigation,
  displayedMealId,
  setDisplayedMealId,
}): ReactElement => {
  const dispatch = useDispatch();
  const mealIds = useSelector(selectMealIds);

  const trackMeal = () => {
    dispatch(
      addMeal({
        mealId: item.id,
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
        mealId: item.id,
        calories: item.calories,
        protein: item.protein,
        netCarbs: item.netCarbs,
      })
    );
    navigation.navigate("Home");
  };

  // only render Untrack Meal btn if meal was added to store
  const renderUntrackMealBtn = () =>
    mealIds.includes(item.id) ? (
      <AwesomeButton onPress={untrackMeal}>Untrack Meal</AwesomeButton>
    ) : null;

  const displayMealInfo = () => {
    if (item.id === displayedMealId) {
      return setDisplayedMealId(null);
    }
    return setDisplayedMealId(item.id);
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
        onPress={displayMealInfo}
      >
        {item.name}
      </AwesomeButton>
      {displayedMealId === item.id && (
        <>
          <AwesomeButton onPress={trackMeal}>Track Meal</AwesomeButton>
          {renderUntrackMealBtn()}
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
      )}
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
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
