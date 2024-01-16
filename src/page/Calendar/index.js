import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import CalendarItem from './components/CalendarItem';
import DayInfo from './components/DateInfo'


function Calendar() {
    return (
        <ScrollView>
            <LinearGradient start={{ x: 0.6, y: 0.02 }}
                end={{ x: 0.1, y: 0.9 }}
                colors={['#0057b8', '#FFFFFF', '#FFD600']}
                style={styles.linearGradient}
            >
            <CalendarItem/>
            <DayInfo />

            </LinearGradient>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        height: '100%',
        padding: 5,
    },
    calendar: {
        backgroundColor: 'red',
        height: 100,

    },
});

export default Calendar;