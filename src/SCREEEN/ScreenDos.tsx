import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Props } from './ScreenUno'



export const ScreenDos = ({navigation}:Props) => {
  return (
    <View>
    <Text>Bienvenido</Text>

    
    <TouchableOpacity
    onPress={()=> navigation.navigate('ScreenTres')}
    />
    




  </View>
  )
}
