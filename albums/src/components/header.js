

//import libraries
import React from 'react';
import {Text,View} from 'react-native';
//make components

const Header = ()=>{
    const {textStyle, viewStyle} = styles;
return (

    <View style={viewStyle}>
        <Text style={textStyle}> eAlbums!</Text>
    </View>

);

};

const styles ={
    viewStyle:{
        backgroundColor:'#F80000'
    },
 
    textStyle: {
        fontSize: 50
    } //text

};


//make components available to other parts of the app
export default Header;

