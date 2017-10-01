
//import libraries
import React, {Component} from 'react';
import {Text,View, ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';
//make components
//import axios from 'axios';

class AlbumList extends Component{

    state ={albums:[]};

    componentWillMount(){
            //network request
            console.log('componentWillMount');
            fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) =>response.json())
            .then((responseData) => this.setState({albums: responseData}));
            
        }//componet

        renderAlbums(){

            return this.state.albums.map(
                album =><AlbumDetail key={album.title} album = {album} />
               // album => <Text> {album.title} </Text>
            );
        }//render alb

    render(){
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );

    }//render

}//class


export default AlbumList;