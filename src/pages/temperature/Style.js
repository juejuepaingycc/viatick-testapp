import { StyleSheet, Dimensions, StatusBar } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
const scWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  },
  header: {
    marginTop: StatusBar.currentHeight,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(4),
    paddingVertical: hp(1)
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(7),
    position: 'absolute',
    bottom: hp(4),
    width: wp(100)
  },
  card: {
    width: wp(40),
    height: hp(10),
    borderRadius: hp(1.3),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(3),
    color: '#000',
    bottom: -4
  },
  exponent: {
    width: 8,
    height: 8,
    borderWidth: 2,
    borderRadius: 5,
    position: 'absolute',
    right: -8,
    top: 5
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: hp(1.4),
    top: -4
  },
  switch: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(1.5)
  },
  knobContent: {
    alignItems: 'center',
    marginTop: hp(15),
  },
  progress: {
    position: 'absolute',
    marginTop: wp(8),
    zIndex: 2
  },
  knob: {
    width: scWidth*0.7-22,
    height: scWidth*0.7-22,
    borderRadius: wp(50),
    position: 'absolute',
    marginTop: wp(10)+4,
    zIndex: 2
  },
  leftLabelContent: {
    position: 'absolute',
    left: 10,
    top: scWidth * 0.4 - 5
  },
  degLabel: {
    color: '#cfcfcf',
    fontSize: hp(2)
  },
  leftDeg: {
    width: 4,
    height: 4,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#cfcfcf',
    position: 'absolute',
    right: -1,
    top: 2
  },
  middleLabelContent: {
    position: 'absolute',
    top: -25
  },
  middleDeg: {
    width: 4,
    height: 4,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#cfcfcf',
    position: 'absolute',
    right: -1,
    top: 2
  },

  rightLabelContent: {
    position: 'absolute',
    right: 10,
    top: scWidth * 0.4 - 5
  },
  rightDeg: {
    width: 4,
    height: 4,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#cfcfcf',
    position: 'absolute',
    right: -1,
    top: 2
  },
  cover: {
    backgroundColor: '#f1f1f1',
    width:wp(100),
    height: scWidth*0.4,
    position: 'absolute',
    marginTop: scWidth*0.45,
  }


})

export default styles;