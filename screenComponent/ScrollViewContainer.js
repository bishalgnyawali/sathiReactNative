import React from 'react';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { 
    View,ScrollView,StyleSheet,Image
} from 'react-native';

const ScrollViewContainer=()=>{
//render(){
    return(
            <ScrollView style={{flex:5}} horizontal={true}
              pagingEnabled
              scrollEventThrottle={10}
              showsHorizontalScrollIndicator={false}
            >    
                    
                <View style={styles.container}>
                    <MapView
                            style={{...StyleSheet.absoluteFillObject}}
                            //provider={PROVIDER_GOOGLE}
                            //customMapStyle={MapStyle}
                            showsMyLocationButton={true}
                            showsUserLocation
                            initialRegion = {{
                              latitude:-6.270565,
                              longitude:106.759550,
                              latitudeDelta: 1,
                              longitudeDelta: 1
                                }}/>
                    
                </View>
            
            </ScrollView>
    )
    //}
}

export default ScrollViewContainer;

const styles = StyleSheet.create({
    container: {
      flex:1,
      position: 'relative',
      
    },
    
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });