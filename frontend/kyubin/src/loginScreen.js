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

class Input extends Component {

    state = {
        ID: '',
        PW: ''
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

    render(){
        return (
            <View style = {styles.mainView}>
                <Text style = {{fontSize: 40}} >프로젝트</Text>
                <TextInput value = {this.state.ID}
                style = {styles.input}
                onChangeText={this.onChangeID}
                placeholder = "ID"
                multiline={true}
                maxLength = {20}
                autoCapitalize={'none'}
                editable={true}
                >
                </TextInput>

                <TextInput value = {this.state.PW}
                style = {styles.input}
                onChangeText={this.onChangePW}
                placeholder = "PassWord"
                multiline={true}
                maxLength = {20}
                autoCapitalize={'none'}
                secureTextEntry = {true}
                >
                </TextInput>

                <TouchableOpacity style = {styles.loginButton}>
                    <Text style= {{
                            textAlign: 'center',
                        }}
                        >로그인
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {styles.NewInformation}
                    onPress = {()=>{
                        this.props.navigation.navigate('회원가입')
                    }}
                >
                    <Text>회원가입</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.naverLogin}>
                        <Text style= {{}}>
                            네이버 로그인
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.googleLogin}>
                        <Text style= {{}}>
                            Google 로그인
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.kakaoLogin}>
                        <Text style= {{}}>
                            kakaotalk 로그인
                        </Text>
                </TouchableOpacity>

            </View>
        )
    } 
}

const styles= StyleSheet.create({
    mainView: {
        paddingTop: 80,
        width:'100%',
        alignItems:'center',
    },
    input: {
        width: '75%',
        backgroundColor: 'white',
        borderColor:'#dea112',
        borderWidth: 1,
        marginTop: 20,
        fontSize: 20,
        padding: 10,
    },
    loginButton: {
        width: '45%',
        backgroundColor: '#f5eccb',
        borderColor:'#dea112',
        borderWidth: 0.5,
        padding: 7,
        marginTop: 13,
    },
    NewInformation: {
        width: '45%',
        backgroundColor: '#f5eccb',
        borderColor:'#dea112',
        borderWidth: 0.5,
        padding: 7,
        alignItems: 'center'
    },
    naverLogin:{
        width: '60%',
        backgroundColor: 'green',
        borderColor:'#24302e',
        borderWidth: 1,
        padding: 8,
        marginTop: 25,
    },
    googleLogin:{
        width: '60%',
        backgroundColor: 'white',
        borderColor:'#24302e',
        borderWidth: 1,
        padding: 8,
    },
    kakaoLogin:{
        width: '60%',
        backgroundColor: 'yellow',
        borderColor:'#24302e',
        borderWidth: 1,
        padding: 8,
    },
})

export default Input;
