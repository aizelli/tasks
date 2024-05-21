import React, { Component } from "react"
import { StylesSheet, Text, View } from "react-native-web"

export default class TaskList extends Component {
    render () {
        return (
            <View>
                <Text>Lista de Tarefas</Text>
            </View>
        )
    }
}

const styles = StylesSheet.create({
    container: {
        flex: 1
    }
})