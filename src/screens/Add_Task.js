import React, { Component } from "react";
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal
} from "react-native"

export default class AddTask extends Component {
    render() {
        return (
            <Modal
                transparent={true}
                visible={true}
                animationType="slide"
            >
                <TouchableWithoutFeedback>
                    <View style={styles.fundo}></View>
                </TouchableWithoutFeedback>
                <View style={styles.principal}>
                    <Text style={styles.cabecalho}>Nova Tarefa</Text>
                    <TextInput
                        placeholder="Descrição da Tarefa" />
                    <View>
                        <TouchableOpacity>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback>
                    <View style={styles.fundo}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    principal: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    cabecalho: {
        backgroundColor: '#B13B44',
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        padding: 15
    }
})