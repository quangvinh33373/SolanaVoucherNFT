import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import SplashScreen from './src/screen/SplashScreen';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import RegisterUserScreen from './src/screen/register/RegisteUserScreen';
import DetailNhanVienScreen from './src/screen/nhanvien/DetailNhanVienScreen';
import EditNhanVienBanScreen from './src/screen/nhanvien/EditNhanVienBanScreen';
import DetailMonScreen from './src/screen/mon/DetailMonScreen';
import AddMonScreen from './src/screen/mon/AddMonScreen';
import HeaderRightComponent from './src/component/options-menu/HeaderRightComponent';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import EditMonScreen from './src/screen/mon/EditMonScreen';
import UpdatePasswordScreen from './src/screen/nhanvien/UpdatePasswordScreen';

const Stack = createStackNavigator();
interface AppProps {}
const App: React.FC<AppProps> = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <MenuProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="SplashScreen"
              screenOptions={{headerTitleAlign: 'left'}}>
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
              />
              {/* Đăng nhập và đăng ký */}
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="RegisterUserScreen"
                component={RegisterUserScreen}
                options={{headerShown: false}}
              />
              
              {/* Trang chủ với nav bar */}
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={({navigation}) => ({
                  title: 'Food Center',
                  headerRight: () => (
                    <HeaderRightComponent navigation={navigation} />
                  ),
                })}
              />
            
          

              <Stack.Screen
                name="DetailNhanVienScreen"
                component={DetailNhanVienScreen}
                options={{title: 'Thông tin nhân viên'}}
              />
              <Stack.Screen
                name="EditNhanVienBanScreen"
                component={EditNhanVienBanScreen}
                options={{title: 'Sửa nhân viên'}}
              />
              <Stack.Screen
                name="UpdatePasswordScreen"
                component={UpdatePasswordScreen}
                options={{title: 'Đổi mật khẩu'}}
              />
              {/* Trang quản lý món */}
              <Stack.Screen
                name="DetailMonScreen"
                component={DetailMonScreen}
                options={{title: 'Chi tiết món'}}
              />
              <Stack.Screen
                name="AddMonScreen"
                component={AddMonScreen}
                options={{title: 'Thêm món'}}
              />
              <Stack.Screen name="EditMonScreen" component={EditMonScreen}  options={{ title: 'Sửa thông tin món'}}/>

                     </Stack.Navigator>
          </NavigationContainer>
        </MenuProvider>
      {/* </PersistGate> */}
    </Provider>
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
  },
});

export default App;
