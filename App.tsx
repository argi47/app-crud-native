import React from 'react'
import {
  Text,
  View
} from 'react-native'

import { classes } from './AppClasses'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import Barra from './src/components/ui/barra/Barra.tsx'
import Inicio from './src/views/inicio/Inicio.tsx'
import NuevoCliente from './src/views/nuevo-cliente/NuevoCliente.tsx'
import DetallesCliente from './src/views/detalles-cliente/DetallesCliente.tsx'

const Stack = createNativeStackNavigator()

const theme: any = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2',
    ascent: '#0655BF'
  }
}

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Inicio'
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary
            },
            headerTintColor: theme.colors.surface,
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTitleAlign: 'center'
          }}
        >
          <Stack.Screen
            name='Inicio'
            component={Inicio}
            options={({ navigation, route }) => ({
              headerLeft: (props: any) => (
                <Barra {...props}
                  navigation={navigation}
                  route={route}
                  theme={theme}
                />
              )
            })}
          />

          <Stack.Screen
            name='NuevoCliente'
            component={NuevoCliente}
            options={{
              title: 'Nuevo Cliente'
            }}
          />

          <Stack.Screen
            name='DetallesCliente'
            component={DetallesCliente}
            options={{
              title: 'Detalles Cliente'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App