import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class Videos extends Component {

    static navigationOptions = {
        tabBarLabel:'Videos',
        tabBarIcon:({focused, tintColor}) => {
            if(focused) {
                return(
                    <Image source={require('./assets/images/sobre_azul.png')} style={styles.icone} />
                );
            } else {
                return (
                    <Image source={require('./assets/images/sobre_preto.png')} style={styles.icone} />
                );
            }
        }
    }

    render() {
        return(
            <View>
                <Text>Teste</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26,
    }
})