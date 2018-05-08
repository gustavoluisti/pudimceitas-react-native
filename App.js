import React, { Component } from 'react'
import {StackNavigator} from 'react-navigation'

import Home from './src/Home'
import Cadastro from './src/Cadastro'
import Interna from './src/Interna'
import Receita from './src/Receita'
import Preload from './src/Preload'


const Navegador = StackNavigator({
  Preload:{
    screen:Preload
  },
  Home:{
    screen:Home 
  },
  Cadastro:{
    screen:Cadastro
  },
  Interna:{
    screen:Interna 
  },
  Receita:{
    screen:Receita
  }
  
})

export default Navegador