import React from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CalendarItem = ({ item, index, itemHandler }) => {

    const styles = StyleSheet.create({
        item: {
            height: hp(25),
            width: wp(100)
        },
        transparentContent: {
            height: hp(25),
            width: wp(33),
            backgroundColor: 'rgba(0,0,0,0.4)',
            position: 'absolute',
            paddingVertical: hp(3.5),
            paddingLeft: wp(5)
        },
        monthNo: {
            color: '#e7e7e6',
            fontSize: hp(4.),
            fontFamily: 'DidotLH-Roman'
        },
        month: {
            color: '#d4d4d2',
            fontSize: hp(2.2),
            textTransform: 'uppercase',
            fontFamily: 'Slimbach-Book'  
        },
        highlight: {
            color: '#c7c7c1',
            fontSize: hp(1.3),
            paddingTop: hp(2),
            fontFamily: 'Slimbach-Book'
        },
        seeMoreView: {
            width: wp(23),
            height: hp(1.8),
            backgroundColor: 'rgba(232, 232, 227, 0.5)',
            borderRadius: hp(1),
            position: 'absolute',
            bottom: hp(3.5),
            left: wp(5),
            justifyContent: 'center',
            alignItems: 'center'
        },
        seeMore: {
            fontSize: hp(1),
            color: '#d4d4cd'
        }
    })

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.item}
            onPress={itemHandler}>
            <Image
                source={item.photo}
                style={styles.item} />
            <View style={styles.transparentContent}>
                <Text style={styles.monthNo}>
                    {index < 9 ? `0${index+1}` : index+1}
                </Text>
                <Text style={styles.month}>
                    {item.name}
                </Text>
                <Text style={styles.highlight}>
                    {item.highlight}
                </Text>
                <View style={styles.seeMoreView}>
                    <Text style={styles.seeMore}>
                        See More
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
   );
}

export default CalendarItem;
  
