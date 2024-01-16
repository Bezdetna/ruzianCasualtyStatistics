import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <SafeAreaView style={styles.footer}>
            <Text style={styles.footerTitle}>Бажаєш збільшити стату?</Text>
            <View style={styles.donate}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                <View style={styles.donate}>
                    <FontAwesomeIcon icon={faHome} />
                    <Text style={styles.donateName}>Повернись живим</Text>
                </View>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </View>
            <View style={styles.contacts}>
                <Text style={styles.footerName}>Народ України.</Text>
                <FontAwesomeIcon icon={faHome} />
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
    },
    footerTitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: '900',
        padding: 10,
        textAlign: 'center'
    },
    donate: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    donateName: {
        fontSize: 20,
        color: 'black',
        fontWeight: '900',
        padding: 10,
        textAlign: 'center'
    },
    footerName: {
        fontSize: 10,
        color: 'black',
        fontWeight: '500',
        padding: 10,
        textAlign: 'center'
    },
    contacts: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',


    }

})

export default Footer