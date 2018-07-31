import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
const { width, height} = Dimensions.get('window')

export default class extends React.Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: 'red', width: width, height: 100 }}>
        <Image style={{ flex: 1 }} source={{ uri: 'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg' }} />
        </View>
      </View>
    )
  }
}