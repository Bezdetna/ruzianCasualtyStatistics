import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';


import LinearGradient from 'react-native-linear-gradient';
import Stats from './components/stats';
import Header from './components/header'
import { addStats } from '../../redux/statsSlice';






const HomePage = () => {
    const dispatch = useDispatch();
    const test = 'test';

    useEffect(() => {
        dispatch(addStats(test))
    });


    return (
        <View>
            <LinearGradient start={{ x: 0.6, y: 0.02 }}
                end={{ x: 0.1, y: 0.9 }}
                colors={['#0057b8', '#FFFFFF', '#FFD600']}
                style={styles.linearGradient}
            >
                <Header />
                <Stats />
            </LinearGradient>
        </View>

    );
};

const styles = StyleSheet.create({
    linearGradient: {
        height: '100%',
        padding: 5,
    },
});

export default HomePage;