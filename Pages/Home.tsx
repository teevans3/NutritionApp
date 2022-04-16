import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import {
  selectTotalCalories,
  selectTotalProtein,
  selectTotalNetCarbs,
} from "../nutritionSlice";
import moment from "moment";
import { StyleSheet, Text, View } from "react-native";
import FooterNav from "../components/FooterNav";
import AwesomeButton from "react-native-really-awesome-button";
import { container } from "../styles/general";
import { selectMode } from "../profileSlice";
import { nutritionModes } from "../enums/profileEnums";

type HomePropsType = {
  navigation: any;
};

const Home = ({ navigation }: HomePropsType): ReactElement => {
  const currentDate = moment(new Date()).format("dddd MMMM D Y");

  const totalCalories = useSelector(selectTotalCalories);
  const totalProtein = useSelector(selectTotalProtein);
  const totalNetCarbs = useSelector(selectTotalNetCarbs);

  const mode = useSelector(selectMode);

  const nutritionList = [
    { title: "Calories", total: totalCalories },
    { title: "Protein", total: totalProtein },
    { title: "Net Carbs", total: totalNetCarbs },
  ];

  const renderNutritionInfo = () =>
    nutritionList.map(({ title, total }) => {
      // if in Bulking mode, only care about calories and protein
      if (mode === nutritionModes.bulking && title === "Net Carbs") {
        return null;
      }

      // if in Cutting mode, only care about net carbs and protein
      if (mode === nutritionModes.cutting && title === "Calories") {
        return null;
      }

      return (
        <View style={styles.bodySection} key={title}>
          <Text style={styles.bodyTitle}>
            {title}: {total}
            {title === "Calories" ? null : "g"}
          </Text>
          <AwesomeButton
            width={60}
            height={50}
            raiseLevel={0}
            borderRadius={10}
            onPress={() =>
              navigation.navigate("Edit", {
                nutritionType: title,
              })
            }
          >
            Edit
          </AwesomeButton>
          <Text style={styles.bodyText}>Goal Met? y/n</Text>
        </View>
      );
    });
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.containerTop}>
          <Text style={styles.pageHeader}>{currentDate}</Text>
        </View>
        <View style={styles.containerBottom}>{renderNutritionInfo()}</View>
      </View>
      <FooterNav navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: container,
  pageHeader: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
  },
  containerTop: {
    height: "15%",
  },
  containerBottom: {
    height: "75%",
  },
  bodyTitle: {
    color: "white",
    fontSize: 36,
  },
  bodyText: {
    color: "white",
  },
  contentContainer: {
    height: "90%",
  },
  bodySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "25%",
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: 30,
  },
});
