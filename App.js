import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Button } from 'react-native';

import ArmazenamentoLocal from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';

import FlatList from './src/componentes/FlatList';

export default function App() {
  const[userEmail,setUserEmail]=useState('')
  const[value,setValue]=useState('')

  async function handleAsyncStorage(){
    //Armazenar valores
    await ArmazenamentoLocal.setItem('@App1',userEmail)
    getData()
  }

  async function getData(){
    const response = await ArmazenamentoLocal.getItem('@App1')
    if(response){
      setValue(response)
    }
  }

  // Chama função getData() na inicialização do APP
  useEffect(()=>{
    getData()
  },[])

  return (
    <View style={styles.container}>
      <Image source={require('./assets/favicon.png')}/>
      <Text>Seja bem vindo</Text>
      <TextInput 
        placeholder='Digite seu e-mail' 
        style={styles.txtInput}
        value={userEmail}
        onChangeText={(value)=>setUserEmail(value)}  
      />
      <Button title='CADASTRAR' onPress={handleAsyncStorage}/>

      {/* Chama o estado Value na qual recebeu valor através do response */}
      <Text>{"EMAIL ARMAZENADO:"+value}</Text>

      <FlatList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:20
  },
  txtInput:{
    width:'80%',
    backgroundColor:'#808080',
    height:40,
    borderRadius:20
  }
})
