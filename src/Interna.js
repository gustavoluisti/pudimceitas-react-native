/*import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'

import Inicial from './Inicial'
import Categorias from './Categorias'

const Navegador = TabNavigator({
    Inicial:{
        screen:Inicial 
    },
    Categorias:{
        screen:Categorias
    }

}, {
    tabBarPosition:'bottom',
    tabBarOptions:{
        showIcon:true
    }
})

export default Navegador*/

console.ignoredYellowBox = [
	'Setting a timer'
];

import React, { Component } from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import firebase from './firebaseConnection';

import ReceitaItem from './ReceitaItem'
import Receita from './Receita'

export default class Inicial extends Component{

    static navigationOptions = {
        header:null,
        tabBarLabel:'Home',
        tabBarIcon:({focused, tintColor}) => {
            if(focused) {
                return(
                    <Image source={require('./assets/images/home_azul.png')} style={styles.icone} />
                );
            } else {
                return (
                    <Image source={require('./assets/images/home_preto.png')} style={styles.icone} />
                );
            }
        }
    }
    
    constructor(props) {
        super(props)
        this.state = {
            listaReceitas:[]
        }

        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {

            } else {
                this.props.navigation.navigate('Home');
            }
        })

        firebase.database().ref('receitas').once('value', (snapshot)=>{
            let state = this.state;
            state.listaReceitas = [];
    
          snapshot.forEach((childItem) =>{
              state.listaReceitas.push({
                  key:childItem.key,
                  nome:childItem.val().nome,
                  descricao:childItem.val().descricao,
                  link:childItem.val().link,
                  rendimentos:childItem.val().rendimentos,
                  ingredientes:childItem.val().ingredientes,
                  modo:childItem.val().modo,
                  preparo:childItem.val().preparo,
                  por:childItem.val().por,
              })
            })
              this.setState(state)
          })

          this.clicou = this.clicou.bind(this)
    }

    clicou(item) {
        this.props.navigation.navigate('Receita', item)
    }

    render() {
		return (
			<View style={styles.container}>
			
                <FlatList
                    data={this.state.listaReceitas}
                    renderItem={({item})=><ReceitaItem data={item} onPress={()=>{
                        this.clicou(item);
                    }} /> }
				/>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26,
    },
    container:{
        flex:1,
        marginTop:20,
        marginLeft:5,
        marginRight:5,
    }

})