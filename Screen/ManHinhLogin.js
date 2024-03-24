import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert, Pressable, Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Linking } from 'react-native';
import { Connection, PublicKey } from '@solana/web3.js';
import { clusterApiUrl } from '@solana/web3.js';
import {transact, Web3MobileWallet} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import AppLink from 'react-native-app-link';
import SendIntentAndroid from 'react-native-send-intent';
export default function ManHinhLogin(props) {
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  const [chucVu, setChucVu] = useState("Quản lý");
  const [listNhanVien, setListNhanVien] = useState([]);


    const handleButtonPress = () => {

    };
  const login = async () => {
    props.navigation.navigate("Menu");
  };
  const changeScreen = async () => {
    props.navigation.navigate("ManHinhSignUp");
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 140, flex: 1 }}
        source={{
          uri: "https://o.remove.bg/downloads/f0cbd5fe-1b68-4e42-8a05-434514924233/Rectangle_1__1_-removebg-preview.png",
        }}
      />
      <View style={{ flexDirection: "column", margin: 10, padding: 20 }}>
        {/* form header  */}
        {/*  <Pressable onPress={handleButtonPress} style={styles.pressableMargin}>*/}
        {/*  </Pressable>*/}

        <Text style={{ fontSize: 36, color: "#35C2C1", fontWeight: "bold" }}>
          Welcome Back!
        </Text>
        <Text
          style={{
            fontSize: 30,
            color: "#35C2C1",
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Login Here
        </Text>

        {/* input username  */}
        <Text style={{ fontSize: 14, color: "#35C2C1" }}>Username*</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#35C2C1",
            height: 40,
            padding: 10,
            marginBottom: 15,
          }}
          onChangeText={(txt) => {
            setUsername(txt);
          }}
        />
        {/* input password  */}
        <Text style={{ fontSize: 14, color: "#35C2C1" }}>Password*</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#35C2C1",
            height: 40,
            padding: 10,
          }}
          onChangeText={(txt) => {
            setPassword(txt);
          }}
        />

        {/* text remember  */}
        <Text
          style={{
            fontSize: 14,
            color: "#35C2C1",
            alignSelf: "flex-end",
            fontWeight: "bold",
            paddingTop:20
          }}
        >
          Forgot Password?
        </Text>
        <TouchableOpacity
          style={{
            width: "30%",
            backgroundColor: "#35C2C1",
            alignItems: "center",
            borderRadius: 10,
            padding: 7,
            marginTop: 1,
          }}
          onPress={() => {
            login();
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>

          {/* nút đăng ký */}
          <View style={styles.signOut}>
        <Text
          style={{ color: "#C2BEBE", fontSize: 18 }}
          text="Bạn chưa có tài khoản?  "
          // styles={{color: '#C2BEBE', fontSize: 18}}
        />
        <View style={styles.signOut}>
          <Text style={{ color: "#C2BEBE", fontSize: 18 }}>
            Bạn chưa có tài khoản?{" "}
          </Text>
          <TouchableOpacity
            onPress={changeScreen}
          >
            <Text
              style={{
                fontSize: 18,
                textDecorationLine: "underline",
                fontWeight: "bold",
                color: "#007bff",
              }}
            >
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>


      <View style={{ flex: 1 }}>
        <Image
          style={{ width: "100%" }}
          source={require("../assets/Rectangle_3-removebg-preview.png")}
        />
      </View>



      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  signOut: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  }

});
