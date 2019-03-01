import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
   View, Text, StyleSheet, TouchableOpacity, ScrollView
} from 'react-native';



import Login from '../Login.js'; 
//import { ScrollView } from 'react-native-gesture-handler';

//import userProfile from './screens/userProfile.js';
//const MyApp = createAppContainer(MyDrawerNavigator);



class userProfile extends Component {
    static navigationOptions = {
        title: 'Dashboard',
        header:null,
        

    }
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.TopContainer}>
                    <TouchableOpacity>                   
                        <Icon name="menu" size={30} borderRadius={5} onPress={()=>this.props.navigation.openDrawer()}/>
                    </TouchableOpacity>
                    
                </View>
                
                <ScrollView style={styles.SliderContainer} horizontal={true}>
                            <View style={styles.Icon1}>

                            </View>
                            <View style={styles.Icon2}>
                                
                            </View>
                            <View style={styles.Icon3}>
                                
                            </View>
                </ScrollView>
                <View style={styles.IconViewContainer}>
                    <View style={{flex:1, flexDirection:'row'}}> 
                        <View style={styles.Icon1}>
                        <Icon name="menu" size={30} borderRadius={5} onPress={()=>this.props.navigation.openDrawer()}/>
                        </View>
                        <View style={styles.Icon2}>
                        <Icon name="" size={30} borderRadius={5}/>
                        </View>
                        <View style={styles.Icon3}>
                        <Icon name="" size={30} borderRadius={5}/>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={styles.Icon1}>
                        <Icon name="" size={30} borderRadius={5}/>
                        </View>
                        <View style={styles.Icon2}>
                        <Icon name="" size={30} borderRadius={5}/> 
                        </View>
                        <View style={styles.Icon3}>
                        <Icon name="" size={30} borderRadius={5}/> 
                        </View>
                    </View>
                        
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
    TopContainer:{
        marginTop: 30,
        backgroundColor:'white',
        height:30,
        

    },
    
    SliderContainer:{
        //flex:7,
        backgroundColor:'purple'
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

