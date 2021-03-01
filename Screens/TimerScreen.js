import React , {Component} from 'react';
import {View,Text} from 'react-native';
import MyHeader from '../Component/MyHeader';

export default class TimerScreen extends Component{
    render(){
        return(

            <View>
              <MyHeader title="Timer"/>
            </View>
        )
    }

}