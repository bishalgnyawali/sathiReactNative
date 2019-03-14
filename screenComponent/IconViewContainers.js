import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
    View,StyleSheet
} from 'react-native';

const IconViewContainers=()=>{
    return(
        
            <View style={{flex:1, flexDirection:'row'}}> 
                <View style={styles.Icon1}>
                    <Icon name="menu" size={30} borderRadius={5}/>
                </View>
                <View style={styles.Icon2}>
                    <Icon name="" size={30} borderRadius={5}/>
                </View>
                <View style={styles.Icon3}>
                    <Icon name="" size={30} borderRadius={5}/>
                </View>
            </View>
    )
}
export default IconViewContainers;

const styles=StyleSheet.create({
    Icon1:{
        flex:1,
        margin:8,
        height:50,
        width:50,
        
        backgroundColor:'white'

    },
    Icon2:{
        flex:1,
        backgroundColor:'white',
        margin:8,
        height:50,
        width:50,
    },
    Icon3:{
        flex:1,
        backgroundColor:'white',
        margin:8,
        height:50,
        width:50,
    }
})