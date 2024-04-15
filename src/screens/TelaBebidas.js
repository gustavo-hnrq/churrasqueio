import Bebidas from "../components/opcoesbebidas";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import api from "../service/api";

export default function TelaBebidas({ navigation }) {
  return (
    <View className="h-full px-5 mt-16">
      <View>
        <Text className="text-3xl mt-5 font-poppinsBold">
          Escolhas as bebidas
        </Text>
        <Text className="text-lg mt-3 font-poppinsMedium text-gray-400">
          Quantas opções desejar
        </Text>
      </View>

      <Bebidas />

      <View className="items-center justify-center">
        <TouchableOpacity
          onPress={() => navigation.navigate("TelaResultado")}
          activeOpacity={0.75}
          className="bg-[#DC4105] w-full h-12 rounded-lg m-5 px-5 py-2.5 mb-5 justify-center items-center"
        >
          <Text className="font-poppinsBold text-white text-lg items-center">
            Avançar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
