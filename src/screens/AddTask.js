import React, { Component } from "react"
import { Text, TextInput, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import { Modal } from "react-native-web"

const initialSate = {desc: ''}

export default class AddTask extends Component {

    state = {
        ...initialSate
    }

    render() {
        console.log(this.props)
        return (
            <Modal
                transparent={true}
                visible={this.props.visivel}
                onRequestClose={this.props.cancelar}
                animationType='slide'>
                <TouchableWithoutFeedback onPress={this.props.cancelar}>
                    <View style={styles.fundo}></View>
                </TouchableWithoutFeedback>
                <View style={styles.principal}>
                    <Text style={styles.cabecalho}>Nova Tarefa</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder="Descrição da tarefa"
                    onChange={desc => this.setState({desc})}
                    value={this.state.desc} />
                    <View style= {styles.botoes}>
                        <TouchableOpacity onPress={this.props.cancelar}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.cancelar}>
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
        backgroundColor: '#FFF'
    },
    cabecalho: {
        backgroundColor: '#B13B44',
        color: '#FFF',
        textAlign: 'center',
        padding: 15,
        fontSize: 20
    },
    input:{
        width: '90%',
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    },
    botoes:{
        flexDirection:'row',
        justifyContent: 'flex-end'
    },
    botao:{
        margin: 20,
        marginRight: 30,
        color: '#B13B44'
    }
})