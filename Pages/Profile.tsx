import React, { ReactElement } from 'react';
import { StyleSheet, Text, View, FlatList } from "react-native";
import FooterNav from '../components/FooterNav';

const Profile = ({ navigation }): ReactElement => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.pageHeader}>
                    Profile Page
                </Text>
            </View>
            <FooterNav navigation={navigation} />
        </View>
    )
};

export default Profile;


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
    contentContainer: {
        height: '90%',
    }
  });