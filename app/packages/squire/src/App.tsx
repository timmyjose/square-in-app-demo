import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home'
import PaymentsDemo from './components/PaymentsDemo'

export type RootStackParamsList = {
  Home: undefined
  PaymentsDemo: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='PaymentsDemo' component={PaymentsDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
