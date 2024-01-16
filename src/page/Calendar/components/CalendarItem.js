import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';


function CalendarItem({setDay}) {
    const [selected, setSelected] = useState('');


    const onSelect = day => {
        setSelected(day);
    }


    return (
        <SafeAreaView style={styles.calendarBlock}>
            <Text style={styles.calendarDay}> {selected} </Text>
            <View style={styles.calendar}>
                <Calendar
                    onDayPress={day => {
                        onSelect(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    calendarBlock: {
        padding: 5,
        paddingTop: 15,
        display: 'flex',
        marginBottom: 70,

    },
    calendarDay: {
        fontSize: 24,
        color: 'black',
        padding: 10,
        fontWeight: '900',
        textAlign: 'center'
    },
    calendar: {
        height: 250,
        backgroundColor: 'white',
    }

});

export default CalendarItem;