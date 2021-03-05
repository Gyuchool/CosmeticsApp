/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

class Check2 extends Component {
  state = {
  }
render(){
  return(
      <View>
          <ScrollView>
            <Text>피부고민{'&'}특성 체크리스트{"\n"}</Text>
            <Text>여기다가도 짤막한 설명{"\n"}</Text>
            <Text>블랙헤드/기름짐/각질+모공/여드름,트러블/건조함,당김/홍조/처짐,탄력/피부톤(어두운 피부)/주름/</Text>
            <Text>{"\n"}위에 써놓은 내용의 버튼 생성해서 누르면 눌려진 상태로 있는 폼 만들기</Text>
            <Text>{"\n"}추가로 본인 수면시간, 물 마시는 정도 등의 특성들 추가 작성하기{"\n"}</Text>
            <TouchableOpacity
                    style = {styles.next}
                    onPress = {()=>{
                        alert('저장되었습니다.')
                    }}
                >
                <Text>저장 후 로그인 하기</Text>
            </TouchableOpacity>
          </ScrollView>
      </View>
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
  next:{

  }
});

export default Check2;