import React , {Component} from 'react';
import {View,Text,TouchableOpacity, StyleSheet, Modal, ScrollView, KeyboardAvoidingView, TextInput, Alert, Touchable} from 'react-native';
import AppHeader from '../Component/AppHeader';
import MyHeader from '../Component/MyHeader';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import firebase from 'firebase';
import db from '../config';

export default class WelcomeScreen extends Component {

    constructor() {
        super();
        this.state = {
          emailId: "",
          password: "",
          firstName: "",
          lastName: "",
          address: "",
          contact: "",
          confirmPassword: "",
          isModalVisible: "false"
        };
      }
    
  userSignUp =(emailId, password, confirmPassword)=>{
    if (password !== confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection("users").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            email_id: this.state.emailId,
            address: this.state.address,
          
          });
          return Alert.alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () => this.setState({ isModalVisible: false })
            }
          ]);
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("Goals");
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  modal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.isModalVisible}
      >
        <ScrollView style={styles.scrollview}>
          <View style={styles.signupView}>
            <Text style={styles.signupText}> SIGN UP </Text>
          </View>
          <View style={{ flex: 0.95 }}>
            <Text style={styles.label}>First Name </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"First Name"}
              maxLength={12}
              onChangeText={text => {
                this.setState({
                  firstName: text
                });
              }}
            />

            <Text style={styles.label}>Last Name </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Last Name"}
              maxLength={12}
              onChangeText={text => {
                this.setState({
                  lastName: text
                });
              }}
            />

            <Text style={styles.label}>Contact </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Contact"}
              maxLength={10}
              keyboardType={"numeric"}
              onChangeText={text => {
                this.setState({
                  contact: text
                });
              }}
            />

            <Text style={styles.label}> Address </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Address"}
              multiline={true}
              onChangeText={text => {
                this.setState({
                  address: text
                });
              }}
            />

            <Text style={styles.label}>Email </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Email"}
              keyboardType={"email-address"}
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />

            <Text style={styles.label}> Password </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Confrim Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  confirmPassword: text
                });
              }}
            />
          </View>

          <View style={{ flex: 0.2, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() =>
                this.userSignUp=()=>{
                  (
                    this.state.emailId,
                    this.state.password,
                    this.state.confirmPassword
                  )
                }
              }
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButtonText}
              onPress={() => {
                this.setState({ isModalVisible: false });
              }}
            >
              Cancel
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    );
  };
    render(){
        return(

           <SafeAreaProvider>
                <AppHeader/>
                <MyHeader title="Welcome"/>

                <View>
         {this.modal()}
     </View>

     <View>

     <TextInput style={styles.screenInputs} placeholder="Email ID " keyboardType="email-address"/>
     <TextInput style={styles.screenInputs} placeholder="password" secureTextEntry={true}/>
        <TouchableOpacity  onPress={ this.userLogin(this.state.emailId, this.state.password)} style={styles.screenButton}>
            <Text style={styles.screenButtonText}>
                Log in
            </Text>
        </TouchableOpacity>

          
        <TouchableOpacity
           style={styles.button}
           onPress={()=>this.setState({ isModalVisible:true})}
           style={styles.screenButton}
           >
           <Text style={styles.screenButtonText}>SignUp</Text>
         </TouchableOpacity>

            </View>
                <TouchableOpacity 
                style={styles.button}
                onPress={()=>{this.props.navigation.navigate("Goals")}}>
                    <Text>Go</Text>
                </TouchableOpacity>

                </SafeAreaProvider>
        )
    }

}


const styles = StyleSheet.create({
    button:{
        width:50,
        height:100,
        borderWidth:4
    },
    scrollview: {
      flex: 1,
      backgroundColor: "#fff"
    },
  signupView: {
    flex: 0.05,
    justifyContent: "center",
    alignItems: "center"
  },
  signupText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#32867d"
  },
  label: {
    fontSize: 13,
    color: "#717D7E",
    fontWeight: "bold",
    paddingLeft: 10,
    marginLeft: 20
  },
  registerButton: {
    width: "75%",
    height: 50,
    marginTop:20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:3,
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 10
  },
  registerButtonText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff"
  },
})


