import React, { ReactElement, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import FooterNav from "../components/FooterNav";
import { useSelector } from "react-redux";
import { selectMealItems } from "../mealsSlice";
import { container } from "../styles/general";
import MealOptions from "../components/MealOptions";

const Meals = ({ navigation }): ReactElement => {
  // TODO - find a better way to do this
  const [displayedMealId, setDisplayedMealId] = useState<number | null>(null);

  const mealItems = useSelector(selectMealItems);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          // TODO - find a better way to render the options at end of list?
          data={[...mealItems, { options: true }]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            if (item.options) {
              return <MealOptions navigation={navigation} key="meal-options" />;
            }
            return (
              <MealItem
                key={item.key}
                item={item}
                navigation={navigation}
                displayedMealId={displayedMealId}
                setDisplayedMealId={setDisplayedMealId}
              />
            );
          }}
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
