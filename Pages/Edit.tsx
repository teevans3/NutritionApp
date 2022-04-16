import React, { ReactElement, useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import AwesomeButton from "react-native-really-awesome-button";
import FooterNav from "../components/FooterNav";
import { addByAmount, removeByAmount } from "../nutritionSlice";
import { container } from "../styles/general";

const Edit = ({ navigation, route }): ReactElement => {
  const [amount, setAmount] = useState<number>(0);

  const nutritionType = route.params.nutritionType;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.containerTop}>
          <Text style={styles.exactNutritionText}>
            Edit {nutritionType}
            {nutritionType === "Calories" ? "" : " (g)"}
          </Text>
          <Text style={styles.exactNutritionText}></Text>
        </View>
        <View style={styles.containerMiddle}>
          <TextInput
            style={styles.textInput}
            placeholder={`0${nutritionType === "Calories" ? "" : "g"}`}
            placeholderTextColor="white"
            keyboardType="numeric"
            onChangeText={(num) => setAmount(parseInt(num, 10))}
            maxLength={4}
          />
        </View>
        <View style={styles.containerBottom}>
          <AwesomeButton
            width={90}
            height={90}
            raiseLevel={0}
            borderRadius={50}
            onPress={() => {
              console.log(typeof amount);
              dispatch(addByAmount({ amount, nutritionType }));
              navigation.navigate("Home");
            }}
          >
            Add
          </AwesomeButton>
          <AwesomeButton
            width={90}
            height={90}
            raiseLevel={0}
            borderRadius={50}
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

export default Edit;

const styles = StyleSheet.create({
  container: container,
  contentContainer: {
    height: "90%",
  },
  containerTop: {
    height: "15%",
  },
  containerMiddle: {
    height: "60%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBottom: {
    height: "25%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInput: {
    fontSize: 102,
    color: "white",
  },
  exactNutritionText: {
    textAlign: "center",
    color: "white",
    fontSize: 36,
  },
});
