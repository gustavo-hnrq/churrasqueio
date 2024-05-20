import { Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import calculo from "../util/calculos";


export default function TelaResultado({ route, navigation }) {
    const [dados, setDados] = useState(route.params);
    const { info, convidados, carnes, bebidas } = route.params;
    const { homens, mulheres, criancas } = convidados;
    let valorTotalCarne = 0
    let valorTotalBebida = 0

    console.log(convidados)
    // função para calcular o valor da carne
    function calculosDeConsumoCarne(carne) {
        let valor = 0
        switch (carne) {
            case "Picanha":
                valor += calculo.calcularPicanha(homens, mulheres, criancas);
                break
            case "Maminha":
                valor += calculo.calcularMaminha(homens, mulheres, criancas);
                break
            case "Cupim":
                valor += calculo.calcularCupim(homens, mulheres, criancas);
                break
            case "Contrafilé":
                valor += calculo.calcularContra(homens, mulheres, criancas);
                break
            case "Paleta":
                valor += calculo.calcularPaleta(homens, mulheres, criancas);
                break
            case "Filé Mignon":
                valor += calculo.calcularFile(homens, mulheres, criancas);
                break
            case "Linguiça":
                valor += calculo.calcularLinguica(homens, mulheres, criancas);
                break
            case "Coxa":
                valor += calculo.calcularCoxa(homens, mulheres, criancas);
                break
            case "Coração":
                valor += calculo.calcularCoracao(homens, mulheres, criancas);
                break
            case "Asa":
                valor += calculo.calcularAsa(homens, mulheres, criancas);
                break

        }

        valorTotalCarne += valor;
        return valor.toFixed(2)
    }
    // função para calcular o valor da bebida
    function calculosDeConsumoBebida(bebida) {
        let valor = 0
        switch (bebida) {
            case "Água":
                valor += calculo.calcularAgua(homens, mulheres, criancas);
                break
            case "Suco":
                valor += calculo.calcularSuco(homens, mulheres, criancas);
                break
            case "Cerveja":
                valor += calculo.calcularCerveja(homens, mulheres);
                break
            case "Refrigerante":
                valor += calculo.calcularRefri(homens, mulheres, criancas);
                break


        }
        valorTotalBebida += valor;
        return valor.toFixed(2)
    }

    return (
        <ScrollView className='h-full px-5 mt-16'>
            <View>
                <Text className='text-3xl mt-5 font-poppinsBold'>Resultado</Text>
                <Text className='text-lg mt-3 font-poppinsMedium text-gray-400'>Aqui está a organização para o seu churrasco</Text>
            </View>
            {/* Informações da Organização */}
            <Text className="text-xl mt-5 font-poppinsBold ">Informações do Churrasco</Text>
            <View className="rounded-lg border-2 border-gray-300 p-3 my-5">  
                <View className="flex flex-row justify-between  "><Text className="text-lg font-semibold ">Responsável:</Text><Text className="text-lg font-semibold text-[#AFAFAF] text-left">{dados.info.responsavel}</Text></View>
                <View className="flex my-2 flex-row justify-between"><Text className="text-lg font-semibold">Contato:</Text><Text className="text-lg font-semibold text-[#AFAFAF]">{dados.info.contato}</Text></View>
                <View className="flex flex-row justify-between"><Text className="text-lg font-semibold">Endereço:</Text><Text className="text-lg font-semibold text-[#AFAFAF]">{dados.info.endereco}</Text></View>
                <View className="flex mt-2 flex-row justify-between"><Text className="text-lg font-semibold">horário:</Text><Text className="text-lg font-semibold text-[#AFAFAF]">{dados.info.horario}</Text></View>
            </View>

            {/* Convidados */}
            <Text className="text-xl font-poppinsBold">Convidados</Text>

            <View className="flex flex-row justify-between rounded-lg border-2 border-gray-300 p-3 my-5">
                <Text className="text-lg font-semibold ">Total:</Text>
                <Text className="text-lg font-semibold text-[#AFAFAF]">{dados.convidados.total}</Text>
            </View>
            {/* Calculos */}
            <Text className="text-xl font-poppinsBold">Total de Quantidades</Text>

            <View className="my-5">
                <Text className="text-lg font-poppinsBold text-[#e1601f]">Carnes</Text>
                {carnes.map((carne, index) => (
                    <View key={index}  className="flex flex-row justify-between rounded-lg border-2 border-gray-300 p-3 my-1">
                        <Text className="text-lg font-semibold">{carne}</Text>
                        <Text className="text-lg font-semibold text-[#AFAFAF]">R$ {calculosDeConsumoCarne(carne)}</Text>
                    </View>
                ))}
                <View className="flex flex-row justify-between rounded-lg border-2 border-gray-300 p-3 mt-1 mb-4">
                    <Text className="text-lg font-semibold ">Valor Total</Text>
                    <Text className="text-lg font-semibold text-[#AFAFAF]">R$ {valorTotalCarne}</Text>
                </View>
                {/* Bebidas */}
                <Text className="text-lg font-poppinsBold text-[#e1601f]">Bebidas</Text>

                {bebidas.map((bebida, index) => (
                    <View key={index}  className="flex flex-row justify-between rounded-lg border-2 border-gray-300 p-3 my-1">
                        <Text className="text-lg font-semibold">{bebida}</Text>
                        <Text className="text-lg font-semibold text-[#AFAFAF]">R$ {calculosDeConsumoBebida(bebida)}</Text>
                    </View>
                ))}
                <View className="flex flex-row justify-between rounded-lg border-2 border-gray-300 p-3 mt-1 mb-4">
                    <Text className="text-lg font-semibold ">Valor Total</Text>
                    <Text className="text-lg font-semibold text-[#AFAFAF]">R$ {valorTotalBebida}</Text>
                </View>

                <View className="flex flex-row justify-between rounded-lg border-2 border-gray-300 p-3 mt-1 mb-4">
                    <Text className="text-lg font-semibold ">Valor Total de Consumo</Text>
                    <Text className="text-lg font-semibold text-[#e1601f]">R$ {valorTotalCarne + valorTotalBebida}</Text>
                </View>
            </View>

        </ScrollView>
    )
};