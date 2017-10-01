

//import libraries
import React from 'react';
import {Text} from 'react-native';
//make components

const Header = ()=>{
    const {textStyle} = styles;
    return <Text style={textStyle}> fuck all of my Albums!</Text>;

};

const styles ={
 
    textStyle:{
        fontSize: 40

    } //text

};


//make components available to other parts of the app
export default Header;

