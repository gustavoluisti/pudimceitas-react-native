import React, { Component } from 'react'
import { Text, StyleSheet, Image } from 'react-native'

import { Container } from 'native-base';
import firebase from './firebaseConnection';

export default class Preload extends Component {
    constructor(props){
        super(props)
        this.state = {}
        
        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {
                this.props.navigation.navigate('Interna')
            } else {
                this.props.navigation.navigate('Home')
            }
        })
    }
    static navigationOptions = {
        header:null
    }
    render() {
        return(
            
            <Container style={styles.container}>
            
            <Image source={require('../assets/images/icon.png')} style={styles.imgLogo} />
            <Text style={styles.titulo}>Pudim Ceitas</Text>
            <Text style={styles.desc} >Seu aplicativo de receitas</Text>
           
          </Container>
           
        )
    }
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
        width:null
    },
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor:'#FFF'
      },
      titulo:{
        fontSize:45,
        fontWeight:'bold',
        color:'#000'
      },
      imgLogo:{
          height:150,
          width:150,
      },
      desc:{
          fontSize:20,
          color:'#000'
      }
})