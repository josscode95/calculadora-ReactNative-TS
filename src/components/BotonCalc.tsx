import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface IBotonCalc{
  texto:string;
  color?:string;
  ancho?:boolean;
  action:(numeroTexto:string) => void;
}

export const BotonCalc = ({texto, color = '#2D2D2D', ancho = false, action}:IBotonCalc) => {
  return (
    <TouchableOpacity
      onPress={() => action(texto)}
    >
       <View 
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80
        }}
        >
        <Text style={{
          ...styles.botonTexto,
          color: (color === '#9B9B9B') ? 'black' : 'white'
        }}>{texto}</Text>
      </View>
    </TouchableOpacity>
   
  )
}
