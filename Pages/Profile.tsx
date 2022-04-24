import React, { ReactElement } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import FooterNav from "../components/FooterNav";
import { container } from "../styles/general";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMode,
  selectDailyGoals,
  updateMode,
  updateDailyGoals,
} from "../profileSlice";
import { RadioButton } from "react-native-paper";
import { nutritionModes } from "../enums/profileEnums";

const Profile = ({ navigation }): ReactElement => {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);
  const dailyGoals = useSelector(selectDailyGoals);

  const modes = [
    nutritionModes.bulking,
    nutritionModes.cutting,
    nutritionModes.both,
  ];

  // TODO - find a better way to do this. store the title
  const getNutritionTitle = (nutritionType: string): string => {
    switch (nutritionType) {
      case "calories":
        return "Calories";
      case "protein":
        return "Protein (g)";
      default:
        return "Net Carbs (g)";
    }
  };

  const renderNutritionModes = () =>
    modes.map((nutritionMode) => (
      <View style={styles.mode}>
        <Text style={styles.modeLabel}>{nutritionMode}</Text>
        {/* TODO - change these to buttons for better styling? */}
        <RadioButton
          value={nutritionMode}
          status={mode === nutritionMode ? "checked" : "unchecked"}
          onPress={() =>
            dispatch(
              updateMode({
                mode: nutritionMode,
              })
            )
          }
        />
      </View>
    ));

  const renderDailyGoals = () =>
    Object.keys(dailyGoals).map((nutritionType) => (
      <View style={styles.dailyGoalTitle}>
        <Text style={styles.bodyText}>{getNutritionTitle(nutritionType)}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={dailyGoals[nutritionType].toString()}
          placeholderTextColor="white"
          keyboardType="numeric"
          onChangeText={(num) =>
            dispatch(
              updateDailyGoals({
                nutritionType: nutritionType,
                goalAmount: parseInt(num, 10),
              })
            )
          }
          maxLength={4}
        />
      </View>
    ));

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.containerTop}>
          <Text style={styles.pageTitle}>Profile</Text>
        </View>
        <View style={styles.containerMiddle}>
          <View style={styles.bodySection}>
            <Text style={styles.sectionTitle}>Current Mode: {mode}</Text>
            <View style={styles.divider}></View>
            <View style={styles.modesContainer}>{renderNutritionModes()}</View>
          </View>
          <View style={styles.bodySection}>
            <Text style={styles.sectionTitle}>Daily Goals</Text>
            <View style={styles.divider}></View>
            {renderDailyGoals()}
          </View>
        </View>
      </View>
      <FooterNav navigation={navigation} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: container,
  divider: {
    backgroundColor: "white",
    height: 1,
  },
  dailyGoalTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modesContainer: {
    display: "flex",
    flexDirection: "row",
  },
  mode: {
    width: "33%",
  },
  pageHeader: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
  },
  contentContainer: {
    height: "90%",
  },
  pageTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 36,
  },
  containerTop: {
    height: "10%",
  },
  containerMiddle: {
    height: "70%",
  },
  containerBottom: {
    height: "20%",
  },
  bodyText: {
    color: "white",
    fontSize: 32,
  },
  bodySection: { height: "50%" },
  sectionTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
  },
  modeLabel: {
    color: "white",
    textAlign: "center",
  },
  textInput: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
});
