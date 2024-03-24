import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerItemList,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
import {
  Feather,
  MaterialIcons,
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  Foundation,
} from "@expo/vector-icons";
//import compoent
import ManHinhLogin from "./ManHinhLogin";
import ManHinhChinh from "./ManHinhChinh";
import QuanLyVoucher from "./QuanLyVoucher";
import KhachHangScreen from "./KhachHangScreen";
import NhanVienScreen from "./ProfileScreen";
import ManHinhSignUp from "./ManHinhSignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DrawerNavigation({ navigation }) {
  const [tenNhanVien, setTenNhanVien] = useState("");
  const [chucVu, setChucVu] = useState("");
  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    const nhanVienToken = await AsyncStorage.getItem("nhanVienToken");
    setTenNhanVien(nhanVienToken);
    console.log(token + " nhan vien token : " + nhanVienToken);
  };

  const checkChucVuToken = async () => {
    const chucVuToken = await AsyncStorage.getItem("chucVuToken");
    setChucVu(chucVuToken);
    console.log(chucVu);
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("nhanVienToken");
    await AsyncStorage.removeItem("chucVuToken");
    navigation.navigate("Login");
  };

  useEffect(() => {
    checkToken();
    checkChucVuToken();
  }, []);
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 150,
                width: "90%",
                alignItems: "center",
                borderBottomColor: "#000000",
                borderBottomWidth: 0.5,
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <Image
                source={require("../assets/Maskgroup.png")}
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 50,
                }}
              />
              <View style={{ flexDirection: "column", margin: 10 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#111",
                  }}
                >
                  Hello
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    color: "#111",
                    fontWeight: "bold",
                  }}
                >
                  Bui Van A
                </Text>
              </View>
            </View>
            <DrawerItemList {...props} />
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                margin: 15,
                alignItems: "center",
              }}
              onPress={handleLogout}
            >
              <MaterialCommunityIcons name="logout" size={30} color="black" />
              <Text
                style={{
                  marginLeft: 30,
                  color: "#111",
                  fontWeight: "500",
                  fontSize: 14,
                }}
              >
                Đăng Xuất
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 250,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        },
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#111",
        headerTitleStyle: {
          fontWeight: "500",
          fontSize: 18,
        },
        drawerLabelStyle: {
          color: "#111",
        },
      }}
      initialRouteName="Màn Hình Chính"
    >
      <Drawer.Screen
        name="Màn Hình Chính"
        options={{
          drawerLabel: "Màn Hình Chính",
          title: "Màn Hình Chính",
          drawerIcon: () => <Feather name="home" size={24} color="black" />,
        }}
        component={ManHinhChinh}
      />

      <Drawer.Screen
        name="Voucher"
        component={QuanLyVoucher}
        options={{
          drawerLabel: "Voucher",
          title: "Voucher",
          drawerIcon: () => (
            <Foundation
              name="dollar-bill"
              size={25}
              color="black"
              style={{ margin: 3 }}
            />
          ),
        }}
      />
 
      <Drawer.Screen
        name="Thông tin cá nhân"
        component={NhanVienScreen}
        options={{
          drawerLabel: "Thông tin cá nhân",
          title: "Thông tin cá nhân",
          drawerIcon: () => <Fontisto name="persons" size={24} color="black" />,
        }}
      />
      {chucVu === "Quản lý" ? (
        <Drawer.Screen
          name="Khách Hàng"
          component={NhanVienScreen}
          options={{
            drawerLabel: "Khách Hàng",
            title: "Khách Hàng",
            drawerIcon: () => (
              <Ionicons name="person" size={24} color="black" />
            ),
          }}
        />
      ) : null}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
