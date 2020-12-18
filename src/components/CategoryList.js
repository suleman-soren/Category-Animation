import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

const CategoryList = (props) => {
    var Sno = parseInt(props.Id);

    return (
        <TouchableOpacity >
            <View style={styles.listItem}>
                <View style={styles.SNO}>
                    <Text style={styles.SNOText}>
                        {Sno}
                    </Text>
                </View>
                <View style={styles.categoryName}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.heading}>
                                {props.ListName}
                            </Text>
                            {props.showCount ? (
                                <View style={styles.headingTotalSongContainer}>
                                    <Text style={styles.headingTotalSong}>
                                        {props.totalCount}
                                    </Text>
                                </View>
                            ) : null}
                        </View>
                        <Text style={styles.subHeading}>
                            {props.SubListName}
                        </Text>
                    </View>
                    <View style={styles.moreIconContainer}>
                        
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        overflow: 'hidden',
        flexDirection: 'row',
        paddingTop: 16,
        marginLeft: 16
    },
    SNO: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    SNOText: {
        fontSize: 14,
        color: '#707070',
    },
    categoryName: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 16,
        paddingBottom: 16,
        paddingRight: 16,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1
    },
    heading: {
        fontSize: 18
    },
    headingTotalSongContainer: {
        marginLeft: 8,
        width: 20,
        height: 20,
        backgroundColor: 'orange',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingTotalSong: {
        fontSize: 12
    },
    subHeading: {
    },
    moreIconContainer: {
        justifyContent: 'center'
    }
})

export default CategoryList;