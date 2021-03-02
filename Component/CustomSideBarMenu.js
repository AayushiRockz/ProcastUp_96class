import React , {Component} from 'react';
import {DrawerItems} from 'react-navigation-drawer';
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class CustomSideBarMenu extends Component {
  render(){
    return(
      <View style={{flex:1}}>
         <View style={{ flex: 0.8 }}>
          <DrawerItems {...this.props} />
        </View>

        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.button}
            onPress={()=>{firebase.auth.signOut
              this.props.navigation.navigate('Welcome')
            }}
          >
            <Text>Log Out</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    height:30,
    width:'80%',
    padding:10,
    justifyContent:'center'
  },
  logOutContainer:{
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },

})
