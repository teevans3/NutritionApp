import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AwesomeButton from "react-native-really-awesome-button";
import { addMeal, removeMeal, selectMealIds } from "../nutritionSlice";
import { themePalette } from "../styles/general";

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
  const renderTrackMealContainer = () => (
    <View style={styles.trackMealButtonsContainer}>
      <AwesomeButton
        onPress={trackMeal}
        style={styles.trackMealButton}
        backgroundColor={themePalette.bright}
        raiseLevel={0}
        stretch
        height={40}
      >
        Track Meal
      </AwesomeButton>
      {mealIds.includes(item.id) && (
        <AwesomeButton
          onPress={untrackMeal}
          backgroundColor={themePalette.bright}
          style={styles.trackMealButton}
          raiseLevel={0}
          height={40}
          stretch
        >
          Untrack Meal
        </AwesomeButton>
      )}
    </View>
  );

  const displayMealInfo = () => {
    if (item.id === displayedMealId) {
      return setDisplayedMealId(null);
    }
    return setDisplayedMealId(item.id);
  };
  return (
    // TODO - why is this generating same key names ???
    <View style={styles.mealItemContainer}>
      <AwesomeButton
        style={styles.mealButton}
        stretch
        backgroundColor={
          displayedMealId === item.id ? themePalette.bright : themePalette.dark
        }
        borderColor={themePalette.bright}
        borderWidth={1}
        borderRadius={displayedMealId === item.id ? 4 : 0}
        raiseLevel={0}
        onPress={displayMealInfo}
      >
        {item.name}
      </AwesomeButton>
      {displayedMealId === item.id && (
        <>
          {renderTrackMealContainer()}
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
          <Text style={styles.mealDataTextDescription}>{item.description}</Text>
        </>
      )}
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItemContainer: {
    borderColor: themePalette.bright,
    borderStyle: "solid",
    width: "100%",
  },
  mealButton: {
    marginBottom: 4,
    width: "100%",
  },
  mealDataText: {
    color: "white",
    fontSize: 12,
  },
  mealDataTextDescription: {
    color: "white",
    fontSize: 12,
    marginBottom: 12,
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
  trackMealButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-start",
  },
  trackMealButton: {
    width: "50%",
    padding: 2,
  },
});
