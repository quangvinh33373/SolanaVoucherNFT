import React, {useEffect, useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Alert,
  Image,
  Pressable,
  Switch,
} from 'react-native';
import NavProps from '../models/props/NavProps';

import {faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EditTextComponent from '../component/EditTextComponent';
import ButtonComponent from '../component/ButtonComponent';
import {appColors} from '../constants/appColors';
import {Text} from 'react-native-svg';
import {text} from '@fortawesome/fontawesome-svg-core';
import TextComponent from '../component/TextComponent';
import AppPath from '../component/appPath';

import AlertComponent from '../component/AlertComponent';
import LoadingComponent from '../component/LoadingComponent';
// import authenticationAPI from '../apis/authApi';

const {height, width} = Dimensions.get('window');

const LoginScreen: React.FC<NavProps> = ({navigation}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [msg, setMsg] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState<boolean>();
  const [isRemember, setIsRemember] = useState(false);

  // console.log()

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleUserNameChange = (text: string) => {
    setUserName(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const validateInputs = () => {
    if (!userName.trim()) {
      return 'Vui lòng nhập tài khoản';
    }
  
    if (!password.trim()) {
      return 'Vui lòng nhập mật khẩu';
    }
  
    return null;
  };
  

  
  const handleLogin = async () => {
    const errorMessage = validateInputs();
  
    if (errorMessage) {
      setMsg(errorMessage);
      handleShowAlert(); // Hiển thị thông báo lỗi
      return;
    }
  
    // Kiểm tra tên người dùng và mật khẩu
    if (userName === 'admin' && password === '123') {
      handleCloseAlert(); // Tắt thông báo lỗi nếu có
      navigation.navigate('HomeScreen'); // Đăng nhập thành công, chuyển hướng đến màn hình Home
    } else {
      setMsg('Tài khoản hoặc mật khẩu không chính xác');
      handleShowAlert(); // Hiển thị thông báo lỗi
    }
  };
  
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <View style={styles.header}>
          <Image
              style={{width:180,height:180}}
              source={require('../assest/voucher.png')}
            />
          </View>
          <View style={styles.main}>
            <EditTextComponent
              label="text"
              placeholder="Nhập tài khoản"
              value={userName}
              iconColor="gray"
              onChangeText={handleUserNameChange}
              icon={faUser}
            />

            <EditTextComponent
              label="pass"
              placeholder="Nhập mật khẩu"
              value={password}
              iconColor="gray"
              onChangeText={handlePasswordChange}
              icon={faLock}
            />
            <View style={styles.viewButton}>
              <View style={{flexDirection: 'row'}}>
                <Switch
                  style={{paddingLeft: 10}}
                  trackColor={{true: appColors.primary}}
                  thumbColor={appColors.white}
                  value={isRemember}
                  onChange={() => {
                    setIsRemember(!isRemember);
                  }}
                />
                <TextComponent
                  styles={{
                    alignSelf: 'center',
                    paddingLeft: 10,
                    color: appColors.primary,
                    fontWeight: 'bold',
                  }}
                  text="Nhớ mật khẩu"
                  size={14}
                />
              </View>

              <ButtonComponent
                type="link"
                text="Quên mật khẩu ?"
                onPress={() => navigation.navigate('UpdatePasswordScreen')}
                textStyles={{fontWeight: 'bold'}} // Cập nhật style ở đây
              />
            </View>
            <ButtonComponent
              type="primary"
              text="Đăng nhập"
              textStyles={{color: 'white', fontSize: 20, fontWeight: 'bold'}}
              onPress={handleLogin}
            />
          </View>
          <View style={{height: hp(7)}}>
            <AppPath />
          </View>
          <View style={styles.footer}>

            <View style={styles.signOut}>
              <TextComponent
                
                text="Bạn chưa có tài khoản?  "
                styles={{color: 'black', fontSize: 18}}
              />
              <ButtonComponent
                type="link"
                text="Đăng ký"
                textStyles={{
                  fontSize: 18,
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                }}
                onPress={() => {
                  navigation.navigate('RegisterUserScreen');
                }}
              />
              <AlertComponent
                visible={showAlert}
                message={msg}
                onClose={handleCloseAlert}
              />
              <LoadingComponent visible={loading ?? false} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    height: hp(100),
  },
  header: {
    height: hp(30),
    padding: 20,
    // backgroundColor: 'black',
    justifyContent: 'center',
  },

  main: {
    height: hp(40),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  viewButton: {
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 5,
    width: wp(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footer: {
    height: hp(23),
    flexDirection: 'column',
  },
  signOut: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default LoginScreen;
