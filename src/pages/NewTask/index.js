import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import database from '../../config/firebaseconfig'
import styles from './style'

export default function NewTask({ navigation }) {
    const [description, setDescription] = useState(null);

    function addTask() {
        database.collection("Tasks").add({
            description: description,
            status: false,
        });
        navigation.navigate("Task");
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
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    )
}
