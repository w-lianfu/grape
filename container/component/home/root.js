import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import Home from './home'
import Other from './other'

let Root = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GRAPE',
      headerBackTitle: '返回'
    }
  }
}, {
  tabBarPosition: 'top',
  tabBarOptions: {
    labelStyle: {
      fontSize: 21,
      paddingBottom: 3,
      fontWeight: '500'
    }
  }
})

export default Root
