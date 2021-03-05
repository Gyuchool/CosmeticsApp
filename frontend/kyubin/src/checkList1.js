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

class Check1 extends Component {
  state = {
  }
render(){
  return(
      <View>
          <ScrollView>
            <Text>피부타입 체크리스트{"\n"}</Text>
            <Text>
                설명{"\n"}
                0~1개 - 악건성{"\n"}
                2~4개 - 건성{"\n"}
                5~7개 - 중성{"\n"}
                8~10개 - 지성{"\n"}
                11~12개 - 악지성{"\n"}
            </Text>
            <Text>1. 세안 후 아무것도 바르지 않아도 그다지 당기는 느낌이 없다.</Text>
            <Text>2. 세안 후 3~4시간이 지났을 때 티슈에 유분(기름)이 묻어나온다.</Text>
            <Text>3. 아무것도 바르지 않았을 때 모공이 눈에 정확히 보인다.</Text>
            <Text>4. 기름종이를 하루에 3회 이상 사용한다.</Text>
            <Text>5. 썬크림, 메이크업이 2시간 이내에 다시 바를 정도로 지워진다.</Text>
            <Text>6. 영양크림이나 수분크림을 바를 경우 트러블이 생긴다.</Text>
            <Text>7. 화장품 제형은 산뜻한(가벼운) 타입이 좋다.</Text>
            <Text>8. 코 주변에 블랙헤드나 화이트헤드가 많이 있다.</Text>
            <Text>9. 머리가 자주 가렵고, 비듬이 잘 생긴다.</Text>
            <Text>10. 거울을 볼 때 각질보다 기름기가 먼저 눈에 들어온다.</Text>
            <Text>11. 하루라도 머리를 안감으면 금방 기름진다.</Text>
            <Text>12. 춥고 건조한 날씨에도 피부가 가렵거나 당기지 않다.</Text>
            <Text>13. 접촉에 피부가 민감하다(ex. 마스크)</Text>
            <Text>14. 화학성분에 피부가 민감한 편이다.(ex.화장품에 예민)</Text>
            <TouchableOpacity
                    style = {styles.next}
                    onPress = {()=>{
                        alert('다음 체크리스트 이동')
                    }}
                >
                <Text>{"\n"}다음 체크리스트</Text>
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

export default Check1;