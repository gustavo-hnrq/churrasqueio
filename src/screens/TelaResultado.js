import { Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import api from '../service/api';


export default function TelaResultado({navigation}) {

    return(
        <View className='h-full px-5 mt-16'>
            <View>
                <Text className='text-3xl mt-5 font-poppinsBold'>Resultado</Text>
                <Text className='text-lg mt-3 font-poppinsMedium text-gray-400'>Aqui está a organização para o seu churrasco</Text>
            </View>

        </View>
    );
}