import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import firebase from './firebaseConnection';

export default class Cadastro extends Component {

    static navigationOptions = {
        title:"Cadastro",
        header:null,
        headerStyle:{
            backgroundColor:'#d8431f'
        }
    }
    constructor(props){
        super(props)
        this.state ={
            emailInput:'',
            senhaInput:''
        }
        this.login = this.login.bind(this);
        this.cadastrar = this.cadastrar.bind(this);

        firebase.auth().signOut();
    }

    login(){
        this.props.navigation.goBack();
    }
    cadastrar(){
        if(this.state.emailInput != '' && this.state.senhaInput != '') {

            firebase.auth().onAuthStateChanged((user)=>{
                if(user) {

                    this.props.navigation.navigate('Interna');
                }
            });
            firebase.auth().createUserWithEmailAndPassword(
                this.state.emailInput,
                this.state.senhaInput
            ).catch((error)=>{
                alert(error.code);
            })

        }
    }

   

    render() {
        return(
            <ImageBackground source={require('./assets/images/pudim3.jpg')} style={styles.bg} >
                <Container style={styles.container}>
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
                        <Button 
                            full
                            rounded
                            primary 
                            style={styles.btn}
                            onPress={this.cadastrar}
                            >
                            <Text style={styles.btnTxt}>Cadastrar</Text>
                        </Button>
                        <Button 
                            full
                            rounded
                            danger 
                            style={styles.btn}
                            onPress={this.login}
                            >
                            <Text style={styles.btnTxt}>Login</Text>
                        </Button>
                </Container>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
        width:null,
    },
    container:{
        flex:1,
        justifyContent:'center',
        padding:20,
    },
    btn:{
        marginTop:10,
    },
    btnTxt:{
        color:'#fff'
    }
})