import React, { Component } from 'react';

import { 
   View, Text, StyleSheet 
} from 'react-native';
import { createDrawerNavigator, 
    createAppContainer 
  } from "react-navigation";

  import Login from '../Login.js';

  //import userProfile from './screens/userProfile.js';
//const MyApp = createAppContainer(MyDrawerNavigator);

class userProfile extends Component {
    static navigationOptions = {
        title: 'Dashboard',
        
      };
    
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.TopContainer}>
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
const MyDrawerNavigator = createDrawerNavigator({
   
    
      Login:{
         screen:Login,
         },
      },
   
);

const MyApp = createAppContainer(MyDrawerNavigator);
export default userProfile;


const styles=StyleSheet.create({
    Container:{
        backgroundColor:'#336e7b',
        flex:1,
        

    },
    TopContainer:{
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