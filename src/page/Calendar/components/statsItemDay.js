import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { SvgUri } from 'react-native-svg';


export default function statsItemDay({ statsAll, statsState, terms }) {
    return (
        <View style={styles.statsBlock}>
            {/* <Image source={terms.icon}
                defaultSource={require('../../../img/military-hat.png')}
                style={styles.statsImage} /> */}
            <SvgUri
                width={60}
                height={35}
                marginRight={10}
                uri={terms.icon} />
            <View style={styles.statsInfo}>
                <View style={styles.statsNumber}>
                    <Text style={styles.statsAll}>
                        {statsAll}
                    </Text>
                    <Text style={styles.statsDay}>
                        ( +{statsState})
                    </Text>
                </View>
                <Text style={styles.statsText} >
                    {terms.title}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    statsBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'visible',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 10,
        padding: 10,
        borderWidth: 1,
        width: 250,
        height: 100,
        flex: 1,
    },
    statsImage: {
        height: 50,
        width: 45,
        // marginLeft: 10,
        // marginRight: 30,
    },
    statsInfo: {
        padding: 10,
        flex: 1,
        flexShrink: 1
    },
    statsAll: {
        fontSize: 15,
        color: 'black',
        fontWeight: '900',

    },
    statsDay: {
        fontSize: 13,
        color: 'black',
        marginLeft: 10,
        fontWeight: '500',

    },
    statsText: {
        fontSize: 13,
        color: 'black',
        textAlign: 'center',
    },
    statsNumber: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});