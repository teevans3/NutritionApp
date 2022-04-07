import React, { ReactElement, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { mealItems } from "../sampleData";
import MealItem from "../components/MealItem";
import FooterNav from "../components/FooterNav";

const Meals = ({ navigation }): ReactElement => {
  // TODO - find a better way to do this
  const [displayedMealId, setDisplayedMealId] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageHeader}>Meals</Text>
        <View style={styles.divider}></View>
        <AwesomeButton
          style={styles.mealItemsList}
          stretch
          backgroundColor="#2c824a"
          backgroundDarker="#1c5430"
          borderRadius={116}
          raiseLevel={6}
          textSize={20}
        >
          Add New Meal
        </AwesomeButton>
        <AwesomeButton
          style={styles.mealItemsList}
          stretch
          backgroundColor="#2c824a"
          backgroundDarker="#1c5430"
          borderRadius={116}
          raiseLevel={6}
          textSize={20}
        >
          Search
        </AwesomeButton>
        <FlatList
          data={mealItems}
          renderItem={({ item }) => (
            <MealItem
              item={item}
              navigation={navigation}
              displayedMealId={displayedMealId}
              setDisplayedMealId={setDisplayedMealId}
            />
          )}
        />
      </View>
      <FooterNav navigation={navigation} />
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "#2e2e2e",
    padding: 24,
    paddingTop: 46,
  },
  pageHeader: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
  },
  divider: {
    height: 2,
    backgroundColor: "white",
    marginTop: 12,
    marginBottom: 12,
  },
  headerBtn: {
    fontSize: 34,
  },
  mealItemsList: {
    marginBottom: 12,
  },
  contentContainer: {
    height: "90%",
  },
});
