import React, {Component} from 'react';
//import Component from 'react-native';
import Login from './Login.js';
import userProfile from './screens/userProfile.js';
import { createStackNavigator, 
   createAppContainer 
 } from "react-navigation";


class App extends Component{
   render(){
   return (
      <AppContainer/>
   );
   }
   
}

const AppNavigator = createStackNavigator({
   
   userProfile:{
     screen: userProfile,
   },
 
   Login:{
      screen:Login,
      },
   },

   {
      initialRouteName:'Login',
   }
   
 );

const AppContainer= createAppContainer(AppNavigator);
export default App;
 //export default createAppContainer(AppNavigator);