import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
   View, Text, StyleSheet, TouchableOpacity
} from 'react-native';



import Login from '../Login.js'; 

//import userProfile from './screens/userProfile.js';
//const MyApp = createAppContainer(MyDrawerNavigator);



class userProfile extends Component {
    static navigationOptions = {
        title: 'Dashboard',
        header:null,
        
    };
    
    

    
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.TopContainer}>
                    <TouchableOpacity>                   
                        <Icon name="menu" size={30} borderRadius={5} onPress={()=>this.props.navigation.openDrawer()}/>
                    </TouchableOpacity>
                    <Text style={styles.TextStyle}>Your in User Profile</Text>
                </View>
                <View style={styles.Header}>

                </View>
                <View style={styles.SliderContainer}>

                </View>
                <View style={styles.IconViewContainer}>
                    <View style={{flex:1, flexDirection:'row'}}> 
                        <View style={styles.Icon1}>

                        </View>
                        <View style={styles.Icon2}>
                            
                        </View>
                        <View style={styles.Icon3}>
                            
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={styles.Icon1}>

                        </View>
                        <View style={styles.Icon2}>
                            
                        </View>
                        <View style={styles.Icon3}>
                            
                        </View>
                    </View>
                        
                </View>
                <View style={styles.FooterContainer}>
                    <Text style={styles.TextStyle}>Your in User Profile</Text>        
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
    TextStyle:{
        color:'red',
    },
    Header:{
        backgroundColor:'black'

    },
    SliderContainer:{
        flex:2,
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
        
        backgroundColor:'blue'

    },
    Icon2:{
        flex:1,
        backgroundColor:'black',
        margin:8,
        height:50,
        width:50,
    },
    Icon3:{
        flex:1,
        backgroundColor:'yellow',
        margin:8,
        height:50,
        width:50,

    },
    Icon4:{
        flex:1,
        backgroundColor:'green',
        margin:8,
        height:50,
        width:50,

    },
    FooterContainer:{
        flex:1,
        backgroundColor:'black'
    }
});

