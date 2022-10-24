import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StatusBar
} from 'react-native';

// Component
import CalendarItem from '../../components/CalendarItem'
import styles from './Style'

// Data
import { CALENDAR } from '../../mocks/calendar'

// Svg
import BigArrow from '../../assets/icons/BigArrow';

const Calendar = ({navigation}) => {

    const [endReached, setEndReached] = useState(false)
    const [offset, setOffset] = useState(0)

    const calendarHandler = (item, index) => {
        navigation.navigate('CalendarDetail', {item, index})
    }

    const endHandler = () => {
        setEndReached(true)
    }

    return (
        <View>
            <StatusBar translucent backgroundColor="transparent" barStyle='light-content' />
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={CALENDAR}
                renderItem={({item, index}) => (
                    <CalendarItem 
                        item={item}
                        index={index}
                        itemHandler={() => calendarHandler(item, index)} />
                )}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={endHandler}
                onEndReachedThreshold={1}
                onScroll={(event) => {
                    let currentOffset = event.nativeEvent.contentOffset.y;
                    let direction = currentOffset > offset ? 'down' : 'up';
                    setOffset(currentOffset);
                    if (direction === 'up') setEndReached(false)
                }}
                />
            {!endReached && (
                <View style={styles.swipeContent}>
                    <BigArrow />
                    <Text style={styles.swipeup}>
                        Swipe up
                    </Text>
                </View>
            )}
        </View>
    )
}

export default Calendar;