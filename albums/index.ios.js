//index ios js for ios code 

//componet is collection -> render 


///import lib to create a component 
import React from 'react';
import {Text, AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create components https://babeljs.io/repl/ 

const App = () =>(
      <View>
        <Header headerText={'I am a godo'} />
        <AlbumList/>
       </View>
  );


//use Text tag by import destruct 



//render to device 
AppRegistry.registerComponent('albums', () => App);
