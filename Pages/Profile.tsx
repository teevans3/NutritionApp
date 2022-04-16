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

  const renderNutritionModes = () =>
    modes.map((nutritionMode) => (
      <View>
        <Text style={styles.modeLabel}>{nutritionMode}</Text>
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
      <>
        <Text style={styles.bodyText}>{nutritionType}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={`${dailyGoals[nutritionType]} ${
            nutritionType === "calories" ? "" : "g"
          }`}
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
      </>
    ));

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.containerTop}>
          <Text style={styles.pageTitle}>Profile: User</Text>
        </View>
        <View style={styles.containerMiddle}>
          <View style={styles.bodySection}>
            <Text style={styles.sectionTitle}>Current Mode: {mode}</Text>
            {renderNutritionModes()}
          </View>
          <View style={styles.bodySection}>
            <Text style={styles.sectionTitle}>Current Daily Goals</Text>
            {renderDailyGoals()}
          </View>
        </View>
        <View style={styles.containerBottom}>
          <Text>Save?</Text>
        </View>
      </View>
      <FooterNav navigation={navigation} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: container,
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
  },
  bodySection: {},
  sectionTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
  },
  modeLabel: {
    color: "white",
  },
  textInput: {
    color: "white",
  },
});
