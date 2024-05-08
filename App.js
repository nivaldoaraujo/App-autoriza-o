import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput , View, Button } from 'react-native';
import firebase from './src/firebaseConnection';
import { useState, useEffect } from 'react';
import Home from './src/components/Home';




export default function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [usuario, setUsuario] = useState('')
  const [type, setType] = useState('login')

  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((value) => { 
      alert("Bem-vindos(a): " + value.user.email)
      setUsuario(value.user.email)
     })
     .catch((error) => { 
        alert("Ops ! Algo deu errado. Tente novamente!")
        return
      })
  }

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((value) => { 
      alert("Usuario criado: " + value.user.email)
     })
     .catch((error) => { 
      if(error.code === 'auth/weak-password'){
        alert("A sua senha deve possuir pelo menos 6 carateres")
        return
      }
      if(error.code === 'auth/invalid-email'){
        alert("Esse e-mail é inválido! Tente novamente!")
        return
      }
      else{
        alert("Ops ! Algo deu errado tente novamente!!")
        return
      }
      })
  }
        //contendo o usuario ele carrega a Home com nome do usuário
        if(usuario){
          return <Home emailUsuario={usuario}/>
        }

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      onChangeText={(texto) => setEmail(texto)}
      value={email}
      placeholder='Digite o seu e-mail'
      />

      <TextInput
      style={styles.input}
      onChangeText={(texto) => setSenha(texto)}
      value={senha}
      placeholder='Digite o sua senha'
      />
      {
        type === 'login' ? (
          <Button
          title='Acessar'
          onPress={logar}
          />
        ) : (
          <Button
          title='Cadastrar'
          onPress={cadastrar}
          />
        )
      }

      {
        type === 'login' ? (
          <Button
          title='Não possuo uma conta'
          onPress={() => setType('cadastro')}
          />
        ) : (
          <Button
          title='Já possuo uma conta'
          onPress={() => setType('login')}
          />
        )
      }

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  input:{
    width: 200,
    heigh: 150,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    padding: 5

  }
});
