import React, { ReactElement, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTotalCalories,
  selectTotalProtein,
  selectTotalNetCarbs,
} from "../nutritionSlice";
import { StyleSheet, Text, View } from "react-native";
import FooterNav from "../components/FooterNav";
import AwesomeButton from "react-native-really-awesome-button";

type HomePropsType = {
  navigation: any;
};

const Home = ({ navigation }: HomePropsType): ReactElement => {
  const totalCalories = useSelector(selectTotalCalories);
  const totalProtein = useSelector(selectTotalProtein);
  const totalNetCarbs = useSelector(selectTotalNetCarbs);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageHeader}>Home Page</Text>
        <Text style={styles.pageHeader}>Today's Date:</Text>
        <Text style={styles.pageBody}>Calories: {totalCalories}g</Text>
        <Text style={styles.pageBody}>Protein: {totalProtein}g</Text>
        <Text style={styles.pageBody}>Net Carbs: {totalNetCarbs}g</Text>
        <AwesomeButton onPress={() => navigation.navigate("ExactAmount")}>
          Add Exact Amount of Nutrition
        </AwesomeButton>
        {/* <AwesomeButton stretch onPress={() => dispatch(addMeal())}>
          Add Meal
        </AwesomeButton>
        <AwesomeButton stretch onPress={() => dispatch(removeMeal())}>
          Remove Meal
        </AwesomeButton> */}
      </View>
      <FooterNav navigation={navigation} />
    </View>
  );
};

export default Home;

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
  pageBody: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  contentContainer: {
    height: "90%",
  },
});
