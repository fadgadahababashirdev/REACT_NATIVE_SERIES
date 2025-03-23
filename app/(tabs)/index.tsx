import React, { Component } from 'react'
import { Text, View  , StyleSheet} from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> hello world </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1 ,
    flexDirection:"column"
  } ,
  text:{
    color:"red", 
    fontSize:20 ,
    fontWeight:"bold",
    textAlign:"center" ,
    marginTop:40
  }
})