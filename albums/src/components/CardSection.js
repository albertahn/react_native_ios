//import libraries
import React, {Component} from 'react';
import {Text,View, ScrollView} from 'react-native';

//prop

const CardSection = (props) =>{
    return (
        <View style={styles.containerStyle}>
           {props.children}
        </View>
    );

};

const styles= {
    containerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:1,
        padding: 5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    }

};

export default CardSection;