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

class DrawerBoard3 extends Component {

    render(){
        return (
            <View style = {styles.mainView}>
                <Text>Board3</Text>
                {/* <Button
                    title = "To User Screen"
                    onPress={()=>{
                        this.props.navigation.navigate('User')
                    }}
                /> */}
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
})

export default DrawerBoard3;
