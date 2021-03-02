import React from 'react';
import {AppTabNavigator} from './AppTabNavigator';
import SettingsScreen from '../Screens/SettingsScreen';
import CompletedGoalsScreen from '../Screens/CompletedGoalsScreen';
import RewardScren from '../Screens/RewardScreen';
import {createDrawerNavigator} from 'react-navigation-drawer'; 
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawer = createDrawerNavigator({
    Home:{
        screen: AppTabNavigator
    },
    Settings:{
        screen:SettingsScreen
    },
    CompletedGoals:{
        screen:CompletedGoalsScreen
    },
    Reward:{
        screen:RewardScren
    }
},
{
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  }

)