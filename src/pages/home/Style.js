import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        backgroundColor: '#fff'
    },
    usageContent: {
        width: wp(100),
        height: hp(25),
        backgroundColor: '#e1d5ca',
        paddingRight: 20
    },
    smartDevices: {
        backgroundColor: '#f7f7f7',
        flexGrow: 1,
        padding: wp(3)
    },
    title: {
        fontSize: hp(2),
        color: '#424040',
        fontFamily: 'Poppins-Medium',
        
    },
    usageToday: {
       position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        margin: hp(1)
    },
    graphTitle: {
        color: '#000',
        fontFamily: 'Poppins-SemiBold',
        fontSize: hp(1.3)
    },
    totalContent: {
        backgroundColor: '#212224',
        borderRadius: hp(3),
        paddingHorizontal: wp(4),
        paddingVertical: wp(0.5),
        marginLeft: wp(1.5)
    },
    energyUsage: {
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        fontSize: hp(1.5)
    },
    tooltipContent: {
        backgroundColor: '#353638',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 5,
        marginBottom: 0,
    },
    tooltip: {
        color: '#fff',
        fontSize: 10
    }
})

export default styles;