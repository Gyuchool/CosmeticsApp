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
import axios from 'axios';

class Check extends Component {
state = {
    list_0: '',
    list_1: '',
    checkBoolean1: false,
    checkBoolean2: false,
    checkBoolean3: false,
    checkBoolean4: false,
    checkBoolean5: false,
    checkBoolean6: false,
    checkBoolean7: false,
    checkBoolean8: false,
    checkBoolean9: false,
    checkBoolean10: false,
    checkBoolean11: false,
    checkBoolean12: false,
    checkBoolean13: false,
    checkBoolean14: false
}
checkNum = () => {
 let num = 0;
    if (this.state.checkBoolean1 == true)
     num = num + 1;
    if (this.state.checkBoolean2 == true)
     num = num + 1;
    if (this.state.checkBoolean3 == true)
     num = num + 1;
    if (this.state.checkBoolean4 == true)
     num = num + 1;
    if (this.state.checkBoolean5 == true)
     num = num + 1;
    if (this.state.checkBoolean6 == true)
     num = num + 1;
    if (this.state.checkBoolean7 == true)
     num = num + 1;
    if (this.state.checkBoolean8 == true)
     num = num + 1;
    if (this.state.checkBoolean9 == true)
     num = num + 1;
    if (this.state.checkBoolean10 == true)
     num = num + 1;
    if (this.state.checkBoolean11 == true)
     num = num + 1;
    if (this.state.checkBoolean12 == true)
     num = num + 1; 
    if( num >=  0 && num  < 2 )
     {
    this.setState({
         list_0: "악건성"
       })
    }
  else if(num >= 2 && num  <= 4)
   {
    this.setState({
        list_0: "건성"
      })
   }
   else if(num >= 5 && num  <= 7)
   {
    this.setState({
        list_0: "중성"
      })
   }
   else if(num >= 8 && num  <= 10)
   {
    this.setState({
        list_0: "지성"
      })
   }
   else { 
     this.setState({
         list_0: "악지성"
       })
   }
   console.log(num)
}
check_sensitivity = () => {
    if(this.state.checkBoolean13 == true && this.state.checkBoolean14 == false)
    {
        this.setState({
            list_1: "접촉 민감성"
          })
    }
    else if(this.state.checkBoolean13 == false && this.state.checkBoolean14 == true)
    {
        this.setState({
            list_1: "화학 민감성"
          })
    }
    else if(this.state.checkBoolean13 == false && this.state.checkBoolean14 == false)
    {
        this.setState({
            list_1: ""
          })
    }
    else
    {
        this.setState({
            list_1: "극 민감성"
          })
    }
}


    


Checklist_1 = () => (
    this.state.checkBoolean1 ?
    <Text style = {styles.FalseTextView}>1. 세안 후 아무것도 바르지 않아도 그다지 당기는 느낌이 없다.</Text> 
    :
    <Text style = {styles.TrueTextView}>1. 세안 후 아무것도 바르지 않아도 그다지 당기는 느낌이 없다. </Text>
)
Checklist_2 = () => (
    this.state.checkBoolean2 ?
    <Text style = {styles.FalseTextView}>2. 세안 후 3~4시간이 지났을 때 티슈에 유분(기름)이 묻어나온다. </Text>
    :
    <Text style = {styles.TrueTextView}>2. 세안 후 3~4시간이 지났을 때 티슈에 유분(기름)이 묻어나온다.</Text> 
)
Checklist_3 = () => (
    this.state.checkBoolean3 ?
    <Text style = {styles.FalseTextView}>3. 아무것도 바르지 않았을 때 모공이 눈에 정확히 보인다.</Text>
    : 
    <Text style = {styles.TrueTextView}>3. 아무것도 바르지 않았을 때 모공이 눈에 정확히 보인다.</Text> 
)
Checklist_4 = () => (
    this.state.checkBoolean4 ?
    <Text style = {styles.FalseTextView}>4. 기름종이를 하루에 3회 이상 사용한다.</Text>
    :
    <Text style = {styles.TrueTextView}>4. 기름종이를 하루에 3회 이상 사용한다.</Text> 
)
Checklist_5 = () => (
    this.state.checkBoolean5 ?
    <Text style = {styles.FalseTextView}>5. 썬크림, 메이크업이 2시간 안에 다시 바를 정도로 지워진다.</Text>
    :
    <Text style = {styles.TrueTextView}>5. 썬크림, 메이크업이 2시간 안에 다시 바를 정도로 지워진다.</Text> 
)
Checklist_6 = () => (
    this.state.checkBoolean6 ?
    <Text style = {styles.FalseTextView}>6. 영양크림이나 수분크림을 바를 경우 트러블이 생긴다.</Text>
    :
    <Text style = {styles.TrueTextView}>6. 영양크림이나 수분크림을 바를 경우 트러블이 생긴다.</Text> 
)
Checklist_7 = () => (
    this.state.checkBoolean7 ?
    <Text style = {styles.FalseTextView}>7. 화장품 제형은 산뜻한(가벼운) 타입이 좋다.</Text> 
    :
    <Text style = {styles.TrueTextView}>7. 화장품 제형은 산뜻한(가벼운) 타입이 좋다.</Text>
)
Checklist_8 = () => (
    this.state.checkBoolean8 ?
    <Text style = {styles.FalseTextView}>8. 코 주변에 블랙헤드나 화이트헤드가 많이 있다.</Text> 
    :
    <Text style = {styles.TrueTextView}>8. 코 주변에 블랙헤드나 화이트헤드가 많이 있다.</Text>
)
Checklist_9 = () => (
    this.state.checkBoolean9 ?
    <Text style = {styles.FalseTextView}>9. 머리가 자주 가렵고, 비듬이 잘 생긴다.</Text> 
    :
    <Text style = {styles.TrueTextView}>9. 머리가 자주 가렵고, 비듬이 잘 생긴다.</Text>
)
Checklist_10 = () => (
    this.state.checkBoolean10 ?
    <Text style = {styles.FalseTextView}>10. 거울을 볼 때 각질보다 기름기가 먼저 들어온다.</Text> 
    :
    <Text style = {styles.TrueTextView}>10. 거울을 볼 때 각질보다 기름기가 먼저 들어온다.</Text>
)
Checklist_11 = () => (
    this.state.checkBoolean11 ?
    <Text style = {styles.FalseTextView}>11. 하루라도 머리를 안 감으면 금방 기름진다.</Text> 
    :
    <Text style = {styles.TrueTextView}>11. 하루라도 머리를 안 감으면 금방 기름진다.</Text>
)
Checklist_12 = () => (
    this.state.checkBoolean12 ?
    <Text style = {styles.FalseTextView}>12. 춥고 건조한 날씨에도 피부가 가렵거나 당기지 않는다.</Text> 
    :
    <Text style = {styles.TrueTextView}>12. 춥고 건조한 날씨에도 피부가 가렵거나 당기지 않는다.</Text>
)
Checklist_13 = () => (
    this.state.checkBoolean13 ?
    <Text style = {styles.FalseTextView}>13. 접촉에 피부가 민감하다(ex. 마스크)</Text> 
    :
    <Text style = {styles.TrueTextView}>13. 접촉에 피부가 민감하다(ex. 마스크)</Text>
)
Checklist_14 = () => (
    this.state.checkBoolean14 ?
    <Text style = {styles.FalseTextView}>14. 화학성분에 피부가 민감한 편이다.(ex. 화장품에 예민)</Text> 
    :
    <Text style = {styles.TrueTextView}>14. 화학성분에 피부가 민감한 편이다.(ex. 화장품에 예민)</Text>
)

changeBoolean1 = (a) => {
    if(a == false) {
    this.setState({
      checkBoolean1: true
    })
    }
    else{
         this.setState({
         checkBoolean1: false
        })
    }
}
changeBoolean2 = (b) => {
    if(b == false) {
    this.setState({
      checkBoolean2: true
    })
    }
    else{
         this.setState({
         checkBoolean2: false
        })
    }
}
changeBoolean3 = (c) => {
    if(c == false) {
    this.setState({
      checkBoolean3: true
    })
    }
    else{
         this.setState({
         checkBoolean3: false
        })
    }
}
changeBoolean4 = (d) => {
    if(d == false) {
    this.setState({
      checkBoolean4: true
    })
    }
    else{
         this.setState({
         checkBoolean4: false
        })
    }
}
changeBoolean5 = (e) => {
    if(e == false) {
    this.setState({
      checkBoolean5: true
    })
    }
    else{
         this.setState({
         checkBoolean5: false
        })
    }
}
changeBoolean6 = (f) => {
    if(f == false) {
    this.setState({
      checkBoolean6: true
    })
    }
    else{
         this.setState({
         checkBoolean6: false
        })
    }
}
changeBoolean7 = (g) => {
    if(g == false) {
    this.setState({
      checkBoolean7: true
    })
    }
    else{
         this.setState({
         checkBoolean7: false
        })
    }
}
changeBoolean8 = (h) => {
    if(h == false) {
    this.setState({
      checkBoolean8: true
    })
    }
    else{
         this.setState({
         checkBoolean8: false
        })
    }
}
changeBoolean9 = (i) => {
    if(i == false) {
    this.setState({
      checkBoolean9: true
    })
    }
    else{
         this.setState({
         checkBoolean9: false
        })
    }
}
changeBoolean10 = (j) => {
    if(j == false) {
    this.setState({
      checkBoolean10: true
    })
    }
    else{
         this.setState({
         checkBoolean10: false
        })
    }
}
changeBoolean11 = (k) => {
    if(k == false) {
    this.setState({
      checkBoolean11: true
    })
    }
    else{
         this.setState({
         checkBoolean11: false
        })
    }
}
changeBoolean12 = (l) => {
    if(l == false) {
    this.setState({
      checkBoolean12: true
    })
    }
    else{
         this.setState({
         checkBoolean12: false
        })
    }
}
changeBoolean13 = (m) => {
    if(m == false) {
    this.setState({
      checkBoolean13: true
    })
    }
    else{
         this.setState({
         checkBoolean13: false
        })
    }
}
changeBoolean14 = (n) => {
    if(n == false) {
    this.setState({
      checkBoolean14: true
    })
    }
    else{
         this.setState({
         checkBoolean14: false
        })
    }
}
    render(){
        return(
            <View style = {styles.mainView}>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean1(this.state.checkBoolean1)} >
                      {this.Checklist_1()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean2(this.state.checkBoolean2)} >
                      {this.Checklist_2()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean3(this.state.checkBoolean3)} >
                      {this.Checklist_3()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean4(this.state.checkBoolean4)} >
                      {this.Checklist_4()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean5(this.state.checkBoolean5)} >
                      {this.Checklist_5()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean6(this.state.checkBoolean6)} >
                      {this.Checklist_6()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean7(this.state.checkBoolean7)} >
                      {this.Checklist_7()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean8(this.state.checkBoolean8)} >
                      {this.Checklist_8()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean9(this.state.checkBoolean9)} >
                      {this.Checklist_9()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean10(this.state.checkBoolean10)} >
                      {this.Checklist_10()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean11(this.state.checkBoolean11)} >
                      {this.Checklist_11()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean12(this.state.checkBoolean12)} >
                      {this.Checklist_12()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean13(this.state.checkBoolean13)} >
                      {this.Checklist_13()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.changeBoolean14(this.state.checkBoolean14)} >
                      {this.Checklist_14()}     
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.submit}
                    onPress = {()=>{
                        this.check_sensitivity()
                        this.checkNum()
                        console.log(this.state.list_0)
                        console.log(this.state.list_1)
                        this.props.navigation.navigate('피부고민 리스트')
//                         axios.post('http://192.168.35.7:8080/members/new',{
//                             checkBoolean1: this.state.list_0,
//                             checkBoolean2: this.state.list_1,
//                         }).then(response => {
//                             console.log(response.data);
//                         }).catch(error => {
//                             console.log(error);
//                         })
                    }}
                >
                    <Text>제출</Text>
                </TouchableOpacity>
            </View>
        )
    } 
}

const styles= StyleSheet.create({
    mainView: {
        paddingTop: 50,
        width:'100%',
        left : 10
    },
    TrueTextView : {
        paddingTop:10,
        fontSize : 13.5,
        //fontStyle : ,
       color: "#abadaa"
 },
 FalseTextView:{
    paddingTop:10,
    fontSize : 13.5,
    //fontStyle : ,
   color: "#000000"
 },
 submit:{
    width: '50%',
    backgroundColor: '#f5eccb',
    borderColor:'black',
    marginTop: 30,
    left: 80,
    borderWidth: 0.5,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
}
})  

export default Check;

