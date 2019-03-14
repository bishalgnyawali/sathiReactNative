import React, { Component } from 'react';
import { 
   View, 
   Platform,
   Text, 
   //Button, 
   TextInput, 
   KeyboardAvoidingView,
   StyleSheet,
   TouchableOpacity
   } from 'react-native';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';//import { ScrollView } from 'react-native-gesture-handler';

class Login extends Component {
   
static navigationOptions = {
      title: 'User Login',//gives title name user login if header is not null
      header: null,//removes header bar
};

   _scrollToInput (reactNode: any) {
      // Add a 'scroll' ref to your ScrollView
      this.scroll.props.scrollToFocusedInput(reactNode)
   }
   render() {
      return (
         <KeyboardAvoidingView
         behavior= {(Platform.OS === 'ios')? "padding" : null}//behavior="padding" 
         style={styles.container}
         //keyboardVerticalOffset={Constants.statusBarHeight}
         enabled
         >
            <View style={{flex:1}}>        
               <View style = {styles.logoContainer}>
                  <Text style={{color:'red'}}>Logo Goes Here</Text>
               </View>

               <View style = {styles.inputContainer}>
                  <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Employee ID"
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  autoCorrect={false}
                  //onChangeText = {this.handleEmail}
                  />

               <TextInput style = {styles.input}
                  //onKeyboardWillShow=()=>{this.scroll.props.scrollToPosition(0,0)}

                  underlineColorAndroid = "transparent"
                  placeholder = "Password"
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  autoCorrect={false}
                  //onChangeText = {this.handlePassword}
               />
               
               <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {() => 
                              {
                                 //createAppContainer(AppNavigator);
                                 this.props.navigation.navigate('userProfile')
                              }
                           }>
                  <Text style={{padding:10,textAlign:'center', margin:2, color:'red'}}>Log In</Text>
               </TouchableOpacity>
                  
            </View>
         
            <View style={{flex:1}}>

            </View>    
         </View>
      </KeyboardAvoidingView>

      );
   }
}

// 
export default Login;


const styles = StyleSheet.create({
   container: {
      paddingTop: 2,
      flex:1,
      //alignItems:'center',
      backgroundColor:'#004c8c',
      margin:0,
      borderRadius:20,
   },
   logoContainer:{
      flex:2,
      justifyContent:'center',
      alignItems: 'center',
     color:'white',
     alignSelf:'center',
     backgroundColor:'#354766',
     borderRadius:25,
   },

   inputContainer:{
      flex:2,
      margin:20,
      justifyContent:'center',
      paddingTop:16,
      backgroundColor:'white',
      //position:'absolute',
      paddingRight: 16,
      paddingBottom: 8,
      paddingLeft: 16,
      borderRadius: 25,
      
      },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      borderRadius:25
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 16,
      borderRadius:25,
      height: 40,
      borderWidth:8,
      
      
   },
   submitButtonText:{
      color: 'black',
      alignSelf:'center',
      alignItems:'center',
      borderRadius: 25,
      width:260,
      height:60,
      //backgroundColor:'white',
      borderWidth:8,
      //text:'bold',
      //aspectRatio:'2'
   }
});