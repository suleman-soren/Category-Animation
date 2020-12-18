import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
// REFERENCES
var HOME = require('../icons/home.png');
var CATEGORY = require('../icons/category.png');

const TabBarContent = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.tabElementContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => { props.navigation.navigate('Home') }}>
                    <Image style={{ width: 28, height: 28 }} source={HOME} />
                </TouchableOpacity>
            </View>
            <View style={styles.tabElementContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => { props.navigation.navigate('Category') }}>
                    <Image style={{ width: 28, height: 28 }} source={CATEGORY} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row'
    },
    tabElementContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    iconContainer: {
        alignItems: 'center',
        paddingBottom: 16,
        paddingTop: 12
    }
});

export default TabBarContent;