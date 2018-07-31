import { Navigation } from 'react-native-navigation'
import Welcome from '../screen/Welcome'

export default () => {
  Navigation.registerComponent('example.Welcome', () => Welcome);
}

export const beforLogin = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'example.Welcome',
      title: 'Welcome',
    },
  })
}