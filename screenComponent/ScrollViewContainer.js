import React from 'react';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
    View,ScrollView,StyleSheet,Image
} from 'react-native';

const ScrollViewContainer=()=>{
return(
        <ScrollView style={styles.SliderContainer} horizontal={true}
            pagingEnabled={true}
            scrollEventThrottle={10}
            showsHorizontalScrollIndicator={false}
        >    
            <View>
                <Image source={require('../assets/download.png')} style={{borderColor:'black'}}/>
            </View>
                <Image source={require('../assets/download.png')}/>
            <View>
                <Image source={require('../assets/download.png')}/>
            </View>
                <Image source={require('../assets/download.png')}/>
            <View>
                <Image source={require('../assets/download.png')}/>
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