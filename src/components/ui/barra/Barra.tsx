import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

// import { classes } from './Barra'

const Barra = (props: any) => {
  const { navigation, route, theme } = props

  const handlePress = () => {
    navigation.navigate('NuevoCliente')
  }

  return (
    <Icon.Button
      name='plus-circle'
      onPress={() => handlePress()}
      color='#FFF'
      backgroundColor={theme.colors.primary}
    >
      Cliente
    </Icon.Button>
  )
}

export default Barra