import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    swipeContent: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: hp(2),
        alignItems: 'center'
    },
    swipeup: {
        color: '#fff',
        fontSize: hp(1.2),
        top: hp(-0.5)
    },

    // Detail
    photo: {
        height: hp(35),
        width: wp(100)
    },
    titleContent: {
        position: 'absolute',
        bottom: 10,
        left: wp(5),
    },
    title: {
        color: '#fff',
        fontSize: hp(2.8),
        fontFamily: 'Slimbach-Book'
    },
    descContent: {
        paddingHorizontal: wp(6),
        paddingTop: hp(1)
    },
    monthNo: {

        color: '#864b47',
        fontSize :hp(4.5),
        fontFamily: 'DidotLH-Roman',
    },
    divider: {
        backgroundColor: '#c2af9d',
        width: wp(30),
        height: 1
    },
    month: {
        color: '#915751',
        fontSize: hp(3),
        fontFamily: 'Slimbach-Book'
    },
    highlight: {
        color: '#915751',
        fontSize: hp(1.7),
        fontFamily: 'Slimbach-Book',
        paddingTop: hp(0.3),
        paddingBottom: hp(3)
    },
    description: {
        color: '#ab6963',
        fontSize: hp(1.4),
        fontFamily: 'Slimbach-Book',
        width: wp(50)
    },
    footer: {
        position: 'absolute',
        bottom: hp(4),
        right: wp(10)
    },
    label: {
        color: '#915751',
        fontSize: hp(1.7),
        fontFamily: 'Slimbach-Book',
        paddingTop: hp(2)
    },
    value: {
        textTransform: 'uppercase',
        color: '#854d46',
        fontSize: hp(1.6),
        fontWeight: 'bold',
        fontFamily: 'Slimbach-Book',
    },
    btn: {
        width: wp(30),
        backgroundColor: '#cfbab8',
        height: hp(2.3),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(2),
        marginTop: hp(1)
    },
    btnText: {
        color: '#854d46',
        fontSize: hp(1),
        fontWeight: 'bold',
        fontFamily: 'Slimbach-Book',
        
    },
    bgImg: {
        position: 'absolute',

    }
})

export default styles;