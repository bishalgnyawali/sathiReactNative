import React, {Component} from 'react';
import {
    Button,
} from 'react-native';

const ButtonIcon=(props)=>{
    <TouchableOpacity title={props.title}>                   
        {props.children}                    
    </TouchableOpacity>
}
export default ButtonIcon;