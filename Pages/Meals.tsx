import React, { ReactElement, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import MealItem from "../components/MealItem";
import FooterNav from "../components/FooterNav";
import { useSelector } from "react-redux";
import { selectMealItems } from "../mealsSlice";
import { container } from "../styles/general";

const Meals = ({ navigation }): ReactElement => {
  // TODO - find a better way to do this
  const [displayedMealId, setDisplayedMealId] = useState<number | null>(null);

  const mealItems = useSelector(selectMealItems);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <AwesomeButton
          style={styles.mealItemsList}
          stretch
          backgroundColor="#2c824a"
          backgroundDarker="#1c5430"
          borderRadius={116}
          raiseLevel={6}
          textSize={20}
          onPress={() => {
            navigation.navigate("Create");
          }}
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
  container: container,
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
