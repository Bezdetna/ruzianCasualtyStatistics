import React from 'react'
import { StyleSheet, View, Text } from 'react-native';


const Header = () => {

    const now = new Date();
    const month = now.getMonth();
    const date = now.getDate();

    const monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];

    const nameMonth = monthName[month];
    
    return (
        <View style={styles.headre}>
            <Text style={styles.title}>
                General Staff of the Armed Forces of Ukraine informs
            </Text>
            <Text style={styles.titleBig}>
                The total losses of the russian occupier
            </Text>
            <View style={styles.blockData}>
                <Text style={styles.data}>{date} {nameMonth}</Text>
                <Text style={styles.day}>
                    687 th day of war
                </Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        textAlign: 'center',
        color: 'black',
        fontWeight: '600',
    },
    titleBig: {
        fontSize: 24,
        textAlign: 'center',
        color: 'black',
        fontWeight: '900',
    },
    blockData: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        gap: 15,
    },
    day: {
        fontSize: 19,
        textAlign: 'center',
        color: 'darkblue',
        fontWeight: '700',

    },
    data: {
        fontSize: 13,
        textAlign: 'center',
        color: 'black',
        fontWeight: '500',
    }
});
export default Header;