import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'


export interface Props extends StackScreenProps<any, any> { }
export const ScreenUno = ({ navigation }: Props) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ScreenUno')}>
      <text>Bienvenido</text>
    </TouchableOpacity>
  )
}

