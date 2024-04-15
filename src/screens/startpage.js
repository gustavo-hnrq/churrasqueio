import { Text, View, TouchableOpacity, Image } from "react-native";

export default function StartPage ({navigation}) {
  return(
      <View className='h-full px-5 mt-12 pb-14'>
        <View className='pt-5'>
          <Image style={{width:200, height:70, maxHeight:100, resizeMode:'contain'}}  source={require('../../assets/logo churras.png')} />
        </View>

        <View className='justify-center items-center'>
          <Image style={{width:350, height:400, resizeMode:'contain'}}  source={require('../../assets/Barbecue-amico 1.png')} />
        </View>

        <Text className='font-poppinsBold text-black text-3xl py-2'>Planejar um churrasco perfeito nunca foi tão fácil e eficiente!</Text>
          {/* BOTÃO ADICIONAR */}
        <View className='items-center justify-center'>
           <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => navigation.navigate('TelaInfos')}
            className='bg-[#DC4105] w-full h-12 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center'>
              <Text className='font-poppinsBold text-white text-lg items-center'>Começar</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
}