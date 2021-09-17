import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import database from '../../config/firebaseconfig'
import styles from './style'
import { Entypo } from '@expo/vector-icons'; 

export default function NewTask({ navigation, route }) {
    const [description, setDescription] = useState(null);

    function addTask() {
        database.firestore().collection(route.params.idUser).add({
            description: description,
            status: false,
        });
        navigation.navigate("Task", { idUser: route.params.idUser });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite aqui..."
                onChangeText={setDescription}
                value={description}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={()=>{
                    addTask()
                }}
            >
                <Text style={styles.iconButton}>
                    <Entypo
                        name="save"
                        size={23}
                        color="white"
                    />
                </Text>
            </TouchableOpacity>
        </View>
    )
}
