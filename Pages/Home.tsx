import React, { ReactElement, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTotalCalories,
  selectTotalProtein,
  selectTotalNetCarbs,
  resetNutritionInfo,
} from "../nutritionSlice";
import moment from "moment";
import { StyleSheet, Text, View } from "react-native";
import FooterNav from "../components/FooterNav";
import AwesomeButton from "react-native-really-awesome-button";
import { container } from "../styles/general";
import { selectMode, selectDailyGoals } from "../profileSlice";
import { nutritionModes } from "../enums/profileEnums";

type HomePropsType = {
  navigation: any;
};

const Home = ({ navigation }: HomePropsType): ReactElement => {
  const [date, setDate] = useState<Date>(new Date());

  const totalCalories = useSelector(selectTotalCalories);
  const totalProtein = useSelector(selectTotalProtein);
  const totalNetCarbs = useSelector(selectTotalNetCarbs);

  const mode = useSelector(selectMode);

  const dailyGoals = useSelector(selectDailyGoals);

  const dispatch = useDispatch();

  const nutritionList = [
    { title: "Calories", type: "calories", total: totalCalories },
    { title: "Protein", type: "protein", total: totalProtein },
    { title: "Net Carbs", type: "netCarbs", total: totalNetCarbs },
  ];

  // reset nutrition info each day
  // TODO - find a better way to do this?
  useEffect(() => {
    const storedDate = moment(date).startOf("day");
    const currentDate = moment().startOf("day");
    if (currentDate > storedDate) {
      setDate(currentDate);
      dispatch(resetNutritionInfo());
      // TODO - save total nutrition info for the day??
    }
  }, []);

  const renderDailyNutritionGoal = (nutritionType: string): number => {
    return dailyGoals[nutritionType];
  };

  const renderNutritionInfo = () =>
    nutritionList.map(({ title, total, type }) => {
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
          <View style={styles.sectionTitle}>
            <Text style={styles.bodyTitle}>{title}</Text>
            <AwesomeButton
              width={60}
              height={30}
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
          </View>
          <View style={styles.divider}></View>
          <View style={styles.sectionInfo}>
            <Text style={styles.bodyText}>
              {total}
              {title === "Calories" ? null : "g"} /{" "}
              {renderDailyNutritionGoal(type)}
              {title === "Calories" ? null : "g"}
            </Text>
          </View>
        </View>
      );
    });
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.containerTop}>
          <Text style={styles.pageHeader}>
            {moment(date).format("dddd MMMM D Y")}
          </Text>
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
  divider: {
    backgroundColor: "white",
    height: 1,
  },
  pageHeader: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
  },
  sectionTitle: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionInfo: {},
  containerTop: {
    height: "15%",
  },
  containerBottom: {
    height: "75%",
  },
  bodyTitle: {
    color: "white",
    fontSize: 28,
  },
  bodyText: {
    textAlign: "center",
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  contentContainer: {
    height: "90%",
  },
  bodySection: {
    justifyContent: "space-between",
    marginTop: 40,
  },
});
