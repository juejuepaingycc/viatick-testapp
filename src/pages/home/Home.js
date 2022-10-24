import React, { useEffect, useMemo, useState } from 'react';
import {
    View,
    StatusBar,
    Text,
    ScrollView,
    FlatList
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RNQRGenerator from 'rn-qr-generator';
import { BarChart } from "react-native-gifted-charts";

// Components
import styles from './Style';
import ProfileHeader from '../../components/ProfileHeader';
import SmartCard from '../../components/SmartCard';

// Icon
import getTotalUsage from '../../utils/getTotalUsage';

// Utils
import { fetchEnergyUsage } from '../../utils/fetchData';
import getMaxUsage from '../../utils/getMaxUsage';

// Data
import { SMART_DEVICES } from '../../mocks/smartDevices';

const Home = ({navigation}) => {

    const [smartAC, setSmartAC] = useState(true)
    const [qrCode, setQrcode] = useState()
    const [dailyUsage, setDailyUsage] = useState([])

    // Maximum usage per hour to set maxValue for chart
    const maxUsage = useMemo(() => {
        if (dailyUsage.length > 0)
            return getMaxUsage(dailyUsage).value
        return 100
      }, [dailyUsage]);

      // Total usage for today
      const totalUsage = useMemo(() => {
        if (dailyUsage.length > 0)
              return getTotalUsage(dailyUsage)
        return 0
      }, [dailyUsage]);

    useEffect( ()=> {
        // fetch energy usage from api
        async function fetchData() {
            let today = new Date()
            let todayDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

            const res = await fetchEnergyUsage(todayDate)
            if (res && res.status === "success") 
                setDailyUsage(res.result[0].Hourlies)
          }
          fetchData();
    }, [])

    useEffect(() => {
        // Generate qr for total visit
        let data = {
            totalVisit: 48
        }
        RNQRGenerator.generate({
            value: JSON.stringify(data),
            height: wp(15),
            width: wp(15),
            base64: false,
            color: '#000'
          })
            .then(response => {
                const {uri} = response;
                setQrcode(uri);
            })
            .catch(error => {});
    }, [])

    const onToggle = () => {
        setSmartAC(prev => !prev)
        if (!smartAC) {
            navigation.navigate('Temperature')
        }
    }

    return (
        <ScrollView style={styles.contanier}>
            <StatusBar backgroundColor='#fff' barStyle="dark-content" />
            <ProfileHeader />
            <View style={styles.usageContent}>
                <View style={styles.usageToday}>
                    <Text style={styles.graphTitle}>Usage today</Text>
                    <View style={styles.totalContent}>
                        <Text style={styles.energyUsage}>
                            {`${totalUsage}kw`}
                        </Text>
                    </View>
                </View>
                <View style={{
                    marginLeft: -30,
                    marginTop: hp(3)
                }}>
                    <BarChart 
                        data = {dailyUsage}
                        width={wp(100)}
                        height={hp(17)}
                        noOfSections={5}
                        stepValue={100/5}
                        maxValue={maxUsage}
                        spacing={16}
                        initialSpacing={16}
                        barWidth={20}
                        frontColor='#c59450'
                        roundedTop={true}
                        roundedBottom={true}
                        barMarginBottom={5}
                        textColor='#4a4340'
                        textFontSize={4}
                        xAxisThickness={0}
                        yAxisThickness={0}
                        hideYAxisText={true}
                        xAxisLabelTextStyle={{
                            color: '#48433f',
                            fontSize: 10,
                            fontFamily: 'Poppins-Medium'
                        }}
                        renderTooltip={(item, index) => (
                            <View style={styles.tooltipContent}>
                                <Text style={styles.tooltip}>
                                    {`${item.value}kw`}
                                </Text>
                            </View>

                        )}
                        />
                </View>
            </View>
            <View style={styles.smartDevices}>
                <Text style={styles.title}>
                    Smart Devices
                </Text>
                <FlatList
                    data={SMART_DEVICES}
                    numColumns={2}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => index.toString()}
                    style={{
                        marginTop: hp(1)
                    }}
                    renderItem={({item, index}) => (
                        <SmartCard 
                            item={item} 
                            index={index} 
                            smartAC={smartAC}
                            qrCode={qrCode}
                            onToggle={onToggle} />
                    )}
                    />
            </View>
        </ScrollView>
    )
}

export default Home