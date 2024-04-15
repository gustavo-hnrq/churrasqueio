import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import api from "../service/api";
import NumericInput from "react-native-numeric-input";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icon2 from "@expo/vector-icons/MaterialIcons";

export default function TelaConvidados({ navigation }) {



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
              id = "qtdHomens"
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
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
              id = "qtdMulheres"
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
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
              id = "qtdCriancas"
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
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
            <NumericInput
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
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
      </View>

      <View className="items-center justify-center ">
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigation.navigate("TelaCarnes")}
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
