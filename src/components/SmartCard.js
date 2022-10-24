import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ToggleSwitch from 'toggle-switch-react-native'

// Icons
import SecurityCamera from "../assets/icons/SecurityCamera"
import Aircon from "../assets/icons/Aircon"
import Intercom from "../assets/icons/Intercom"
import Pin from '../assets/icons/Pin';
import Pending from '../assets/icons/Pending';
import Approved from '../assets/icons/Approved';
import Rejected from '../assets/icons/Rejected';

const SmartCard = ({
    item, 
    index,
    smartAC,
    qrCode,
    onToggle
}) => {

    const styles = StyleSheet.create({
        card: {
            backgroundColor: smartAC && index === 1 ? '#000' : '#fff',
            height: hp(28),
            width: wp(45),
            borderRadius: hp(2),
            marginRight: wp(3.5),
            marginBottom: wp(3.5),
            padding: wp(3),
            paddingBottom: wp(5),
            justifyContent: 'space-between'
        },
        footer: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between'
        },
        name: {
            width: wp(20),
            color: smartAC && index === 1 ? '#fff' : '#000',
            fontSize: hp(1.7)
        },
        switch: {
            transform: [
                {
                    rotate: '-90deg'
                }
            ],
            marginRight: wp(-4),
            marginBottom: hp(1.6)
        },
        locRow: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        location: {
            color: '#000',
            fontSize: hp(1.8),
            paddingLeft: 2
        },
        leftContent: {
            width: wp(22),
            alignItems: 'center',
            alignSelf: 'flex-end'
        },
        visitCount: {
            fontSize: hp(3.8),
            color: '#565656',
            fontFamily: 'Poppins-SemiBold',
            bottom: -10
        },
        visit: {
            fontSize: hp(1.4),
            color: '#898989',
            fontFamily: 'Poppins-Medium'
        },
        qrImage: {
            width: wp(15),
            height: wp(15),
            marginTop: 8
        },
        qrcode: {
            fontSize: hp(1.2),
            color: '#898989',
            fontFamily: 'Poppins-Regular'
        },
        rightContent: {
            width: wp(17)
        },
        statusRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 26,
            width: wp(16),
            alignSelf: 'flex-end',
            marginBottom: 7
        },
        statusCount: {
            fontSize: hp(2.3),
            color: '#565656',
            fontFamily: 'Poppins-Medium',
            textAlign: 'center',
        },
        status: {
            fontSize: hp(0.8),
            color: '#565656',
            top: -4
        }
    })

    if (index === 3) 
        return (
            <View style={styles.card}>
                <View style={styles.locRow}>
                    <Pin />
                    <Text style={styles.location}>
                        {item.location}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', height: hp(20)}}>
                    <View style={styles.leftContent}>
                        <Text style={styles.visitCount}>
                            {item.totalVisit}
                        </Text>
                        <Text style={styles.visit}>
                            Total Visits
                        </Text>
                        <Image style={styles.qrImage} source={{uri: qrCode}} />
                        <Text style={styles.qrcode}>
                            QR code
                        </Text>
                    </View>
                    <View style={styles.rightContent}>
                        <View style={[styles.statusRow, {}]}>
                            <View>
                                <Text style={styles.statusCount}>
                                    {item.pending < 10 ? `0${item.pending}` : item.pending}
                                </Text>
                                <Text style={styles.status}>
                                    Pending
                                </Text>
                            </View>
                            <Pending />
                        </View>
                        <View style={styles.statusRow}>
                            <View>
                                <Text style={styles.statusCount}>
                                    {item.approved < 10 ? `0${item.approved}` : item.approved}
                                </Text>
                                <Text style={styles.status}>
                                    Approved
                                </Text>
                            </View>
                            <Approved />
                        </View>
                        <View style={[styles.statusRow, ]}>
                            <View>
                                <Text style={styles.statusCount}>
                                    {item.rejected < 10 ? `0${item.rejected}` : item.rejected}
                                </Text>
                                <Text style={styles.status}>
                                    Rejected
                                </Text>
                            </View>
                            <Rejected />
                        </View>
                    </View>
                    <ToggleSwitch
                            isOn={false}
                            offColor="#f7f7f7"
                            size='large'
                            thumbOffStyle={{
                                backgroundColor: '#eaeaea'
                            }}
                            disabled={true}
                            style={[
                                styles.switch, 
                                {
                                    marginTop: 0,
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0
                                }
                            ]}
                        /> 
                </View>
            </View>
        )

    return (
        <TouchableOpacity 
            disabled={item.disabled}
            activeOpacity={0.8}
            onPress={onToggle}
            style={styles.card}>
            {
                index === 0 ?
                    <SecurityCamera />
                : index === 1 ?
                    <Aircon on={smartAC} />
                : <Intercom />
            }
            <View style={styles.footer}>
                <View>
                    <Text style={styles.name}>Smart</Text>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <ToggleSwitch
                    isOn={index === 1 ? smartAC : false}
                    onColor="white"
                    offColor="#f7f7f7"
                    size='large'
                    thumbOnStyle={{
                        backgroundColor: '#2a2a2a'
                    }}
                    thumbOffStyle={{
                        backgroundColor: '#eaeaea'
                    }}
                    disabled={item.disabled}
                    onToggle={onToggle}
                    style={styles.switch}
                    />
            </View>
        </TouchableOpacity>
    )
}

export default SmartCard;