import React, { useEffect, useState, useContext } from 'react';
import {
    View,
    Image,
    BackHandler,
    PermissionsAndroid,
    Text
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Animated, { 
    useSharedValue, 
    useAnimatedStyle, 
    withTiming
} from 'react-native-reanimated';
import Geolocation from 'react-native-geolocation-service';

// Components
import styles from './Style';
import { Context } from '../../context/Provider';

// Icons
import RightArrow from '../../assets/icons/RightArrow';

// utils
import getCurrentTime from '../../utils/getCurrentTime';
import { fetchWeatherWithLatLon, fetchWeatherWithCity } from '../../utils/fetchData';

const Welcome = () => {

    const { changeLanded, changeTemp } = useContext(Context)
    const time = getCurrentTime()
    const [weather, setWeather] = useState()

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backButtonHandler);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
        };
    }, [backButtonHandler])

    const backButtonHandler = () => {
        BackHandler.exitApp();
    };

    useEffect(() => {
        getLocation()
    }, [])

    // Function to get permission for location
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Geolocation Permission',
                    message: 'Can we access your location to retrieve weather data?',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use Geolocation');
                return true;
            } else {
                console.log('You cannot use Geolocation');
                return false;
            }
        } catch (err) {
            return false;
        }
    };

    // function to check permissions and get Location
    const getLocation = () => {
        const permissionResult = requestLocationPermission();
        permissionResult.then(async res => {
            if (res) {
                Geolocation.getCurrentPosition(
                    async position => {
                        const weatherRes = await fetchWeatherWithLatLon(position.coords.latitude, position.coords.longitude)
                        setWeather(weatherRes.data)
                        changeTemp(weatherRes.data.main.temp)
                    },
                    async error => {
                        console.error(error.code, error.message);
                        const weatherRes = await fetchWeatherWithCity()
                        setWeather(weatherRes.data)
                        changeTemp(weatherRes.data.main.temp)
                    },
                    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
                );
            }
            else {
                const weatherRes = await fetchWeatherWithCity()
                setWeather(weatherRes.data)
                changeTemp(weatherRes.data.main.temp)
            }
        });
    };

    const  onSwipeRight = (gestureState) => {
        changeLanded(true)
      }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

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


    return (
        <View>
            <GestureRecognizer
                onSwipeRight={(state) => onSwipeRight(state)}
                config={config}>
                <Image 
                    style={styles.landingImg} 
                    source={
                        time === 'morning' ?
                            require('../../assets/images/morning.jpg') :
                        time === 'afternoon' ? 
                            require('../../assets/images/afternoon.jpg') :
                        require('../../assets/images/night.jpg')
                    } />
                <View style={styles.content}>
                    <Text 
                        style={[
                            styles.title, 
                            {
                                color:  time === 'morning' ? '#f5b264' :
                                        time === 'afternoon' ? '#f7ebd7' :
                                        '#fff',
                                textShadowColor:time === 'morning' ? '#f5b264' :
                                                time === 'afternoon' ? '#e38b24' :
                                                '#fff',
                                textShadowRadius: time === 'night' ? 13 : 18
                            }
                        ]}>
                        WELCOME
                    </Text>
                    <Text 
                        style={[
                            styles.message, 
                            {
                                color:  time === 'morning' ? '#f5b264' :
                                        time === 'afternoon' ? '#f7ebd7' :
                                        '#fff',
                                textShadowColor:time === 'morning' ? '#f5b264' :
                                            time === 'afternoon' ? '#e38b24' :
                                            '#fff',
                                textShadowRadius: time === 'night' ? 13 : 18
                            }
                        ]}>
                        {weather ? weather.weather[0].description : ''}
                    </Text>
                    <View style={styles.arrows}>
                        <Animated.View style={animatedArrow1}>
                            <RightArrow 
                                color={
                                    time === 'morning' ? '#f59c32' :
                                    time === 'afternoon' ? '#f39a32' :
                                    '#fff'                            
                                }
                                style={{marginLeft: 0}} />
                        </Animated.View>
                        <Animated.View style={animatedArrow2}>
                            <RightArrow
                                color={
                                    time === 'morning' ? '#f59c32' :
                                    time === 'afternoon' ? '#f39a32' :
                                    '#fff'                            
                                } />
                        </Animated.View>
                        <Animated.View style={animatedArrow3}>
                            <RightArrow 
                                color={
                                    time === 'morning' ? '#f59c32' :
                                    time === 'afternoon' ? '#f39a32' :
                                    '#fff'                            
                                }/>
                        </Animated.View>
                    </View>
                </View>
            </GestureRecognizer>
        </View>
    )
}

export default Welcome;