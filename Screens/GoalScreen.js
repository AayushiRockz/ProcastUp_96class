import React , {Component} from 'react';
import {View,Text, TextInput, TouchableOpacity} from 'react-native';
import MyHeader from '../Component/MyHeader';

export default class GoalsScreen extends Component{
    render(){
        return(

            <View>
               <MyHeader title="My Goals"/>
            
            <TextInput/>
            <TextInput/>
            <TouchableOpacity>
                <Text>Submit</Text>
            </TouchableOpacity>
            
            </View>
        )
    }

}