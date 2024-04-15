import { Text, View } from 'react-native';
import StartPage from './src/screens/startpage';
import TelaInfos from './src/screens/telaInfos';
import TelaConvidados from './src/screens/TelaConvidados';
import TelaCarnes from './src/screens/TelaCarnes';
import TelaBebidas from './src/screens/TelaBebidas';
import TelaResultado from  './src/screens/TelaResultado';
// BIBLIOTECA DE ROTAS
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins';


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }
  // ROTAS DO APP
  const Rota = createNativeStackNavigator();
  
  return (
    <View className='flex-1 bg-gray-50'>
      <NavigationContainer>
        <Rota.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='StartPage'>
          <Rota.Screen name="StartPage" component={StartPage} />
          <Rota.Screen name="TelaInfos" component={TelaInfos} />
          <Rota.Screen name="TelaConvidados" component={TelaConvidados} />
          <Rota.Screen name="TelaCarnes" component={TelaCarnes} />
          <Rota.Screen name="TelaBebidas" component={TelaBebidas} />
          
          <Rota.Screen name="TelaResultado" component={TelaResultado} />
        </Rota.Navigator>
       </NavigationContainer>
      </View>


  );
}

