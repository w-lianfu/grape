import React from 'react'
import { TabNavigator } from 'react-navigation'
import { MaterialIcons, Entypo } from 'react-native-vector-icons'

import Root from './root'
import Discover from '../discover'
import Publish from '../publish'
import Chat from '../chat'
import My from '../my'

import Color from '../../common/color'

let HomeNav = TabNavigator({
  Root: {
    screen: Root,
    navigationOptions: {
      tabBarLabel: '主页',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name='home' size={26} color={tintColor} />
      )
    }
  },
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name='explore' size={26} color={tintColor} />
      )
    }
  },
  Publish: {
    screen: Publish,
    navigationOptions: {
      tabBarLabel: '发布',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name='add-circle' size={27} color={tintColor} />
      )
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      tabBarLabel: '聊天',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name='chat-bubble' size={23} color={tintColor} />
      )
    }
  },
  My: {
    screen: My,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name='person' size={26} color={tintColor} />
      )
    }
  }
}, {
  tabBarOptions: {
    style: {
      backgroundColor: Color.whiteTheme,
      height: 50
    },
    tabStyle: {
      paddingBottom: 2
    },
    labelStyle: {
      fontSize: 12,
      paddingTop: 1
    },
    activeTintColor: Color.purpleTheme,
    inactiveTintColor: Color.c999
  }
})

export default HomeNav