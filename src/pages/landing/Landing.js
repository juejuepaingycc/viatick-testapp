import React, { useEffect, useContext } from 'react';
import {
    View,
    Image
} from 'react-native';
import Animated, { 
    useSharedValue, 
    useAnimatedStyle, 
    withTiming
} from 'react-native-reanimated';
import GestureRecognizer from 'react-native-swipe-gestures';

// Components
import styles from './Style';
import { Context } from '../../context/Provider';

// Icons
import UpArrow from '../../assets/icons/UpArrow';

const Landing = ({navigation}) => {

    const opacity1 = useSharedValue(0.2)
    const opacity2 = useSharedValue(1)
    const opacity3 = useSharedValue(1)

    const animatedArrow1 = useAnimatedStyle(() => {
        return {
          opacity: opacity1.value
        };
    });

    const animatedArrow2 = useAnimatedStyle(() => {
        return {
            opacity: opacity2.value
        };
    });

    const animatedArrow3 = useAnimatedStyle(() => {
        return {
            opacity: opacity3.value
        };
    });

    useEffect(()=> {
        const timeout1 = setTimeout(() => {
            setOpacity2()
        }, 400);
        const timeout2 = setTimeout(() => {
            setOpacity3()
        }, 800);
        
        const interval = setInterval(() => {
            setOpacity1()
            setTimeout(() => {
                setOpacity2()
            }, 400);
            setTimeout(() => {
                setOpacity3()
            }, 800);
        }, 1200);
        return () => { 
            clearInterval(interval);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        }
    }, [])

    const setOpacity1 = () => {
        opacity1.value = withTiming(0.2);
        opacity3.value = withTiming(1);
    }

    const setOpacity2 = () => {
        opacity1.value = withTiming(1);
        opacity2.value = withTiming(0.2);
    }

    const setOpacity3 = () => {
        opacity2.value = withTiming(1);
        opacity3.value = withTiming(0.2);
    }

    const  onSwipeUp = (gestureState) => {
        navigation.navigate('Welcome')
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    return (
        <View>
            <GestureRecognizer
                onSwipeUp={(state) => onSwipeUp(state)}
                config={config}>
                <Image 
                    style={styles.landingImg} 
                    source={require('../../assets/images/wallpaper.jpeg')} />
                <View style={styles.swipeContent}>

                        <Animated.View style={animatedArrow1}>
                            <UpArrow />
                        </Animated.View>
                        <Animated.View style={animatedArrow2}>
                            <UpArrow />
                        </Animated.View>
                        <Animated.View style={animatedArrow3}>
                            <UpArrow />
                        </Animated.View>
                </View>
            </GestureRecognizer>
        </View>
    )
}

export default Landing;