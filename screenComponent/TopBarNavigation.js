import React,{Component} from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
    View,TouchableOpacity,StyleSheet
} from 'react-native';

class TopBarNavigation extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.TopContainer}>
                <TouchableOpacity>                   
                    <Icon name="menu" size={30} borderRadius={5} onPress={()=>this.props.navigate.openDrawer()}/>
                </TouchableOpacity>    
            </View>
        );
        }   
}
export default TopBarNavigation;

const styles=StyleSheet.create({
    TopContainer:{
        marginTop: 30,
        backgroundColor:'white',
        height:30,
        

    }
})