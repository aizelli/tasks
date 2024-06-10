import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground } from "react-native"

import today_Image from "../../assets/imgs/today.jpg"

export default class Task_List extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>

                </ImageBackground>
                <View style={styles.taskList}>
                    <Text>Lista de tarefas</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    }
})

