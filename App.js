import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {

  function BotaoLogar(){
    alert('Logado com sucesso')
  }
  
  return (
    <View style={styles.containerTop}>
      <View>
        <Text style={styles.titlePrincipal}>Objective Homolog</Text>
      </View>
      <View style={styles.container} >
        <Text style={styles.title}>Login</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder="E-mail" 
          keyboardType="email-address" 
          autoCapitalize="none" 
        />
        <TextInput 
          style={styles.textInput} 
          placeholder="Senha" 
          secureTextEntry 
        />
        <Button style={styles.butao} title="Logar" onPress={() => alert('Logando...')} />
        <TouchableOpacity onPress={() => alert('Redefinir senha...')}>
          <Text style={styles.resetText}>Esqueceu a senha? Redefinir</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%'
  },
  containerTop: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: '#5f6163',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: '#fff',
  },
  resetText: {
    color: '#007BFF',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  titlePrincipal: {
    color: '#911603',
    marginTop: 40,
    fontSize: 30
  },
  butao: {
    marginTop: 50,
    width: '100%'
  }
});
