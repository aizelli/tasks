import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground } from "react-native"
import moment from "moment"
import "moment/locale/pt-br"

import today_Image from "../../assets/imgs/today.jpg"
import Task from "../components/Task"

export default class TaskList extends Component {
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMM')
        return (
            <View style={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Task description={"terminar TCC"}
                        estimate_at={new Date()}
                        done_at={new Date()} />
                    <Task description={"apreesntar TCC"}
                        estimate_at={new Date()}
                        done_at={null} />

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
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'Arial',
        color: '#fff',
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle: {
        fontFamily: 'Arial',
        color: '#fff',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    }
})
