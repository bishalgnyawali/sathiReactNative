import React from 'react';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
   View,ScrollView,StyleSheet
} from 'react-native';




const ScrollViewContainer=()=>{
       return(
            <ScrollView style={styles.SliderContainer} horizontal={true}>
                
                <View style={styles.Icon1}>

                </View>
                <View style={styles.Icon2}>
                </View>
                <View style={styles.Icon3}>

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