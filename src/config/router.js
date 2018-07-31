import { Navigation } from 'react-native-navigation'
import Provider from './provider'
import Welcome from '../screen/Welcome'

export default () => {
  Navigation.registerComponent('example.Welcome', () => Provider(Welcome))
}

export const beforLogin = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'example.Welcome',
      title: 'Welcome',
    },
  })
}