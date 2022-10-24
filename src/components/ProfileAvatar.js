import React from 'react';
import { Image } from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const ProfileAvatar = () => {
    return (
        <Image
            style={{
                width: wp(8),
                height: wp(8),
                borderRadius: wp(4),
            }}
            source={require('../assets/images/profile.jpg')} />
    )
}

export default ProfileAvatar;