import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { SvgUri } from 'react-native-svg';


export default function statsItem({ statsAll, statsState, terms }) {
    return (
        <View style={styles.statsBlock}>
            {/* <Image source={terms.icon}
                defaultSource={require('../../../img/military-hat.png')}
                style={styles.statsImage} /> */}
            <SvgUri
                width={100}
                height={50}
                uri={terms.icon} />
            <View>
                <View style={styles.statsNumber}>
                    <Text style={styles.statsAll}>
                        {statsAll}
                    </Text>
                    <Text style={styles.statsDay}>
                        ( +{statsState})
                    </Text>
                </View>
                <Text style={styles.statsText}>
                    {terms.title}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    statsBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
    },
    statsImage: {
        height: 90,
        width: 85,
        marginLeft: 10,
        marginRight: 30,
    },
    statsNumber: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    statsAll: {
        fontSize: 24,
        textAlign: 'center',
        color: 'black',
        fontWeight: '900',
    },
    statsDay: {
        fontSize: 20,
        color: 'black',
        marginLeft: 10,
        fontWeight: '500',
    },
    statsText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
    },
});