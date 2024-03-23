import React, {useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Platform} from 'react-native';
import NavProps from '../../models/props/NavProps';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EditTextComponent from '../../component/EditTextComponent';
import {
  faShop,
  faPhone,
  faLocationDot,
  faEnvelope,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import TextComponent from '../../component/TextComponent';
import ButtonComponent from '../../component/ButtonComponent';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {appColors} from '../../constants/appColors';
import AlertComponent from '../../component/AlertComponent';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import LoadingComponent from '../../component/LoadingComponent';

const RegisterUserScreen: React.FC<NavProps> = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRepass] = useState('');
  const [isChecked, setChecked] = useState<boolean>();
  const [showAlert, setShowAlert] = useState(false);
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  
  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const validateInputs = () => {
    if (!name.trim()) {
      return 'Vui lòng nhập tên cửa hàng';
    }

    if (!phone.trim() || !/^\d{10}$/.test(phone.trim())) {
      return 'Vui lòng nhập số điện thoại hợp lệ (10 số)';
    }

    if (!address.trim()) {
      return 'Vui lòng nhập địa chỉ';
    }

    if (!userName.trim() || !/^\S+@\S+\.\S+$/.test(userName.trim())) {
      return 'Vui lòng nhập địa chỉ email hợp lệ';
    }

    if (!pass.trim()) {
      return 'Vui lòng nhập mật khẩu';
    }

    if (pass.trim() !== rePass.trim()) {
      return 'Mật khẩu nhập lại không khớp với mật khẩu ban đầu';
    }

    if (!isChecked) {
      return 'Vui lòng đồng ý với điều khoản dịch vụ';
    }

    return null;
  };
 

  const handelRegister = () => {
    const errorMessage = validateInputs();
    if (errorMessage) {
      setMsg(errorMessage);
      handleShowAlert();
      return;
    }
    
  };


  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Đảm bảo bàn phím không che phủ các EditText
  >  
      <View style={styles.header}>
        <TextComponent
          text="Đăng Ký"
          size={20}
          styles={{fontWeight: 'bold', textAlign: 'center'}}
        />
        <TextComponent
          text="Nhập thông tin cá nhân"
          size={14}
          styles={{fontWeight: 'bold', textAlign: 'center'}}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.viewEditTex}>
          <EditTextComponent
            label="text"
            placeholder="Họ và tên"
            value={name}
            iconColor="gray"
            onChangeText={setName}
            icon={faShop}
          />
      
          <EditTextComponent
            label="text"
            placeholder="Email"
            value={userName}
            iconColor="gray"
            onChangeText={setUserName}
            icon={  faUser }
          />

          <EditTextComponent
            label="pass"
            placeholder="Nhập mật khẩu"
            value={pass}
            iconColor="gray"
            onChangeText={setPass}
            icon={faLock}
          />

          <EditTextComponent
            label="pass"
            placeholder="Nhập lại mật khẩu"
            value={rePass}
            iconColor="gray"
            onChangeText={setRepass}
            icon={faLock}
          />
        </View>
        <View style={{flexDirection: 'row', backgroundColor: ' black',paddingTop: 15, paddingBottom:20}}>
          <BouncyCheckbox
            size={20}
            fillColor={appColors.primary}
            unfillColor="#FFFFFF"
            text="Tôi đồng ý với "
            innerIconStyle={{borderWidth: 1.5}}
            textStyle={{
              textDecorationLine: 'none',
              color: 'black',
              fontSize: 14,
            }}
            isChecked={isChecked}
            onPress={(isChecked: boolean) => {
              setChecked(isChecked);
            }}
            // onPress={handelCheked}
            style={{paddingLeft: 15}}
          />
          <ButtonComponent
            type="link"
            text="điều khoản dịch vụ"
            textStyles={{
              fontSize: 14,
              textDecorationLine: 'underline',
            }}
          />
        </View>

        <ButtonComponent
          type="primary"
          text="Hoàn tất đăng ký"
          textStyles={{color: 'white', fontSize: 20, fontWeight: 'bold'}}
          onPress={handelRegister}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.signOut}>
          <TextComponent
            text="Đã có tài khoản "
            styles={{color: 'black', fontSize: 18}}
          />
          <ButtonComponent
            type="link"
            text="Đăng nhập"
            textStyles={{
              fontSize: 18,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
            }}
            onPress={() => {navigation.navigate('LoginScreen')}}
          />
        </View>
        <AlertComponent
          visible={showAlert}
          message={msg}
          onClose={handleCloseAlert}
        />
        <LoadingComponent visible={isLoading}/>
      </View>
  
    </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  container: {
  
backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    height: hp(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    height: hp(80),
    
  },
  viewEditTex: {
    height: hp(35),
    justifyContent: 'space-between',
  },
  footer: {
    marginTop: 20,
    height: hp(4),
  },
  signOut: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default RegisterUserScreen;
