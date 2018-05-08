console.ignoredYellowBox = [
    'Setting a timer'
];
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

export default class ReceitaItem extends Component {
    static navigationOptions = {
        header:null,
    }
    
    constructor(props){
        super(props);
        this.state = {}

    }

  
    render() {
        return(
            <TouchableHighlight onPress={this.props.onPress} >
                <View style={styles.area}>
                    <View style={styles.info} >
                        <Text style={styles.nomeReceita} >{this.props.data.nome} </Text>
                    </View>
                    <Image source={{uri:this.props.data.link}} style={styles.imagem} />
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    area:{
        height:310,
        borderBottomWidth:1,
        borderColor:'#fff',
        backgroundColor:'#FFF',
        marginBottom:15,
        backgroundColor:'#B22222'
    },
    imagem:{
            width:null,
            height:270,
        

    },nomeReceita:{
            fontSize:22,
            fontWeight:'bold',
            textAlign:'center',
            color:'#FFF',
            marginTop:10,
    },
    info:{
        marginLeft:5,
        marginRight:5,
        marginBottom:10,
    }
});
