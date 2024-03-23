import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import React , {useEffect, useState} from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment';


const styles = StyleSheet.create({
  root: { flex: 1 },
  container: { flex: 1, justifyContent: "flex-start" },
  cardView: {
    backgroundColor: "#F7F8F9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 15,
    borderRadius: 10,
    width: 160,

  },
});
export default function ManHinhChinh() {
  const [tenNhanVien, setTenNhanVien] = useState("");
  const [listPhong, setListPhong] = useState([]);
  const [listDatPhong, setListDatPhong] = useState([]);
  
 

  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <ImageBackground
        style={styles.container}
        source={require("../assets/background.png")}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: 100,
            margin: 20,
            borderRadius: 15,
          }}
        >
          <View
            style={{
              backgroundColor: "#8CDBDA",
              height: 80,
              margin: 10,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              shadowColor: "#fff",
              shadowOpacity: 1,
              shadowOffset: 2,
            }}
          >
            <Image
              style={{ width: 50, height: 50, borderRadius: 20, margin: 20 }}
              source={require("../assets/avtPerson.png")}
            />

            <View style={{alignSelf:"center"}}>
              <Text style={{ fontSize: 16, fontWeight: 700 }}>Bui Van A</Text>
              <View style={{flexDirection:"row" , alignItems:"center"}}>

                <Image
                  style={{ width: 10, height: 10, borderRadius: 20, }}
                  source={require("../assets/image_66.png")}
                />
                <Text style={{ fontSize: 14, fontWeight: "400", marginLeft: 10 }}>Online</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", flex: 1, alignItems: "flex-end", justifyContent: "flex-end" }}>
              <Image
                style={{ width: 50, height: 50, }}
                source={require("../assets/Group_1000003409.png")}
              />
              <Image
                style={{ width: 50, height: 50, }}
                source={require("../assets/Group_1000003404.png")}
              />
            </View>
          </View>
        </View>
      
      </ImageBackground>
    </View>
  );
}
