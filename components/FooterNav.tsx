import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { themePalette } from "../styles/general";

const FooterNav = ({ navigation }): ReactElement => {
  return (
    <View style={styles.container}>
      <AwesomeButton
        backgroundColor={themePalette.dark}
        backgroundActive={themePalette.bright}
        stretch
        borderRadius={0}
        style={styles.navButton}
        onPress={() => navigation.navigate("Home")}
        raiseLevel={0}
      >
        Home
      </AwesomeButton>
      <AwesomeButton
        backgroundColor={themePalette.dark}
        backgroundActive={themePalette.bright}
        stretch
        borderRadius={0}
        style={styles.navButton}
        onPress={() => navigation.navigate("Meals")}
        raiseLevel={0}
      >
        Meals
      </AwesomeButton>
      <AwesomeButton
        backgroundColor={themePalette.dark}
        backgroundActive={themePalette.bright}
        stretch
        borderRadius={0}
        style={styles.navButton}
        onPress={() => navigation.navigate("History")}
        raiseLevel={0}
      >
        History
      </AwesomeButton>
      <AwesomeButton
        backgroundColor={themePalette.dark}
        backgroundActive={themePalette.bright}
        stretch
        borderRadius={0}
        style={styles.navButton}
        onPress={() => navigation.navigate("Profile")}
        raiseLevel={0}
      >
        Profile
      </AwesomeButton>
    </View>
  );
};

export default FooterNav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    display: "flex",
    height: "10%",
    flexDirection: "row",
  },
  navButton: {
    height: "100%",
    width: "25%",
    borderRadius: 0,
  },
});
