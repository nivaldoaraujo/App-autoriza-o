import { StyleSheet, View, Text, Button } from "react-native";
import firebase from '../firebaseConnection'
import { useState } from "react";
import App from "../../App";


export default function Home({emailUsuario}){

    const [usuario, setUsuario] = useState(emailUsuario)
    async function deslogar(){
        await firebase.auth().signOut()
        setUsuario('')
    }

    if(!usuario){
        return <App />
    }

    return(
        <View style={styles.container}>
            <Text style={{fontSize: 25, marginTop: 20, textAlign: 'center'}}>
                Seja Bem-vindo(a), {emailUsuario}!
            </Text>
            <Button
            title="sair"
            onPress={deslogar}
            />
        </View>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c3cbd6',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
});