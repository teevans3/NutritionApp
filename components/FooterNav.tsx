import React, { ReactElement } from 'react';
import { StyleSheet, Text, View, FlatList } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";

const FooterNav = ({ navigation }): ReactElement => {
    return (
        <View style={styles.container}>
            <AwesomeButton style={styles.navButton} onPress={() => navigation.navigate('Home')}>Home</AwesomeButton>
            <AwesomeButton style={styles.navButton} onPress={() => navigation.navigate('Meals')}>Meals</AwesomeButton>
            <AwesomeButton style={styles.navButton} onPress={() => navigation.navigate('History')}>History</AwesomeButton>

        </View>
    )
};

export default FooterNav;


const styles = StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      height: '10%',
      backgroundColor: "red",
      flexDirection: 'row',
    },
    navButton: {
        height: '100%',
    }
  });