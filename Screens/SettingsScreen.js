import React , {Component} from 'react';
import {View,Text} from 'react-native';
import MyHeader from '../Component/MyHeader';

export default class SettingsScreen extends Component{
    render(){
        return(

            <View>
               <MyHeader title="Settings"/>
            </View>
        )
    }

}