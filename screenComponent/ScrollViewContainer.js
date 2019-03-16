import React from 'react';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
    View,ScrollView,StyleSheet
} from 'react-native';

const ScrollViewContainer=()=>{
return(
        <ScrollView style={styles.SliderContainer} horizontal={true}>    
            <View>

            </View>
            <View>
            </View>
            <View>

            </View>
        </ScrollView>
)
}

export default ScrollViewContainer;

const styles=StyleSheet.create({
    SliderContainer:{
        //flex:7,
        backgroundColor:'purple'
    }
})