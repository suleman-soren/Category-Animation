import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions,
    TextInput,
    Image
} from 'react-native';
// REFERENCES
var SEARCH = require('../icons/search.png');
var MENU = require('../icons/hamburger.png');
var BACK = require('../icons/back.png');

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function TopNavigationCategory(props) {
    return (
        <View style={styles.container}>
            <View style={styles.topHeadingIcon}>
                <View style={styles.first}>
                    <TouchableOpacity onPress={props.goBack}>
                        <Image style={{ width: 22, height: 22, marginRight: 32 }} source={BACK} />
                    </TouchableOpacity>
                </View>

                <View style={styles.second}>
                    {props.showSearchFlag ? (
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => props.onChangeTextProps(text)}
                            value={props.valueProps}
                            placeholder={'Search'} />
                    ) : null}
                    <TouchableOpacity onPress={props.searchClicked} >
                        <Image style={{ width: 22, height: 22, marginRight: 32 }} source={SEARCH} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={props.sideNavigation} >
                        <Image style={{ width: 20, height: 20 }} source={MENU} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.headerText}>{props.headerText}</Text>
                <Text style={styles.subHeaderText}>{props.subHeaderText}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 16,
        height: 46,
        justifyContent: 'space-between'
    },
    topHeadingIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    first: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        paddingBottom: 8
    },
    second: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: '#ffffff',
        width: (width - 140),
        padding: 8,
        borderRadius: 12,
        marginRight: 8
    },
    headerText: {
        fontSize: 32,
    },
    subHeaderText: {
        fontSize: 16,
    }
});

export default TopNavigationCategory;