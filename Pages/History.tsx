import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import FooterNav from "../components/FooterNav";
import { container } from "../styles/general";

const History = ({ navigation }): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}></View>
      <FooterNav navigation={navigation} />
    </View>
  );
};

export default History;

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
});
