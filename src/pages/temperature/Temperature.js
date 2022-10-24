import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated,{
    useSharedValue,
    useAnimatedStyle,
    runOnJS,
    useDerivedValue
} from 'react-native-reanimated'
import { AnimatedGaugeProgress } from 'react-native-simple-gauge';
import {DashedProgress} from 'react-native-dashed-progress';

import styles from './Style'
import { Context } from '../../context/Provider';

// Icons
import Back from '../../assets/icons/Back';
import Setting from '../../assets/icons/Setting';

const options = [
    { label: "Temperature", value: 0 },
    { label: "Statistics", value: 1 }
];
  
const scWidth = Dimensions.get('window').width

const Temperature = ({navigation}) => {

    const { currentTemp } = useContext(Context)
    let roomTemp = Math.round(currentTemp && currentTemp > 10 ? currentTemp : 10)
    const [temperature, setTemperature] = useState(roomTemp)
    const [progress, setProgress] = useState(((temperature-10)/20)*100)

    const temp = useSharedValue(roomTemp);
    const rotation = useSharedValue((roomTemp-10)/20);
    const savedRotation = useSharedValue((roomTemp-10)/20);
    
    const backHandler =() => {
        navigation.goBack()
    }

    useEffect(() => {
        setProgress(((temperature-10)/20)*100)
    }, [temperature])

    const updateTemp = (num) => {
        setTemperature(num)
    };

    useDerivedValue(() => {
        runOnJS(updateTemp)(temp.value);
    });

    const rotationGesture = Gesture.Rotation()
      .onUpdate((e) => {
        let newVal = (savedRotation.value + e.rotation) / Math.PI
       
        if (newVal >= 0 && newVal <= 1) {
            rotation.value = savedRotation.value + e.rotation;
            temp.value = Math.round(newVal * 20 + 10)
        }
      })
      .onEnd(() => {
        savedRotation.value = rotation.value;
      });
    
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ 
            rotateZ: `${(rotation.value / Math.PI) * 180}deg` 
        }]
    }));

    return (
        <View style={styles.contanier}>
            <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />
            <View style={styles.header}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={backHandler}>
                    <Back />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}>
                    <Setting />
                </TouchableOpacity>
            </View>
            <SwitchSelector
                initial={0}
                //onPress={value => setSelected(value)}
                textColor='#000'
                selectedColor='#fff'
                buttonColor='#000'
                borderColor='transparent'
                hasPadding
                options={options}
                height={45}
                style={styles.switch}
                />          
            <View style={styles.knobContent}>
                <DashedProgress
                    radius={scWidth*0.4}
                    barWidth={6}
                    indicatorWidth={0}
                    countBars={40} 
                    strokeThickness={2}
                    text=''
                    strokeColor="#de8f90"
                    trailColor="#e3e3e3"
                    fill={10}/>

                <AnimatedGaugeProgress
                    size={scWidth*0.7}
                    width={12}
                    fill={progress}
                    rotation={90}
                    cropDegree={180}
                    tintColor="#c1c1c1"
                    delay={30}
                    backgroundColor="#f1f1f1"
                    strokeCap="circle"
                    style={styles.progress} />

                <GestureDetector gesture={rotationGesture}>    
                    <Animated.Image 
                        style={[styles.knob, animatedStyle]} 
                        source={require('../../assets/images/knob.png')}/>
                </GestureDetector>
                <View style={styles.leftLabelContent}>
                    <Text style={styles.degLabel}>
                        10
                    </Text>
                    <View style={styles.leftDeg} />
                </View>

                <View style={styles.middleLabelContent}>
                    <Text style={styles.degLabel}>
                        20
                    </Text>
                    <View style={styles.middleDeg} />
                </View>

                <View style={styles.rightLabelContent}>
                    <Text style={styles.degLabel}>
                        30
                    </Text>
                    <View style={styles.rightDeg} />
                </View>
                <View style={styles.cover} />
            </View>

            <View style={styles.footer}>
                <View style={styles.card}>
                    <View style={styles.temp}>
                        <Animated.Text style={styles.value}>
                            {temp.value}
                        </Animated.Text>
                        <View style={styles.exponent} />
                    </View>
                    <Text style={styles.label}>
                        Temperature
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.value}>
                        42%
                    </Text>
                    <Text style={styles.label}>
                        Humidity
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Temperature;