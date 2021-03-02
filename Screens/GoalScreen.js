import React , {Component} from 'react';
import {View,Text, TextInput, TouchableOpacity, Image} from 'react-native';
import MyHeader from '../Component/MyHeader';


export default class GoalsScreen extends Component{
    render(){
        return(
    
            <View style={{flex:1}} >
               <MyHeader title="My Goals"/>
            
            
                <TextInput placeholder="What are your long term goals?"
                    style={{width:'60%',
                            height:'70%',
                            borderWidth:2,
                            alignSelf:'center'
                            }}
                            
                    />
                    <TouchableOpacity>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                    
            </View>
    
        )
    }

}