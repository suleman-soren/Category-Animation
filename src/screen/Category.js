import React, {
    useState
} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    ImageBackground
} from 'react-native';

import TopNavigationCategory from '../components/TopNavigationCategory';
import CatogeryList from '../components/CategoryList';

const CATEGORY = require('../category.json');
const BACKGROUND_IMAGE = require('../icons/background.jpg');

function CategoryActivity({ navigation }) {
    
    return (
        <ImageBackground source={BACKGROUND_IMAGE} style={styles.backgroundImage}>
            <SafeAreaView style={styles.container}>
                <TopNavigationCategory headerText={'Categories'} subHeaderText={'695 Songs are found here'} />
                <View style={styles.categoryContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => item.key}
                        data={CATEGORY}
                        renderItem={catList => <CatogeryList showCount={true}
                            Id={catList.item.key} ListName={catList.item.category}
                            SubListName={'Sub Heading'}
                            totalCount={1} />} />
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    categoryContainer: {
        backgroundColor: 'white',
        marginTop: 120,
        marginBottom: 56,
        paddingTop: 0,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32
    }
})

export default CategoryActivity;