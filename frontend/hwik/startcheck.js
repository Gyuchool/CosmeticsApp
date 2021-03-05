/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native';


class CheckStart extends Component {


   render(){
        return(
            <View style = {styles.mainView}> 
            <View style = {styles.subView}>
                <Text style ={ {fontSize : 25 , left: '33%', top:10}} >
                       Checklist
                </Text>
                 <Text style = {styles.InformBox}>
                  다음의 체크리스트는 연구원님들간의 원활한 정보 공유를 위한 체크리스트입니다.               
                 </Text>
                 <TouchableOpacity onPress = {()=>{
                        this.props.navigation.navigate("피부타입체크리스트") 
                    }}
                    style = {styles.startBox} >
                     <Text>
                             시작하기
                     </Text>
              </TouchableOpacity>
              </View>    
            </View>
        )
    } 
}

const styles= StyleSheet.create({
    mainView: {
        paddingTop: '55%',
        width:'100%',
        alignItems:'center',
    },
    subView: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor:'#dea112',  
        width: '90%'
    },
    InformBox: {
        fontSize: 15,
        marginTop: "5%",
        marginBottom: '5%',
        padding : "3%"
        
    },
    startBox:{
        backgroundColor: 'white',
        borderColor:'#dea112',
        borderWidth: 1, 
        fontSize: 15,
        alignItems : 'center',
        justifyContent: 'center',
        left: '25%',
        width: "50%",
        marginBottom: "5%",
        paddingBottom: '5%'
    }
})  

export default CheckStart;