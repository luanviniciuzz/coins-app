import React, { useState, useEffect, useRef } from 'react';
import { Text, View, FlatList } from 'react-native';
import Container from '../../components/Container';



const HomePage = () => {
  const ws = useRef<WebSocket | undefined>(undefined);
  const [price, setPrice] = useState<number>(0.0)
  const [valor, setValor] = useState<number>(0.0)
  const convert = (eth:number) =>{
    //1 Ethereum equals R$14,890.58 Real
    let formula = (14890.58 * eth)

    setValor(formula)
  }
  ///DESCOMENTA WEBSOCKET
  // useEffect(() => {
  //   const ws = new WebSocket('wss://nbstream.binance.com/eoptions/ws/ETHUSDT@index');

  //   ws.onopen = () => {
  //     console.log('WebSocket connection established.');
  //   };

  //   ws.onmessage = (event) => {
  //     let result = JSON.parse(event.data)
  //     setPrice(result.p)
  //     convert(result.p)
  //     console.log('Received message:', result);
  //     // Aqui você pode manipular a mensagem recebida
  //   };

  //   ws.onclose = () => {
  //     console.log('WebSocket connection closed.');
  //   };

  //   // Cleanup function para fechar a conexão WebSocket
  //   return () => {
  //     ws.close();
  //   };
  // }, []);

  return (
    <Container>

      <Text style={{ color: 'white' }}>{price}</Text>
      {/* <Text style={{ color: 'white' }}>{valor}</Text> */}

      
    </Container>
  );
};

export default HomePage;
