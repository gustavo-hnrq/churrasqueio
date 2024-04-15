// TelaLista.js
import { Text, View, TouchableOpacity, TextInput} from 'react-native';
import api from '../service/api'

export default function TelaInfos({ navigation }) {  
  
  return (
    <View className='h-full px-5 mt-20 pb-24'>
      <Text Text className='text-3xl mb-3 font-poppinsBold'>Informações do Churrasco</Text>

      <View>
        <Text className="text-xl mt-3 font-poppinsBold">Responsável</Text>
        <TextInput
          className="border border-gray-300 mt-3 rounded-md p-3 py-4 text-xl bg-white"
          placeholder="Nome do responsável..."
          maxLength={28}
        />
      </View>
      <View className="mt-3">
        <Text className="text-xl mt-3 font-poppinsBold">Contato</Text>
        <TextInput
          
          className="border border-gray-300 mt-3 rounded-md p-3 py-4 text-xl bg-white"
          placeholder="Contato..."
          maxLength={28}
        />
      </View>
      <View className="mt-3">
        <Text className="text-xl mt-3 font-poppinsBold">Endereço</Text>
        <TextInput
          
          className="border border-gray-300 mt-3 rounded-md p-3 py-4 text-xl bg-white"
          placeholder="Endereço..."
          maxLength={28}
        />
      </View>
      <View className="mt-3">
        <Text className="text-xl mt-3 font-poppinsBold">Horário</Text>
        <TextInput
          
          className="border border-gray-300 mt-3 rounded-md p-3 py-4 text-xl bg-white"
          placeholder="Horário..."
          maxLength={28}
        />
      </View>

      <View className='items-center justify-center mt-4'>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigation.navigate('TelaConvidados')}
          className='bg-[#DC4105] w-full h-14 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center '>
          <Text className='font-poppinsBold text-white text-lg items-center'>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
