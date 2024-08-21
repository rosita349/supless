import { createStackNavigator } from '@react-navigation/stack';
import { ScreenUno } from '../SCREEEN/ScreenUno';
import { ScreenDos } from '../SCREEEN/ScreenDos';
import { ScreenTres } from '../SCREEEN/ScreenTres';

const Stack = createStackNavigator();


export const StackNavigeitor=() =>{
  return (
  
  
    <Stack.Navigator 
    initialRouteName='ScreenUno'
    >
      <Stack.Screen name="ScreenOne" component={ScreenUno}/>
      <Stack.Screen name="ScreenDos" component={ScreenDos} />
      <Stack.Screen name="ScreenTres" component={ScreenTres} />
    </Stack.Navigator>
  );
}