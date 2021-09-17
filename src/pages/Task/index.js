import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native'

import database from '../../config/firebaseconfig'

import styles from './style'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 

export default function Task({navigation}) {
    const [task, setTask] = useState([]);

    function deleteTask(id) {
        database.collection("Tasks").doc(id).delete();
    }

    useEffect(() => {
        database.collection("Tasks").onSnapshot((query)=>{
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
            <TouchableOpacity style
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("New Task")}
            >
                <Text style={styles.iconButton}>
                    <AntDesign
                        name="plus"
                        size={25}
                        color="#fff"
                    />
                </Text>
            </TouchableOpacity>
        </View>
    )
}