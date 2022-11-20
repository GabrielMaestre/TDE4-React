import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import ResultUnifeb from './ResultUnifeb';
import ResultLocal from './ResultLocal';


import axios from 'axios';
const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/current';


export default function Form() {

    // const []= useState(null)

    function clickLocal() {
        Alert.alert(
            "Sua GeoLocalização (Atual)",
            `Sem tempo pra aprender e mecher com React Native, mas usaria isso: https://reactnative.dev/docs/0.63/geolocation \n\n E depois de pedir permissão pegaria sua LOC (atual). Passaria como parametro Igual nas OptionsBarretos, e pronto teria sua localização e tratamente de mensagem seria tipo: ['data]['variavel'] (city_name) por exemplo.\n\n Outra coisa é que esse tipo de API tem limite de uso (10) ao dia, e não consigo ficar programando todo dia. F, desculpa Salvinha.`,
            [
              { text: "OK" }
            ]
          );
    }

    function clickFeb() {
        console.log('clicou feb');
        
        const optionsBarretos = {
            method: 'GET',
            url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
            params: {lon: '-48.5689', lat: '-20.5592'},
            headers: {
              'X-RapidAPI-Key': 'f4878f5179msha93de617ab187dbp1e1e5djsn8ab4984491aa',
              'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            }
          };
          
          axios.request(optionsBarretos).then(async function (response) {

              const dadosApi = await response.data;
              Alert.alert(
                "UNIFEB (Barretos)",
                `Dados: ${JSON.stringify(dadosApi['data'],null,1)}`,
                [
                  { text: "OK" }
                ]
              );

          }).catch(function (error) {

              console.error(error);

          });
        

        // Alert.alert(
        //     "UNIFEB (Barretos)",
        //     "My Alert Msg",
        //     [
        //       { text: "OK", onPress: () => console.log("OK Pressed") }
        //     ]
        //   );

    }

    return(
        <View>
            <View>
                {/* <Text>CEP</Text>
                <TextInput></TextInput>

                <Text>CEP</Text>
                <TextInput></TextInput>

                <Text>CEP</Text>
                <TextInput></TextInput> */}
                {/* <Button title="Feb"/> */}
            </View>
            <Button title="Metereologia Unifeb" onPress={clickFeb} />
            {/* <ResultMetUnifeb msgResultUnifeb={msgFeb} /> */}
            <View>

            </View>
            <Button title="Metereologia Local" onPress={clickLocal}/>
            {/* <ResultMetLocal/> */}
            <View>
            
            </View>
        </View>
    );
}