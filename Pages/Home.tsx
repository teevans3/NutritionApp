import React, { ReactElement, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from "react-native";
import FooterNav from '../components/FooterNav';

type HomePropsType = {
    navigation: any;
}

const Home = ({ navigation }: HomePropsType): ReactElement => {
    const [totalCalories, setTotalCalories] = useState<number>(0);
    const [totalProtein, setTotalProtein] = useState<number>(0);
    const [totalNetCarbs, setTotalNetCarbs] = useState<number>(0);
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.pageHeader}>
                    Home Page
                </Text>
                <Text style={styles.pageHeader}>
                    Today's Date: 
                </Text>
                <Text style={styles.pageBody}>
                    Protein: {totalProtein}g
                </Text>
                <Text style={styles.pageBody}>
                    Calories: {totalCalories}g
                </Text>
                <Text style={styles.pageBody}>
                    Net Carbs: {totalNetCarbs}g
                </Text>
            </View>
            <FooterNav navigation={navigation} />
        </View>
    )
};

export default Home;


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      height: '100%',
      backgroundColor: "#2e2e2e",
      padding: 24,
      paddingTop: 46,
      justifyContent: 'space-between'
    },
    pageHeader: {
      color: 'white',
      fontSize: 36,
      textAlign: 'center'
    },
    pageBody: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center'
      },
    contentContainer: {
        height: '90%',
    }
  });