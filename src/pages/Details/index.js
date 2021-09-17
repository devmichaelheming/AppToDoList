import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import database from '../../config/firebaseconfig'

import styles from './style'
import { Entypo } from '@expo/vector-icons';

export default function Details({ navigation, route }) {
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const idTask = route.params.id

    function editTask(description, id){
        database.firestore().collection(route.params.idUser).doc(id).update({
            description: descriptionEdit,
        });
        navigation.navigate("Task", { idUser: route.params.idUser });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite aqui..."
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={()=>{
                    editTask(descriptionEdit, idTask)
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
