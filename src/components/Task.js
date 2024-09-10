import React from "react"
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"
import moment from "moment"
import "moment/locale/pt-br"

import common_Styles from "../styles/common_Styles"

export default props => {

    const concluido_ou_nao = props.data_conclusao != null ? { textDecorationLine: "line-through" } : {}

    const data = props.data_conclusao ? props.data_conclusao : props.data_estimada
    const data_formatada = moment(data).locale('pt-br').format('ddd, D [de] MMM')

    return (
        <View style={styles.principal}>
            <TouchableWithoutFeedback
            onPress={() => props.alternar_tarefa(props.id) }>
                <View style={styles.check_principal}>
                    {get_visualizar_check(props.data_conclusao)}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={[styles.desc, concluido_ou_nao]}>{props.decricao}</Text>
                <Text style={styles.data}>{data_formatada}</Text>
            </View>
        </View>
    )
}

function get_visualizar_check(data_conclusao) {
    if (data_conclusao != null) {
        return (
            <View style={styles.concluido}>
                <Icon name="check" size={20} color="#FFF"></Icon>
            </View>
        )
    } else {
        return (
            <View style={styles.pendente}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    principal: {
        flexDirection: "row",
        borderColor: "#AAA",
        borderBottomWidth: 1,
        alignItems: "center",
        paddingVertical: 10
    },
    check_principal: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center"
    },
    pendente: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#555"
    },
    concluido: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: "#4D7031",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        color: common_Styles.colors.main,
        fontSize: 20
    },
    data: {
        color: common_Styles.colors.sub,
    }

})