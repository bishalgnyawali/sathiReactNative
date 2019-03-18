import React from 'react';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { 
    View,ScrollView,StyleSheet,Image
} from 'react-native';

const ScrollViewContainer=()=>{
return(
        <ScrollView style={styles.SliderContainer} horizontal={true}
            pagingEnabled
            scrollEventThrottle={10}
            showsHorizontalScrollIndicator={false}
        >    
                
            <View style={{...StyleSheet.absoluteFillObject, flex:1, height:400, width:400, justifyContent:'flex-end',alignItems:'center'}}>
                <MapView
                        style={{...StyleSheet.absoluteFillObject}}
                        //provider={PROVIDER_GOOGLE}
                        //customMapStyle={MapStyle}
                        showsMyLocationButton={true}
                        showsUserLocation
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                        
                />
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