import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Text,StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import THEME from '../../assets/styles/theme';
import { CandlestickChart, LineChart } from 'react-native-wagmi-charts';
import FormatCoin from '../../utils/FormatCoin';

const HomePage = () => {
  const [price, setPrice] = useState<string>('')
  
  const MAX_POINT = 30
  const [lineData, setLineData] =  useState<any[]>([]);
  const [candleData, setCandleData] = useState<any[]>([]);
  
  async function callWebSocketIndex(){
    const ws = new WebSocket('wss://nbstream.binance.com/eoptions/ws/ETHUSDT@index')
    ws.onopen
    ws.onmessage = (event) => {
      let result = JSON.parse(event.data)
      const formatValue = FormatCoin(result.p)
      setPrice(formatValue)
      const point = {
        timestamp: result.E,
        value: result.p,
      };
      setLineData((prev) => {
        const newData = [...prev, point];
        if (newData.length > 30) {
          return newData.slice(newData.length - MAX_POINT);
        }
        return newData;
      });
    };
    ws.onclose
    return () => {
      ws.close();
    };
  }

  async function callWebSocketKLine(){

    const ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@kline_1d');
    ws.onopen
    ws.onmessage = (event) => {
      let result = JSON.parse(event.data)
      const point = {
        timestamp: result.E,
        open: result.k.o,
        high: result.k.h,
        low: result.k.l,
        close: result.k.c,
      };
      setCandleData((prev) => {
        const newData = [...prev, point];
        if (newData.length > 30) {
          return newData.slice(newData.length - 30);
        }
        return newData;
      });
    };
    ws.onclose
    return () => {
      ws.close();
    };
  }

  useEffect(() => {
    async function index(){
      await callWebSocketIndex()
    }
    index()
  }, []);

  useEffect(() => {
    async function index(){
      await callWebSocketKLine()
    }
    index()
  }, []);

    
   const CANDLE_SIZE = 15;
   const CHART_WIDTH = Dimensions.get("window").width - 35;
   const CHART_HEIGHT = 200;
  return (
    <ScrollView style={{
      flex: 1,
      padding:'5%',
      backgroundColor:THEME.COLORS.BACKGROUND
    }}>
      <View style ={{width:'90%', height:90}}>
        <Text style={{ color: THEME.COLORS.WHITE , fontSize:40, }}>{'Ethereum'}</Text>
        <Text style={{ color: THEME.COLORS.WHITE, fontSize:25 }}>{price}</Text>
      </View>
      <GestureHandlerRootView>
            {lineData.length >= 5 ? (
              <LineChart.Provider data={lineData}>
                <LineChart width={CHART_WIDTH} height={CHART_HEIGHT}>
                  <LineChart.Path color={THEME.COLORS.PURPLE}>
                    <LineChart.Gradient color={THEME.COLORS.PURPLE}/>
                  </LineChart.Path>
                </LineChart>
              </LineChart.Provider>
            ): null}
          {candleData.length >= 5 ? (
            <CandlestickChart.Provider data={candleData}>
              <CandlestickChart width={CHART_WIDTH} height={300}>
                <CandlestickChart.Candles candleProps={{
                    width: CANDLE_SIZE,
                    positiveColor: THEME.COLORS.GREEN,
                    negativeColor: THEME.COLORS.RED
                   }}/>
                <CandlestickChart.Crosshair />
              </CandlestickChart>
            </CandlestickChart.Provider>
          ) :null}
          
    </GestureHandlerRootView>

      
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: THEME.COLORS.BACKGROUND
  }
})