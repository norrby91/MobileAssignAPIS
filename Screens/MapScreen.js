import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase'

export default class MapScreen extends React.Component {
  state = {
    email: "",
    displayName: ""
  }

componentDidMount(){
  const {email, displayName} = firebase.auth().currentUser

  this.setState({email, displayName})
}

signOutUser = () => {
      firebase.auth().signOut();
}

  render() {
    return(
        <View style= {styles.containner}>
            <Text>Hi {this.state.email}</Text>
            <TouchableOpacity style = {{marginTop: 32}} onPress={this.signOutUser}>
              <Text> Logout of map screen</Text>

            </TouchableOpacity>
        </View>
    )
  }
}
  
  const styles = StyleSheet.create ({
    containner: {
      flex: 1,
      padding :20,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
  
    },
    form : {
      flex: 1
    }
  })