import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import TextComponent from '../../component/TextComponent';
import {
  faShop,
  faPhone,
  faLocationDot,
  faEnvelope,
  faTimes,
  faTimeline,
  faTimesCircle,
  faTimesSquare,
  faClock,
  faPlane,
  faMessage,
  faLocation,
  faLocationPin,
} from '@fortawesome/free-solid-svg-icons';
import NavProps from '../../models/props/NavProps';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CuaHang} from '../../models/CuaHang';
import {Route} from 'react-native-tab-view';
import authenticationAPI from '../../apis/authApi';

const MainCuaHangScreen: React.FC<NavProps> = ({navigation}) => {


  return (
    <ScrollView style={styles.container}>
      <Text>đây là màn hình chính</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: 'white',
  },
  line: {
    borderBottomWidth: 2,
    borderColor: '#D2D2D2',
    marginBottom: 10,
  },
  userLogo: {
    width: 392,
    height: 155,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 10,
  },

});

export default MainCuaHangScreen;
