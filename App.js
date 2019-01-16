import React, {Component} from 'react';
//import Component from 'react-native';
import Login from './Login.js';
import userProfile from './screens/userProfile.js';
import contactSuperVisor from './component/contactSuperVisor';
import focusOfTime from './component/focusOfTime';
import lastWorkView from './component/lastWorkView';
import messageToTeam from './component/messageToTeam';
import punchIn from './component/punchIn';

import {
   createSwitchNavigator,
   createAppContainer,
   createDrawerNavigator,
   //createBottomTabNavigator,
   createStackNavigator
 } from 'react-navigation';


class App extends Component{
   render(){
   return (
      <AppContainer/>
   );
   }
   
}
export default App;

/*const AppNavigator = createStackNavigator({
   
   userProfile:{
     screen: userProfile,
   },
 
   Login:{
      screen:Login,
      },
   contactSuperVisor:{
         screen:contactSuperVisor,
   },
   focusOfTime:{
         screen:focusOfTime,
   },
   lastWorkView:{
      screen:lastWorkView,
   },
   messageToTeam:{
      screen:messageToTeam,
   },
   punchIn:{
      screen:punchIn,
   }
   

},

   {
      initialRouteName:'Login',
   }
   
 );*/

const MyDrawerNavigator = createDrawerNavigator({
   
   /*appStackNavigator:{
      screen: AppNavigator,
   },*/
   userProfile:{
      screen: userProfile,
      
      },
    
  
    /*Login:{
       screen:Login,
       }, */
    contactSuperVisor:{
          screen:contactSuperVisor,
    },
    focusOfTime:{
          screen:focusOfTime,
    },
    lastWorkView:{
       screen:lastWorkView,
    },
    messageToTeam:{
       screen:messageToTeam,
    },
    punchIn:{
       screen:punchIn,
    }
 
   }
   

);


 const AppSwitchNavigator = createSwitchNavigator({
   Login: { screen: Login },
   MyDrawerNavigator: { screen: MyDrawerNavigator },
   //navigationOptions: {drawerLockedMode:'locked-closed'}
 },
 );

//const MyApp = createAppContainer(MyDrawerNavigator);

const AppContainer= createAppContainer(AppSwitchNavigator);

 //export default createAppContainer(AppNavigator);