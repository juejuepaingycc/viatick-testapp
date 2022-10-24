import React from 'react';
import {
    Text,
    Image,
    View,
    StatusBar,
    StyleSheet
} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Temperature from '../assets/icons/Temperature';

const ProfileHeader = () => {

    const styles = StyleSheet.create({
        container: {
            marginTop: StatusBar.currentHeight,
            paddingVertical: hp(1),
            width: wp(94),
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        leftContent: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        profile: {
            width: wp(11),
            height: wp(11),
            borderRadius: wp(8)
        },
        nameContent: {
            paddingHorizontal: wp(2)
        },
        name: {
            fontWeight: 'bold',
            color: '#5c5a5a',
            fontSize: hp(1.7)
        },
        hi: {
            color: '#5c5a5a',
            fontSize: hp(1.6)
        },
        description: {
            fontSize: hp(1.4)
        },
        tempContent: {
            backgroundColor: '#f3f6f1',
            paddingHorizontal: wp(2),
            borderRadius: hp(2),
            flexDirection: 'row',
            alignItems: 'center',
            height: 29
        },
        temperature: {
            color: '#9ca396',
            paddingLeft: 3,
            fontSize: hp(1.4),
            lineHeight: 18
        },
        exponent: {
            lineHeight: 10,
            fontSize: hp(2),
            marginBottom: 10,
            marginHorizontal: -3
            
        }
    })

    return (
       <View style={styles.container}>
            <View style={styles.leftContent}>
                <Image
                    style={styles.profile}
                    source={require('../assets/images/profile.jpg')} />
                <View style={styles.nameContent}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={styles.hi}>
                            Hi,&nbsp;
                        </Text>
                        <Text style={styles.name}>
                            Lucy Connor
                        </Text>
                    </View>
                    <Text style={styles.description}>
                        25 device on
                    </Text>
                </View>
            </View>
            <View style={styles.tempContent}>
                <Temperature />
                <Text style={styles.temperature}>
                    24
                </Text>
                <Text style={[styles.temperature, styles.exponent]}>
                    .
                </Text>
                <Text style={styles.temperature}>
                    C
                </Text>
            </View>
       </View>
    )
}

export default ProfileHeader;