import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Component
import styles from './Style';

const CalendarDetail = ({route}) => {

    const { item, index } = route.params;
    
    return (
        <View style={{flex: 1}}> 
           <View>
                <Image
                    source={item.photo}
                    style={styles.photo} />
                <View style={styles.titleContent}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                    <Text style={styles.title}>
                        {item.subTitle}
                    </Text>
                </View>
           </View>
           <View style={styles.descContent}>
                <Image 
                    source={require('../../assets/images/whiteBg.jpg')} 
                    style={styles.bgImg} />
                <Text style={styles.monthNo}>
                    {index < 9 ? `0${index+1}` : index+1}
                </Text>
                <View style={styles.divider} />
                <Text style={styles.month}>
                    {item.name}
                </Text>
                <Text style={styles.highlight}>
                    {item.highlight}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
           </View>

           <View style={styles.footer}>
                <Text style={styles.label}>
                    Location
                </Text>
                <View style={styles.divider} />
                <Text style={styles.value}>
                    {item.location}
                </Text>

                <Text style={styles.label}>
                    Time
                </Text>
                <View style={styles.divider} />
                <Text style={[styles.value, {fontSize: hp(1.5)}]}>
                    {item.startTime}
                </Text>
                <Text style={[styles.value, {fontSize: hp(1.5)}]}>
                    {item.endTime}
                </Text>

                <View style={styles.btn}>
                    <Text style={styles.btnText}>
                        Add to Calendar
                    </Text>
                </View>

                <Text style={styles.label}>
                    Back
                </Text>
                <View style={styles.divider} />
            </View>
        </View>
    )
}

export default CalendarDetail;