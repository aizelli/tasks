import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground, FlatList, TouchableOpacity, Alert } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"

import moment from "moment"

import hoje_imagem from "../../assets/imgs/today.jpg"
import Task from "../components/Task"
import AddTask from "./AddTask"

import "moment/locale/pt-br"

export default class Task_List extends Component {

    state = {
        mostrar_tarefas_concluidas: true,
        mostrar_tela_cadastro: false,
        tarefas_visiveis: [],
        tarefas: [{
            id: Math.random(),
            descricao: "Comprar jogo GTA 6",
            data_estimada: new Date(),
            data_conclusao: new Date()
        },
        {
            id: Math.random(),
            descricao: "Jogar GTA 6",
            data_estimada: moment(new Date()).add(5, "days"),
            data_conclusao: null
        },
        {
            id: Math.random(),
            descricao: "Levar o carro no mêcanico",
            data_estimada: moment(new Date()).add(10, "days"),
            data_conclusao: null
        }]
    }

    componentDidMount = () => {
        this.filtro_tarefas()
    }

    alternar_filtro = () => {
        this.setState({ mostrar_tarefas_concluidas: !this.state.mostrar_tarefas_concluidas }, this.filtro_tarefas)
    }

    filtro_tarefas = () => {
        let tarefas_visiveis = null
        if (this.state.mostrar_tarefas_concluidas) {
            tarefas_visiveis = [...this.state.tarefas]
        } else {
            const pendente = tarefa => tarefa.data_conclusao === null
            tarefas_visiveis = this.state.tarefas.filter(pendente)
        }

        this.setState({ tarefas_visiveis })
    }

    alternar_tarefa = task_id => {
        const tarefas = [...this.state.tarefas]
        tarefas.forEach(tarefa => {
            if (tarefa.id === task_id) {
                tarefa.data_conclusao = tarefa.data_conclusao ? null : new Date()
            }
        })

        this.setState({ tarefas }, this.filtro_tarefas)
    }

    alternar_tela = ()=>{
        this.setState({mostrar_tela_cadastro: !this.state.mostrar_tela_cadastro})
    }

    adicionar_tarefa = nova_tarefa =>{
        if(!nova_tarefa.desc || !nova_tarefa.desc.trim()){
            Alert.alert('Dados inválidos', 'Preencha a descrição')
            return
        }

        const tarefas = [...this.state.tarefas]
        tarefas.push({
            id: Math.random(),
            descricao: nova_tarefa.desc,
            data_estimada: nova_tarefa.data,
            data_conclusao: null
        })

        this.setState({tarefas, mostrar_tela_cadastro: false}, this.filtro_tarefas)
    }

    render() {
        const data_hoje = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.principal}>
                <AddTask
                    visivel={this.state.mostrar_tela_cadastro}
                    cancelar={this.alternar_tela}
                    salvar = {this.adicionar_tarefa}
                    />
                <ImageBackground source={hoje_imagem} style={styles.fundo}>
                    <View style={styles.barra_icone}>
                        <TouchableOpacity onPress={this.alternar_filtro}>
                            <Icon name={this.state.mostrar_tarefas_concluidas ? 'eye' : 'eye-slash'} size={20} color="#FFF"></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.barra_titulo}>
                        <Text style={styles.titulo}>Hoje</Text>
                        <Text style={styles.subtitulo}>{data_hoje}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.lista_tarefas}>
                    <FlatList data={this.state.tarefas_visiveis}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task{...item} alternar_tarefa={this.alternar_tarefa} />} />
                </View>
                <TouchableOpacity
                    style={styles.botao_add}
                    onPress={this.alternar_tela}
                    >
                    <Icon name='plus' size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    principal: {
        flex: 1
    },
    fundo: {
        flex: 3
    },
    lista_tarefas: {
        flex: 7
    },
    barra_titulo: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    titulo: {
        color: '#FFF',
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitulo: {
        color: '#FFF',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    barra_icone: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 50,
        justifyContent: 'flex-end'
    },
    botao_add: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#B13B44',
        justifyContent: 'center',
        alignItems: 'center'
    }

})