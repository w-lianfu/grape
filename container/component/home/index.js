import React from 'react'
import { TabNavigator } from 'react-navigation'

import Root from './root'
import Discover from '../discover'
import Publish from '../publish'
import Chat from '../chat'
import My from '../my'

let HomeNav = TabNavigator({
  Root: {
    screen: Root,
    Title: 'Grape'
  },
  Discover: {
    screen: Discover,
    Title: '发现'
  },
  Publish: {
    screen: Publish,
    title: '发布'
  },
  Chat: {
    screen: Chat,
    title: '聊天'
  },
  My: {
    screen: My,
    title: '我的'
  }
})

export default HomeNav