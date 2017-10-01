//index ios js for ios code 

//componet is collection -> render 


///import lib to create a component 
import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from './src/components/header';

//create components https://babeljs.io/repl/ 

const App = () =>(
<Header/>
  );


//use Text tag by import destruct 



//render to device 
AppRegistry.registerComponent('albums', () => App);
