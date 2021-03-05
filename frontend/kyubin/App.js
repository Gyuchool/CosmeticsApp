/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Button,StyleSheet,ScrollView,View,Text,Image,TouchableOpacity } from 'react-native';
import Input from './src/loginScreen';
import NewInf from './src/newInformation';
import DrawerMain from './src/mainhome';
import UserInf from './src/board/userInf';
import DrawerBoard1 from './src/board/board1';
import DrawerBoard2 from './src/board/board2';
import DrawerBoard3 from './src/board/board3';
import TabMainHome from './src/mainHom_tab';
import Check1 from './src/checkList1';
import Check2 from './src/checkList2';
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
 } from '@react-navigation/drawer';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerComponent = () => {
  return(
    <Drawer.Navigator
      initialRouteName = "Main"
      drawerType="front"
      drawerStyle={{
        backgroundColor: '#f5f2e6',
        width: 165
      }}
      drawerContentOptions={{
        activeTintColor:'#f0c930',
        activeBackgroundColor:'#f2eca7',
      }}
    >
      <Drawer.Screen name = "Main" component={DrawerMain}/>
      <Drawer.Screen name = "내 정보" component={UserInf}/>
      <Drawer.Screen name = "Board1" component={DrawerBoard1}/>
      <Drawer.Screen name = "Board2" component={DrawerBoard2}/>
      <Drawer.Screen name = "Board3" component={DrawerBoard3}/>
    </Drawer.Navigator>
  )
}

const HeaderButton = () =>{
  const navigation = useNavigation();
  return (
    <View style = {{flexDirection: 'row', paddingLeft: 10}}>
      <TouchableOpacity
        onPress={()=>{
          navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
        <Text>Open</Text>
      </TouchableOpacity>
    </View>
  )
}

class App extends Component {
  state = {
  }
render(){
  return(
        <NavigationContainer>
          {/* <Stack.Navigator
            initialRouteName = "Login"
          >
            <Stack.Screen name = "Login" component = {Input}/>
            <Stack.Screen name = "회원가입" component = {NewInf}/>
          </Stack.Navigator> */}
          <Stack.Navigator>
            <Stack.Screen 
              name="Main" 
              component={DrawerComponent}
              options={{
                title: '말랑말랑 연구소',
                headerButton: ({}) =><HeaderButton/>,
                headerTitleAlign:'centers',
                headerStyle:{
                  height: 50,
                  backgroundColor: '#fad782'
                },
                headerTintColor: '#fff',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>  
  )
}

}
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop:100,
    alignItems:'center',
  },
});

export default App;