import React, { useState } from 'react'
import {
    View,
    Text,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Platform,
} from 'react-native'

import firebase from '../../config/firebaseconfig'

import styles from './style'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewUser({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          let user = userCredential.user;
          navigation.navigate("Task", { idUser: user.uid })
        })
        .catch((error) => {
            if (password.length <= 6) {
                setErrorRegister("Use 6 caracteres ou mais para sua senha.") 
            }
            let errorCode = error.code;
            let errorMessage = error.message;
        });
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <Text style={styles.title}>Criar uma nova conta</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira o seu e-mail..."
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Insira a sua senha..."
                type="text"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            {errorRegister
            ?
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                    name="alert-circle"
                    size={24}
                    color="#bdbdbd"
                    />
                    <Text style={styles.warningAlert}>{errorRegister}</Text>
                </View>
            :
                <View/>
            }

            {email === "" || password === ""
            ?
                <TouchableOpacity
                    disabled={true}
                    style={styles.buttonRegister}
                >
                    <Text style={styles.textButtonRegister}>Cadastrar</Text>
                </TouchableOpacity>
            :
                <TouchableOpacity
                    onPress={register}
                    style={styles.buttonRegister}
                >
                    <Text style={styles.textButtonRegister}>Cadastrar</Text>
                </TouchableOpacity>
            }
            <Text style={styles.registration}>
                Já é cadastrado?
                <Text
                    style={styles.linkLogin}
                    onPress={()=> navigation.navigate("Login")}
                >
                    Entrar
                </Text> 
            </Text>
            <View style={{height:100}}/>

        </KeyboardAvoidingView>
    )
}