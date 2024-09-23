import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Modal,
    Alert
} from "react-native";
import { Icon } from "react-native-vector-icons/FontAwesome6";
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker'

const estado_inicial = {
    desc: '',
    data: new Date(),
    mostrar_calendario: false
}

abrir_calendario = () => {
    this.setState({mostrar_calendario: true})
}

salvar_tarefa = () =>{
    const nova_tarefa = {
        desc: this.state.desc,
        data: this.state.data
    }
    if(this.props.salvar){
        this.props.salvar(nova_tarefa)
        this.setState({...estado_inicial})
    }
}

export default class AddTask extends Component {

    state = {
        ...estado_inicial
    }

    render() {
        const data_formatada = moment(this.state.data).format('ddd, D [de] MMMM')
        return (
            <Modal
                transparent={true}
                visible={this.props.visivel}
                onRequestClose={this.props.cancelar}
                animationType="slide">
                <TouchableWithoutFeedback onPress={this.props.cancelar}>
                    <View style={styles.fundo}></View>
                </TouchableWithoutFeedback>
                <View style={styles.principal}>
                    <Text style={styles.cabecalho}>Nova Tarefa</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Descrição da tarefa"
                        onChangeText={desc => this.setState({ desc })}
                        value={this.state.desc}
                    />
                    <View style={styles.botoes}>
                        <TouchableOpacity
                            onPress={this.props.cancelar}
                        >
                            <Text style={styles.botao}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.botao}>Salvar</Text>
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
        flex: 1,
        backgroundColor: '#FFF'
    },
    cabecalho: {
        backgroundColor: '#B13B44',
        color: '#FFF',
        textAlign: 'center',
        padding: 5,
        fontSize: 20
    },
    input: {
        width: '85%',
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    botao: {
        margin: 20,
        marginRight: 30,
        color: '#B13B44'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        paddingVertical: 10
    },
    data: {
        margin: 10,
        color: '#333'
    }
})