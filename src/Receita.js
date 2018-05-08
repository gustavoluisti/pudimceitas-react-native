import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import { TabNavigator } from 'react-navigation';

export default class Receita extends Component{

    static navigationOptions = {
        header:null,
    }

    constructor(props) {
        super(props)
        this.state = {};

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <ScrollView style={styles.containerMaster}>

                <TouchableHighlight underlayColor="#CCC" onPress={this.goBack} style={styles.backButton} >
                    <Image source={require('./assets/images/back.png')} style={styles.backImage}  />
                </TouchableHighlight>

                    <Image source={{uri:this.props.navigation.state.params.link}} style={styles.receitaImagem} />

            <View  style={styles.container} >
                

                <Text style={styles.nomeReceita} >{this.props.navigation.state.params.nome}</Text>

                <Text style={styles.porReceita}>Por: {this.props.navigation.state.params.por} </Text>

                <View style={styles.porcoesCont}>
                    <Image source={require('./assets/images/porcoes.png')} style={styles.porcoesImg} />
                    <Text style={styles.porcoesNom}>{this.props.navigation.state.params.rendimento}</Text>

                    <Image source={require('./assets/images/relogio.png')} style={styles.porcoesImg} />
                    <Text style={styles.porcoesNom}>{this.props.navigation.state.params.preparo}</Text>
                </View>

                <View style={styles.preparoCont}>

                <Text style={styles.description} >Descrição</Text>
                    <Image source={require('./assets/images/descricao.png')} style={styles.preparoImg} />

                <Text style={styles.descricao}>{this.props.navigation.state.params.descricao} </Text>

               

                <Text style={styles.description}>Ingredientes</Text>
                    <Image source={require('./assets/images/ingredientes.png')} style={styles.preparoImg} /> 

                <Text style={styles.descricao} >{this.props.navigation.state.params.ingredientes}</Text>

              

                    <Text style={styles.description}>Modo de Preparo</Text>
                    <Image source={require('./assets/images/preparo.png')} style={styles.preparoImg} /> 

                <Text style={styles.descricao} key={this.modo} >{this.props.navigation.state.params.modo}</Text>
                </View>
                

            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:10,
        marginRight:10,
    },
    containerMaster:{
        flex:1,
        backgroundColor:'#FFF',
    },
    receitaImagem:{
        flex:1,
        height:250,
        marginTop:-51,
    },
    backButton:{
        height:28,
        width:28,
        zIndex:99,
        marginTop:15
    },
    backImage:{
        height:28,
        width:28,
        marginTop:5
    },
    preparoImg:{
        height:80,
        width:80,
        marginBottom:15,
    },
    preparoCont:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    nomeReceita:{
        fontSize:22,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:15,
    },
    porReceita:{
        fontSize:15,
        marginBottom:12,
        fontWeight:'bold',
    },
    description:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:15,
        marginTop:20,
        color:'#38343a',
    },
    descricao:{
        fontSize:18,
        marginBottom:20,
    },
    porcoesImg:{
        width:40,
        height:40,
        flexDirection:'column',
        marginLeft:5,
        marginRight:5,
    },
    porcoesCont:{
        flex:1,
        height:70,
        backgroundColor:'#DDD',
        flexDirection:'row',
        marginTop:15,
        marginBottom:15,
        marginRight:5,
        marginLeft:5,
    },
    porcoesNom:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:5,
        marginTop:25,

    }
    
});