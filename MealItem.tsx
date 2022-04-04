import React, { useState, ReactElement }  from 'react';
import { StyleSheet, Text, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";


const MealItem = ({item}): ReactElement => {
    const [displayMealData, setDisplayMealData] = useState<boolean>(false);

    return (
        <View style={styles.mealItemContainer}>
            <AwesomeButton stretch backgroundColor="#3d3d3d" borderColor="#fff" borderWidth={1} raiseLevel={0} key={item.id} onPress={() => setDisplayMealData(!displayMealData)}>{item.name}</AwesomeButton>
            {displayMealData ? (
                <>
                    <Text style={styles.mealDataText}>{item.description}</Text>
                    <View style={styles.nutritionContainer}>
                        <Text style={[styles.mealDataText, styles.nutritionText]}>Protein: {item.protein}g</Text>
                        <Text style={[styles.mealDataText, styles.nutritionText]}>Net Cars: {item.netCarbs}g</Text>
                    </View>
                    <AwesomeButton>Track Meal</AwesomeButton>
                </>
            ) : null}
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItemContainer: {
    },
    mealItemBtn: {
      alignSelf: 'flex-start',
    },
    mealDataText: {
        color: 'white',
        fontSize: 18,
    },
    nutritionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    nutritionText: {
        fontSize: 24,
    }
  });