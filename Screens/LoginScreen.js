import React from 'react'
import {StyleSheet, Text, View, TextInput, 
        TouchableOpacity, Image, StatusBar, LayoutAnimation} from 'react-native';
import * as firebase from 'firebase'


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: "",
    password: "",
    errormessage: null,
  }

  handleLogin = () => {
    const {email, password} = this.state

    firebase.auth().signInWithEmailAndPassword(email, password).catch
    (error => this.setState({errormessage: error.message}))
  }
  
  render() {

    LayoutAnimation.easeInEaseOut();
    
    return(
      
      <View style= {styles.containner}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Image source = 
        {require("../Assets/logoUU.png")}  
        ></Image>
        <Text style = {styles.greeting}>Welcome To Uinniversity of Ulster</Text>

      <View style = {styles.errormessage}>
        {this.state.errormessage && <Text style = {styles.error}>{this.state.errormessage} </Text>}
        </View>

        <View style = {styles.form}>
      <TextInput style = {styles.inputStyle} underlineColorAndrorid = 'rgba(0,0,0,0) '
      placeholder = 'Username\Email' 
      placeholderTextColor = "#000000"
      onChangeText = {email => this.setState({email})}
      value = {this.state.email}
      autoCapitalize="none"
      />
      </View>
      
      <View style = {styles.form}>
      <TextInput style = {styles.inputStyle} underlineColorAndrorid = 'rgba(0,0,0,0) '
      placeholder = 'Password' 
      placeholderTextColor = "#000000"
      secureTextEntry
      autoCapitalize="none"
      onChangeText = {password => this.setState({password})}
      value = {this.state.password}
      />
      </View>
      
      <TouchableOpacity style = {styles.button} onPress = {this.handleLogin}>
      <Text>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {{ alignSelf: "center", marginTop: 32}} onPress = {() => this.props.navigation.navigate("Register")} >
      <Text>Do not have an account ? <Text style = {styles.signinTxt}>Sign up here </Text>
      </Text>
      </TouchableOpacity>
      
  </View>


    )
  }
}
  
  const styles = StyleSheet.create ({
    containner: {
      flex: 1,
    },
    form : {
      marginTop:-32,
      marginBottom: 48,
      marginHorizontal: 30,
    },
    errormessage : {
      
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 3

    },
    inputStyle: {
      color: "#8A8F9E",
      fontSize: 10,
      textTransform: "uppercase",
      borderBottomColor: "#8A8F9E",
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: 40,
      fontSize: 15,
    },
    button: {
      marginHorizontal: 30,
      borderBottomColor: "#8A8F9E",
      borderRadius: 4,
      height:52,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:38,

    },
    signinTxt: {
      color: "#414959"
    },
    greeting: {
      height: 72,
      textAlign: "center",
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 3
    },
    error : {
      color : "#E9446A",
      fontSize: 13,
      fontWeight: '600',
      textAlign: "center",
    }
    
  })

  
