import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyADvfIUt_5liJ9qbosi_DAhXMQisNdZvI0",
  authDomain: "mercadodev-e4369.firebaseapp.com",
  databaseURL: "https://mercadodev-e4369.firebaseio.com",
  projectId: "mercadodev-e4369",
  storageBucket: "mercadodev-e4369.appspot.com",
  messagingSenderId: "1009979116282"
};
firebase.initializeApp(config);

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

export default class App extends React.Component {
 
    constructor(props){
      super(props)
      this.state = ({
        email:'',
        password:''
      })
    }

    componentDidMount() {

      firebase.auth().onAuthStateChanged((user)=> {
        if (user != null) {
          console.log(user) 
        }
      })
    }

    signUpUser = (email, password) => {

      try {
        if (this.state.password.length < 6) {
          alert("Sua senha deve ter mais de 6 digitos")
          return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
      }
      catch(error) {
        console.log(error.toString())
      }

    }

    loginUser = (email, password) => {
      try {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
          console.log(user)
        })
      }
      catch (error) {
        console.log(error.toString())
      }
    }

    async loginWithFacebook() {

      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync
      ('1691586907569176', { permissions: ['public_profile'] })

      if (type == 'success') {

        const credential = firebase.auth.FacebookAuthProvider.credential(token)

        firebase.auth().signInWithCredential(credential).catch((error) => {
          console.log(error)
        })
      }
    }

  render() {
      return (
        <ImageBackground source={require('./assets/images/pudim.jpg')} style={styles.bg} >
        <Container style={styles.container}>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email)=> this.setState({email})}
              />
            </Item>

            <Item floatingLabel>
              <Label>Senha</Label>
              <Input 
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(password)=> this.setState({password})}
              />
            </Item>
            
          </Form>
          <Button style={styles.btn}
              full
              rounded
              danger 
              onPress={() => this.loginUser(this.state.email, this.state.password)}
            >
            <Text style={styles.txtCriar}>Login</Text>
            </Button>

            <Button style={styles.btn}
              full
              rounded
              primary 
              onPress={() => this.signUpUser(this.state.email, this.state.password)}
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
        </ImageBackground>
      );
    }
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    padding:20
  },
  btn:{
    marginTop:10,
  },
  txtCriar:{
    color:"#FFF",
  },
  bg:{
    width:null,
    flex:1
  }
});
