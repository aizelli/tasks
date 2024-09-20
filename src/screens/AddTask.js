import React, { Component } from "react"
import { Text, TextInput, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Modal } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"
import moment from "moment"
import Icon from "react-native-vector-icons/FontAwesome6"

const initialSate = { desc: '', data: new Date(), mostrar_calendario: false }


export default class AddTask extends Component {

    state = {
        ...initialSate
    }

    abrir_calendario = () => {
        this.setState({ mostrar_calendario: true })
    }

    salvar_tarefa = () => {
        const nova_tarefa = {
            desc: this.state.desc,
            data: this.state.data
        }

        if(this.props.salvar){
            this.props.salvar(nova_tarefa)
            this.setState({...initialSate})
        }
    }

    render() {
        const data_formatada = moment(this.state.data).format('ddd, D [de] MMMM [de] YYYY')
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
                    <View style={styles.container}>
                        <Icon name='clipboard-check' size={25} color='#333'></Icon>
                        <TextInput
                            style={styles.input}
                            placeholder="Descrição da tarefa"
                            onChangeText={desc => this.setState({ desc })}
                            value={this.state.desc}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.container}
                        onPress={this.abrir_calendario}>
                        <Icon name='calendar' size={25} color='#333'></Icon>
                        <Text style={styles.data}>{data_formatada}</Text>
                    </TouchableOpacity>
                    {this.state.mostrar_calendario && (
                        <DateTimePicker value={this.state.data}
                            mode="date"
                            onChange={(event, data) => {
                                if (data) {
                                    this.setState({ data, mostrar_calendario: false })
                                } else {
                                    this.setState({ mostrar_calendario: false })
                                }
                            }}
                        />
                    )}
                    <View style={styles.botoes}>
                        <TouchableOpacity onPress={this.props.cancelar}>
                            <Text style={styles.botao}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.salvar_tarefa}>
                            <Text style={styles.botao}>Adicionar</Text>
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
    input: {
        width:'85%',
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
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 15,
        paddingVertical: 10
    },
    data: {
        margin: 10,
        color: '#333'
    }

})