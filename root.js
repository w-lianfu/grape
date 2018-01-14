import React, { Component } from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from './container/component/home'

let RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    path: '/'
  }
}, {
  headerMode: 'none'
})

export default RootNavigator
