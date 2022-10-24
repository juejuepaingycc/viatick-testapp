import { Pressable, View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

function MyTabBar({ state, descriptors, navigation }) {

  const styles = StyleSheet.create({
    tabBar:{ 
      flexDirection: 'row',
      backgroundColor: '#fff',
      display: "flex",
      height: 60,
      width: wp(95),
      alignSelf: 'center',
      borderRadius: 10,
      marginBottom: 3
    },
    singleTab:{
      width:wp(19),
      justifyContent:'center',
      alignItems:'center'
    },
    active: {
      width: 3,
      height: 2,
      backgroundColor: '#000',
      position: 'absolute',
      borderRadius: 5
    }
  })

  const comArr = state.routes.map((route, index) => {
    const { options } = descriptors[route.key];
    const icon = options.tabBarIcon ;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
      });
      if (route.name === "Menu") {
        navigation.navigate("CalendarStack")
      }
    };


    return (
      <Pressable
        key={index}
        onPress={onPress}
        style={styles.singleTab}>
        {icon && icon}
      </Pressable>
    );
  })

  return (
    <View style={styles.tabBar}>
      {comArr.map(x=> x)}
    </View>
  );
}

export default MyTabBar