import React from 'react';
import { View } from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Add from '../assets/icons/Add';

const AddMenu = () => {

    return (
        <View 
            style={{
                backgroundColor: '#919c86',
                width: wp(10),
                height: wp(10),
                borderRadius: wp(3),
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Add />
        </View>
    )
}

export default AddMenu;