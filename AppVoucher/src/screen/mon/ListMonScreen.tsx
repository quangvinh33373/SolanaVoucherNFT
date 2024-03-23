import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, Button } from 'react-native';
import NavProps from '../../models/props/NavProps';
import { Mon } from '../../models/Mon';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { faMagnifyingGlass, faSearch, faAdd, } from '@fortawesome/free-solid-svg-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import EditTextComponent from '../../component/EditTextComponent';
import DropdownPicker from '../../component/drowpdown/DropdownPicker';
import authenticationAPI from '../../apis/authApi';
import ButtonComponent from '../../component/ButtonComponent';
import { TextBold } from 'iconsax-react-native';
import TextComponent from '../../component/TextComponent';
import AddMonScreen from '../../screen/mon/AddMonScreen';
import {appColors} from '../../constants/appColors';
import DropDownComponent from '../../component/DropDownComponent';
import FloatButtonComponent from '../../component/FloatButtonComponent';
import LoadingComponent from '../../component/LoadingComponent';





const ListMonScreen: React.FC<NavProps> = ({ navigation }) =>  {

 


 




    return (
      <Text>đây là màn voucher</Text>
   
    );

 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    position: 'relative', // Add this line to make positioning easier
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: 195,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop: 10,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: '30%',
    aspectRatio: 1, 
    marginRight: 10,
    borderRadius: 20,
  },
  infoContainer: {
    width: '70%',
  },
  name: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#000000',
  },
  type: {
    fontSize: 16,
    color: '#000000',
  },
  status: {
    fontSize: 16,
    color: '#000000',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#5a9223',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 3, 
  },

  main: {
    height: hp(18),
    justifyContent: 'space-between',
  },
  footer: {
    justifyContent: 'center',
    height: hp(65),
    padding: 10,
  },
  viewDropDow: {
    padding: 10,
    flexDirection: 'row',
    width: wp(100),
    justifyContent: 'space-between',
  },
  item: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    marginTop: 15,
    borderRadius: 10,
    flexDirection: 'row',
  },
 
});

export default ListMonScreen;