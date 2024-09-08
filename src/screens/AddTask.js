import React, {Component} from "react"
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { Modal } from "react-native-web"

export default class AddTask extends Component{
    render(){
        return(
            <Modal 
            transparent = {true}
            visible = {this.props.isVisible}
            onRequestClose= {this.props.onCancel}
            animationType = 'slide'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style = {styles.background}>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
})