import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
    View, 
    StyleSheet
} from 'react-native';

import ScrollViewContainer from '../screenComponent/ScrollViewContainer'
//import Login from '../Login.js'; 
import TopBarNavigation from '../screenComponent/TopBarNavigation.js';
//import { ScrollView } from 'react-native-gesture-handler';
import IconViewContainers from '../screenComponent/IconViewContainers.js';
class userProfile extends Component {
    static navigationOptions = {
        title: 'Dashboard',
        header:null,
    }
    render(){
        return(
            <View style={styles.Container}>

                <TopBarNavigation navigate={this.props.navigation}/>

                <ScrollViewContainer/>
                
                
                <View style={styles.IconViewContainer}>
                    <IconViewContainers/>
                    {/* <View style={{flex:1, flexDirection:'row'}}>
                        <View style={styles.Icon1}>
                            <Icon name="" size={30} borderRadius={5}/>
                        </View>
                        <View style={styles.Icon2}>
                            <Icon name="" size={30} borderRadius={5}/> 
                        </View>
                        <View style={styles.Icon3}>
                            
                            <Icon name="" size={30} borderRadius={5}/> 
                        </View>
                    </View> */}
                        
                </View>
                
            </View>
        );
    }
}

export default userProfile;


const styles=StyleSheet.create({
    Container:{
        backgroundColor:'white',
        flex:1,
        borderRadius:30,
        

    },
    
    IconViewContainer:{
        flex:1,
        backgroundColor:'red',
        flexDirection:'column',
        margin:8,
        justifyContent:'space-around'

    },
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

    },
    Icon4:{
        flex:1,
        backgroundColor:'white',
        margin:8,
        height:50,
        width:50,

    },
    
});

