//import libraries
import React, {Component} from 'react';
import {Text,View, TouchableOpacity} from 'react-native';

//prop

const Button = ({ onPress }) =>{

    const {buttonStyle, textStyle} = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>Click </Text>
        </TouchableOpacity>
    );

};

const styles= {
    buttonStyle:{
        flex: 1,
        alignSelf:'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#007aff',
        marginLeft:5,
        marginRight:5,
        paddingTop:10,
        paddingBottom:10
    },
    textStyle:{
        alignSelf: 'center',
        color:'#007aff',
        fontSize: 16,
        fontWeight:'600'
    }

};

export default Button;