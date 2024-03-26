import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
//import thư viện navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
//import compoent
import ManHinhChao from './Screen/ManHinhChao';
import ManHinhLogin from './Screen/ManHinhLogin';
import ManHinhChinh  from './Screen/ManHinhChinh';
import ManHinhSignUp from './Screen/ManHinhSignUp';
import QuanLyVoucher from './Screen/QuanLyVoucher';
import WalletScreen from './Screen/WalletScreen';
import NhanVienScreen from './Screen/ProfileScreen';
import DrawerNavigation from './Screen/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Màn Hình Chào' screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen name='Màn Hình Chào' component={ManHinhChao} />
        
        <Stack.Screen name='Login' component={ManHinhLogin}/>
        <Stack.Screen name='ProfileScreen' component={NhanVienScreen}/>
          <Stack.Screen name='ManHinhSignUp' component={ManHinhSignUp}/>
          <Stack.Screen name='WalletScreen' component={WalletScreen}/>
        <Stack.Screen name='Menu' component={DrawerNavigation}
        />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHotel:{
      width:100,
      height:50,
  }
});
