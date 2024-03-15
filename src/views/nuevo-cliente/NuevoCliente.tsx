import React from 'react'
import { View } from 'react-native'
import { TextInput, Headline, Button } from 'react-native-paper'
import { globalStyles } from '../../styles/Global'
import { classes } from './NuevoCliente'

const NuevoCliente = () => {

  const leerNombre = () => {
    console.log('...escribiendo')
  }

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir nuevo cliente</Headline>

      <TextInput
        label='Nombre'
        placeholder='Ej: Juan'
        onChangeText={() => leerNombre()}
        style={classes.input}
      />

      <TextInput
        label='Teléfono'
        placeholder='Ej: 666666666'
        onChangeText={() => leerNombre()}
        style={classes.input}
      />

      <TextInput
        label='Correo'
        placeholder='Ej: correo@electronico.com'
        onChangeText={() => leerNombre()}
        style={classes.input}
      />

      <TextInput
        label='Empresa'
        placeholder='Nombre de la empresa'
        onChangeText={() => leerNombre()}
        style={classes.input}
      />
    </View>
  )
}

export default NuevoCliente