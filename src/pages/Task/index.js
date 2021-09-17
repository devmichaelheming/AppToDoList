import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native'

import firebase from '../../config/firebaseconfig'

import styles from './style'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Task({ navigation, route }) {
    const [task, setTask] = useState([]);

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login");
        }).catch((error) => {

        }); 
    }

    function deleteTask(id) {
        firebase.firestore().collection(route.params.idUser).doc(id).delete();
    }

    useEffect(() => {
        firebase.firestore().collection(route.params.idUser).onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setTask(list);
        });
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={( { item } ) =>{
                    return (
                        <View style={styles.Tasks}>
                            <Text
                                style={styles.descriptionTask}
                                onPress={()=>{
                                    navigation.navigate("Details", {
                                        id: item.id,
                                        description: item.description,
                                        idUser: route.params.idUser
                                    })
                                }}
                            >
                                { item.description }
                            </Text>
                            <TouchableOpacity style
                                style={styles.deleteTask}
                                onPress={() => {
                                    deleteTask(item.id)
                                }}
                            >
                                <MaterialIcons
                                    name="delete"
                                    size={23}
                                    color="#F92e6a"
                                />
                            </TouchableOpacity>
                            

                        </View>
                    )
                }}
            />
            {
                task.length === 0
                ?
                    <View style={styles.validateTasks}>
                        <MaterialCommunityIcons
                            name="alert-circle"
                            size={20}
                            color="#bdbdbd"
                        />
                        <Text style={styles.textValidateTasks}>
                            Não há nenhuma tarefa cadastrada até o momento.
                        </Text>
                    </View>
                :
                    <View></View>

            }
            <TouchableOpacity style
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("New Task", { idUser: route.params.idUser })}
            >
                <Text style={styles.iconButton}>
                    <AntDesign
                        name="plus"
                        size={25}
                        color="#fff"
                    />
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonLogout}
            onPress={()=>{ logout() }}
            >
                <Text style={styles.iconButtonLogout}>
                    <MaterialCommunityIcons
                        name="location-exit"
                        size={23}
                        color="#F92e6a"
                    />
                </Text>
            </TouchableOpacity>
        </View>
    )
}