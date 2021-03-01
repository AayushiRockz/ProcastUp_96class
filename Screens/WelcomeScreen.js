import React , {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import MyHeader from '../Component/MyHeader';

export default class WelcomeScreen extends Component{
    render(){
        return(

            <View>
                <MyHeader title="Welcome"/>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Goals")}}>
                    <Text>Go</Text>
                </TouchableOpacity>

            </View>
        )
    }

}