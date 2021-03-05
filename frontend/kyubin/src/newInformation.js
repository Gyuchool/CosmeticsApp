/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

class NewInf extends Component {

    state = {
        ID: '',
        PW: '',
        PWT: '',
        EMAIL: '',
        NickNAME: ''
    }
    onChangeID = (event) => {
        this.setState ({
            ID: event
        })
    }
    onChangePW = (event) => {
        this.setState ({
            PW: event
        })
    }
    onChangePWT = (event) => {
        this.setState ({
            PWT: event
        })
    }
    onChangeEMAIL = (event) => {
        this.setState ({
            EMAIL: event
        })
    }
    onChangeNickNAME = (event) => {
        this.setState ({
            NickNAME: event
        })
    }

    render(){
        return (
            <View style = {styles.mainView}>
                
                <Text style = {{fontSize:30}}>회원가입</Text>
                
                <TextInput value = {this.state.ID}
                style = {styles.input}
                onChangeText={this.onChangeID}
                placeholder = "아이디"
                multiline={true}
                maxLength = {20}
                autoCapitalize={'none'}
                editable={true}
                >
                </TextInput>

                <TextInput value = {this.state.PW}
                style = {styles.input}
                onChangeText={this.onChangePW}
                placeholder = "비밀번호"
                multiline={true}
                maxLength = {20}
                autoCapitalize={'none'}
                secureTextEntry = {true}
                >
                </TextInput>

                <TextInput value = {this.state.PWT}
                style = {styles.input}
                onChangeText={this.onChangePWT}
                placeholder = "비밀번호 확인"
                multiline={true}
                maxLength = {20}
                autoCapitalize={'none'}
                secureTextEntry = {false}
                >
                </TextInput>

                <TextInput value = {this.state.EMAIL}
                style = {styles.input}
                onChangeText={this.onChangeEMAIL}
                placeholder = "이메일 주소"
                multiline={true}
                maxLength = {20}
                autoCapitalize={'none'}
                secureTextEntry = {true}
                >
                </TextInput>

                <TextInput value = {this.state.NickNAME}
                style = {styles.input}
                onChangeText={this.onChangeNickNAME}
                placeholder = "닉네임"
                multiline={true}
                maxLength = {20}
                autoCapitalize={'none'}
                secureTextEntry = {true}
                >
                </TextInput>

                <TouchableOpacity style = {styles.submitButton}>
                        <Text>제출하기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.back}
                    onPress = {()=>{
                        this.props.navigation.navigate('Login')
                    }}
                >
                    <Text color = {'white'}>뒤로가기</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    mainView: {
        marginTop: 30,
        width:'100%',
        alignItems:'center',
    },
    input: {
        width: '75%',
        backgroundColor: 'white',
        borderColor:'#dea112',
        borderWidth: 1,
        marginTop: 30,
        fontSize: 15,
        padding: 10,
    },
    submitButton:{
        width: '50%',
        backgroundColor: '#f5eccb',
        borderColor:'black',
        marginTop: 30,
        borderWidth: 0.5,
        padding: 8,
        alignItems: 'center'
    },
    back:{
        width: '50%',
        backgroundColor: '#f5eccb',
        borderColor:'black',
        borderWidth: 0.5,
        padding: 8,
        alignItems: 'center'
    },
})

export default NewInf;