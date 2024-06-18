import React from "react"
import {Text, View, StyleSheet} from "react-native"
import moment from "moment"

export default props => {
    return(
        <View style={styles.container}>
            <View>
                <Text>{props.description}</Text>
                <Text>{props.estimate_at + ""}</Text>
                <Text>{props.done_at + ""}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    }
})