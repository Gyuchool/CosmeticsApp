/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View,Text,StyleSheet, TouchableOpacity,ScrollView,TextInput,FlatList, SafeAreaView } from 'react-native';



const Item = ({ user,comment }) => (
    <View>
         <View style = {styles.userbox}>
            <Text> {user}</Text>
          </View>
        <View style={styles.box}>
           <Text style={styles.comment}>{comment}</Text>
        </View>
    </View>
  );

class read extends Component {
   //title 데이터 읽어오기, user 읽어와서 맞는 연구원증 띄우기, content 띄우기



    state = {
        list:{
        title : "test",
        content : "1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세  2. 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 3. 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세4. 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세",
        },
        user: "",
        comment: "좋은글이네요",
        content_like: 5,
        comment_like: 1,
        contentlike_state : false,
    
        DATA :
[
  { 
      num : "1",
      user: "규철",
      comment: "First Comment",
  },
   {
      num: "2",
      user: "휘경",
      comment: "Second Comment",
   },
   {
      num: "3",
      user: "지환",
      comment: "Third Comment",
    },
    { 
        num : "4",
        user: "규철",
        comment: "First long long long long long long  long comment",
    },
     {
        num: "5",
        user: "휘경",
        comment: "Second  long long long long long long  long comments",
     },
     {
        num: "6",
        user: "지환",
        comment: "Third  long long long long long long  long comment",
      },
      { 
        num : "7",
        user: "규철",
        comment: "First  long long long long long long  long  long long long long long long  long  long long long long long long  long comment",
    },
     {
        num: "8",
        user: "휘경",
        comment: "Second long long long long long long  long  long long long long long long  long  long long long long long long  long comment",
     },
     {
        num: "9",
        user: "지환",
        comment: "Third long long long long long long  long  long long long long long long  long  long long long long long long  long comment",
      }
  ]
 }
    onChangeComment = (event) => {
        this.setState ({
            comment: event
        })
    }

        renderItem = ({ item }) => {
        return (
         <Item
            user = {item.user}
            comment = {item.comment}
            
         />
        );
      };
ShowingUser = () =>
(
 1    //user 값에 맞는 연구원증
)
selectlike = () => {
 if(this.state.contentlike_state == false)
 {
    this.setState({
        contentlike_state : true,
    })
 }
 else
 {  
    this.setState({
        contentlike_state : false,
    })
 }
}
commentlist = () => (  
    <View style = {styles.commentView}>       
        <View style = {styles.commentlist}>
            <Text>
                {this.state.comment}
            </Text>
        </View>
        <View style = {styles.LikeBox}>
            <Text>
                좋아요{this.state.comment_like}
            </Text>
        </View>
        <View>
            <Text>
                대댓글 달기
            </Text>
        </View>
    </View>
)
//like값을 바꾸는 함수 추가

renderHeader= () => (

    <View style = {styles.mainView} > 
    <Text style = {styles.title}> 제목: {this.state.title} </Text> 
    <View> 
        
    </View>
    <View style = {styles.contentBox}>
        <Text>{this.state.content}</Text>
    </View>
    <View style = {styles.LikeBox}>
        <TouchableOpacity
            onPress = {() => {this.selectlike()}}>
            <Text> 좋아요 {this.state.content_like}</Text>
        </TouchableOpacity>
    </View>
    <View style = {styles.commentBox}>
        <TouchableOpacity>
            <Text>
                댓글달기
            </Text>
        </TouchableOpacity>
    </View>
   <View style= {{borderWidth: 1, borderColor: "#dea112", bottom : 30, borderTopWidth: 0, height: 60}}>
       <View>
         <TextInput
               title = "댓글"
               onChangeText = {this.onChangeComment}
               multiline={true}
               maxLength = {200}
               placeholder = "댓글을 입력하세요.."
              // onContentSizeChange = {}
               style = {{borderWidth: 1, height: 40, width : "70%", left: "15%", marginTop: 10}}
    
        />
        <TouchableOpacity 
         style = {{left : "87%", borderWidth : 1, width : '10%' ,alignItems :'center', justifyContent : "center", height : 40, bottom : 40}}>
           <Text >
            게시
          </Text>                      
        </TouchableOpacity>
     </View>
    </View>
   </View>

)

   render(){
        return(
           /* <View style = {styles.mainView} > 
                <Text style = {styles.title}> 제목: {this.state.title} </Text> 
                <View> 
                    
                </View>
                <View style = {styles.contentBox}>
                    <Text>{this.state.content}</Text>
                </View>
                <View style = {styles.LikeBox}>
                    <TouchableOpacity
                        onPress = {() => {this.selectlike()}}>
                        <Text> 좋아요 {this.state.content_like}</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.commentBox}>
                    <TouchableOpacity>
                        <Text>
                            댓글달기
                        </Text>
                    </TouchableOpacity>
                </View>
               <View style= {{borderWidth: 1, borderColor: "#dea112", bottom : 30, borderTopWidth: 0, height: 60}}>
                   <View>
                     <TextInput
                           title = "댓글"
                           onChangeText = {this.onChangeComment}
                           multiline={true}
                           maxLength = {200}
                           placeholder = "댓글을 입력하세요.."
                          // onContentSizeChange = {}
                           style = {{borderWidth: 1, height: 40, width : "70%", left: "15%", marginTop: 10}}
                
                    />
                    <TouchableOpacity 
                     style = {{left : "87%", borderWidth : 1, width : '10%' ,alignItems :'center', justifyContent : "center", height : 40, bottom : 40}}>
                       <Text >
                        게시
                      </Text>                      
                    </TouchableOpacity>
                 </View>
               </View>*/
               <SafeAreaView style = {{bottom : 30}}>
               <FlatList
             renderHeader = {this.renderHeader()}
             data = {this.state.DATA}
             renderItem= {this.renderItem}
             keyExtractor = {(item) => item.num}
                />
                </SafeAreaView>
        //    </View>
          
        )
    } 
}

const styles= StyleSheet.create({
    mainView: { 
        width: "100%",
        marginTop: '8%'
    },
    title: {
        fontSize : 17 ,
        left : "5%",
        marginBottom : 10
    },
    contentBox:{
        width: '90%',
        left : "5%"
    },
    LikeBox: {
        width: "50%",
        borderWidth: 1,
        borderColor: "#dea112",
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    commentBox: {
        width: "50%",
        borderWidth: 1,
        borderColor: "#dea112",
        height: 30,
        alignItems: 'center',
        bottom : 30,
        left: '50%',
        justifyContent: 'center'
    },
    commentlist:{
        width: "90%",
        left: "5%"
    },
    commentView :{

        borderColor : '#dea112'
    },
    commentContainer:
    {
      borderWidth: 1,
      padding : 8
    },
    commentCard: {
      paddingHorizontal : 8,
      paddingVertical: 8, 
      marginVertical : 8
    },
    box: {
      borderWidth: 1,
      borderColor : '#dea112' ,
      borderRadius: 9, 
      padding: 4,
      marginVertical: 10,
      marginHorizontal: 40,
    },
    userbox:{
      width : '100%',
      borderTopWidth: 1,
      paddingTop:5,
      marginHorizontal: 40,
      borderColor : '#dea112',
      right : '10%'
    },
  
    commnet: {
      fontSize: 16,
    },
})  

export default read;