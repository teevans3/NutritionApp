import React, { ReactElement, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import AwesomeButton from "react-native-really-awesome-button";
import FooterNav from "../components/FooterNav";
import { addByAmount, removeByAmount } from "../nutritionSlice";

const ExactAmount = ({ navigation }): ReactElement => {
  // TODO - enum this
  const [nutritionType, setNutritionType] = useState<string>("Calories");
  const [amount, setAmount] = useState<number>(0);

  const dispatch = useDispatch();

  // TODO - find a better way to do this
  const cycleThroughNutritionType = () => {
    if (nutritionType === "Calories") {
      return setNutritionType("Protein");
    }
    if (nutritionType === "Protein") {
      return setNutritionType("Net Carbs");
    }
    if (nutritionType === "Net Carbs") {
      return setNutritionType("Calories");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageHeader}>Add Nutrition Exact Amount</Text>
        <View>
          <Text>
            {amount}
            {nutritionType === "Calories" ? "" : "g"}
          </Text>
          <Text>{nutritionType}</Text>
          <AwesomeButton onPress={cycleThroughNutritionType}>
            Change Nutrition Type
          </AwesomeButton>
          <AwesomeButton onPress={() => setAmount(amount + 5)}>+</AwesomeButton>
          <AwesomeButton
            disabled={amount === 0 ? true : false}
            onPress={() => setAmount(amount - 5)}
          >
            -
          </AwesomeButton>
          <AwesomeButton
            onPress={() => {
              dispatch(addByAmount({ amount, nutritionType }));
              navigation.navigate("Home");
            }}
          >
            Add
          </AwesomeButton>
          <AwesomeButton
            onPress={() => {
              dispatch(removeByAmount({ amount, nutritionType }));
              navigation.navigate("Home");
            }}
          >
            Remove
          </AwesomeButton>
        </View>
      </View>
      <FooterNav navigation={navigation} />
    </View>
  );
};

export default ExactAmount;

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
});
