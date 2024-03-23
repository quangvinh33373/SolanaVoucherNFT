import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faChartLine, faUtensils, faReceipt, faUsers, faGear, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import MainCuaHangScreen from "./cuahang/MainCuaHangScreen"
import ListMonScreen from "./mon/ListMonScreen"
import ListNhanVienScreen from "./nhanvien/ListNhanVienScreen"
import NavProps from '../models/props/NavProps';
import HeaderRightComponent from '../component/options-menu/HeaderRightComponent';
import DetailNhanVienScreen from './nhanvien/DetailNhanVienScreen';

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC<NavProps> = ({ navigation }) =>  {

  const renderTabScreenOptions = (label: string, icon: IconProp) => ({
    tabBarIcon: ({ color, size }: { color: string; size: number }) => (
      <FontAwesomeIcon icon={icon} size={size} color={color} />
    ),
    tabBarLabel: label,
    tabBarActiveTintColor: '#39230F',
    tabBarInactiveTintColor: '#644932',
    headerShown: false // Hide the header title
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFECBC',
          paddingTop: 3,
          paddingBottom: 3,
          elevation: 8
        },}} initialRouteName='MainCuaHangScreen'>
   
      <Tab.Screen 
        name="ListMonScreen" 
        component={ListMonScreen} 
        options={renderTabScreenOptions('Voucher', faMoneyBill)}
      />
      <Tab.Screen 
        name="MainCuaHangScreen" 
        component={MainCuaHangScreen} 
        options={renderTabScreenOptions('Cửa hàng', faHome)}
      />
  
      <Tab.Screen 
        name="DetailNhanVienScreen" 
        component={DetailNhanVienScreen} 
        options={renderTabScreenOptions('Profile', faUsers)}
      />
    </Tab.Navigator>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacity: {
    marginLeft: 15,
    marginRight: 15,
  }
});

export default HomeScreen;