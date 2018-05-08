import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import firebase from './firebaseConnection';

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            emailInput:'',
            senhaInput:''
        }

        this.cadastrar = this.cadastrar.bind(this);
        this.entrar = this.entrar.bind(this);

        firebase.auth().signOut();
    }

    cadastrar() {
        this.props.navigation.navigate('Cadastro');
    }
    entrar(){
      if(this.state.emailInput != '' && this.state.senhaInput != ''){

        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {
                this.props.navigation.navigate('Interna');
            }
        });
        firebase.auth().signInWithEmailAndPassword(
            this.state.emailInput,
            this.state.senhaInput
        ).catch((error)=>{
            alert(error.code);
        })
      }
    }

    async loginWithFacebook() {

        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync
        ('1691586907569176', { permissions: ['public_profile'] })
  
        if (type == 'success') {
  
          const credential = firebase.auth.FacebookAuthProvider.credential(token)

          this.props.navigation.navigate('Interna');
  
          firebase.auth().signInWithCredential(credential).catch((error) => {
            console.log(error)
          })
        }
      }

    static navigationOptions = {
        header:null
    }


    render() {
        return(
          
            <Container style={styles.container}>
            
            <View style={styles.containerImage}>
              <Image source={require('../assets/images/icon.png')} style={styles.imgLogo} />
              <Text style={styles.titulo}>Pudim Ceitas</Text>
              <Text style={styles.desc} >O seu aplicativo de receitas</Text>
            </View>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input 
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={(emailInput)=>this.setState({emailInput})}
                />
              </Item>
  
              <Item floatingLabel>
                <Label>Senha</Label>
                <Input 
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={(senhaInput)=>this.setState({senhaInput})}
                />
              </Item>
              
            </Form>
            <Button style={styles.btn}
                full
                rounded
                danger 
                onPress={this.entrar}
              >
              <Text style={styles.txtCriar}>Login</Text>
              </Button>
  
              <Button style={styles.btn}
                full
                rounded
                primary 
                onPress={this.cadastrar}
              >
              <Text style={styles.txtCriar}>Criar conta</Text>
              </Button>
  
              <Button style={styles.btn}
                full
                rounded
                primary
                onPress={() => this.loginWithFacebook()}
              >
              <Text style={styles.txtCriar}>Facebook Login</Text>
              </Button>
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
        padding:20,
        backgroundColor:'#FFF'
      },
      btn:{
        marginTop:10,
      },
      txtCriar:{
        color:"#FFF",
      },
      titulo:{
        fontSize:35,
        fontWeight:'bold',
        color:'#FFF'
      } ,
      titulo:{
        fontSize:25,
        fontWeight:'bold',
        color:'#000'
      },
      imgLogo:{
          height:100,
          width:100,
      },
      containerImage:{
        justifyContent:'center',
        alignItems:'center',
      },
      desc:{
          fontSize:20,
          color:'#000'
      }

})