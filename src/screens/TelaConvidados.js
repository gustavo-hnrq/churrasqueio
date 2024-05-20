import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import NumericInput from "react-native-numeric-input";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icon2 from "@expo/vector-icons/MaterialIcons";

export default function TelaConvidados({ route, navigation }) {
  const [mulheres, setMulheres] = useState(0);
  const [homens, setHomens] = useState(0);
  const [criancas, setCriancas] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const convidadosTotal = mulheres + homens + criancas;
    // console.log(navigation)
    setTotal(convidadosTotal);
  }, [mulheres, homens, criancas])
  function empacotar() {
    const { info } = route.params;
    const convidados = { mulheres, homens, criancas, total };

    navigation.navigate("TelaCarnes", { info, convidados });
  }
  return (
    <View className="h-full px-5 mt-20 pb-14">
      <View>
        <Text className="text-3xl mt-5 font-poppinsBold">Vamos começar?</Text>
        <Text className="text-lg mt-3 font-poppinsMedium text-gray-400">
          Digite a quantidade de convidados
        </Text>
      </View>

      <View className="justify-center items-center">
        <View className="flex flex-row">
          <View className="m-2 rounded-lg border border-gray-400 p-2 w-100">
            <Icon
              name="human-male"
              size={40}
              color="black"
            />
            <Text className="text-lg font-poppinsMedium text-gray-400">
              Homens
            </Text>
            <NumericInput
              value={homens}
              onChange={value => setHomens(value)}
              minValue={0}
              totalWidth={130}
              totalHeight={40}
              iconSize={25}
              step={1}
              valueType="real"
              rounded
              textColor="black"
              iconStyle={{ color: "black" }}
              rightButtonBackgroundColor="#F5F5F5"
              leftButtonBackgroundColor="#F5F5F5"
            />
          </View>
          <View className="m-2 rounded-lg border border-gray-400 p-2 w-100 justify-center">
            <Icon
              name="human-female"
              size={40}
              color="black"
            />
            <Text className="text-lg font-poppinsMedium text-gray-400">
              Mulheres
            </Text>
            <NumericInput
              value={mulheres}
              onChange={value => setMulheres(value)}
              minValue={0}
              totalWidth={130}
              totalHeight={40}
              iconSize={25}
              step={1}
              valueType="real"
              rounded
              textColor="black"
              iconStyle={{ color: "black" }}
              rightButtonBackgroundColor="#F5F5F5"
              leftButtonBackgroundColor="#F5F5F5"
            />
          </View>
        </View>

        <View className="flex flex-row">
          <View className="m-2 rounded-lg border border-gray-400 p-2 w-100 justify-center">
            <Icon
              name="human-child"
              size={40}
              color="black"
            />
            <Text className="text-lg font-poppinsMedium text-gray-400">
              Crianças
            </Text>
            <NumericInput
              value={criancas}
              onChange={value => setCriancas(value)}
              minValue={0}
              totalWidth={130}
              totalHeight={40}
              iconSize={25}
              step={1}
              valueType="real"
              rounded
              textColor="black"
              iconStyle={{ color: "black" }}
              rightButtonBackgroundColor="#F5F5F5"
              leftButtonBackgroundColor="#F5F5F5"
            />
          </View>
          <View className="m-2 rounded-lg border border-gray-400 p-2 w-100 justify-center">
            <Icon2
              name="groups"
              size={40}
              color="black"
            />
            <Text className="text-lg font-poppinsMedium text-gray-400">
              Total
            </Text>
            <TouchableOpacity className="text-center w-[130px] h-[40px]" disabled>
              <Text className="text-center mt-[5px] text-lg">
                {total}
              </Text>
            </TouchableOpacity>
            {/* <NumericInput
              value={total}
              totalWidth={130}
              totalHeight={40}
              iconSize={25}
              step={1}
              valueType="real"
              rounded
              textColor="black"
              iconStyle={{ color: "black" }}
              rightButtonBackgroundColor="#F5F5F5"
              leftButtonBackgroundColor="#F5F5F5"
            /> */}
          </View>
        </View>
      </View>

      <View className="items-center justify-center ">
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => { empacotar()}}
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
