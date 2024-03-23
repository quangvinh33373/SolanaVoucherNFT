import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Button,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Feather,
  MaterialIcons,
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  EvilIcons,
} from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

export default function NhanVienScreen() {
  // value compoent
  const [_id, setId] = useState();
  const [tenNhanVien, setTenNhanVien] = useState("");
  const [sdt, setSdt] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [chucVu, setChucVu] = useState("");
  const [listChucVu, setListChucVu] = useState(["Lễ tân", "CEO"]);
  //value list
  const [listNhanVien, setListNhanVien] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [showDialogChucNang, setShowDiaLogChucNang] = useState(false);
  const [search, setSearch] = useState("");
  const [oldListNV, setOldListNV] = useState([]);
  const [title, setTitle] = useState("");

  const handelUpdate = async () => {
    // props.navigation.navigate("Menu");
  };

  return (
    <View style={{ flex: 1, opacity: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={{ width: 120, height: 120, borderRadius: 5 }}
            source={require("../assets/avtPerson.png")}
          />
        </View>
        <View style={styles.main}>
          <View style={styles.viewText}>
            <Text>Tên</Text>
            <Text style={styles.textPrimary}>Bui Van A</Text>
          </View>

          <View style={styles.viewText}>
            <Text>Ngày sinh của bạn</Text>
            <Text style={styles.textPrimary}>19/9/2003</Text>
          </View>

          <View style={styles.viewText}>
            <Text style={{ fontSize: 15 }}>Số điện thoại</Text>
            <Text style={styles.textPrimary}>0365203065</Text>
          </View>

          <View style={styles.viewText}>
            <Text>Địa chỉ</Text>
            <Text
              style={[styles.textPrimary, styles.wrapText, styles.addressText]}
            >
              Đường x - Phố x - TP X - X
            </Text>
          </View>

          <View style={styles.viewText}>
            <Text>Tiểu sử</Text>
            <Text style={styles.textPrimary}>Còn ỉa là còn sống</Text>
          </View>
        </View>
      </View>
           {/* dialog action insert - update  */}
           <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
          style={styles.cardView}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableWithoutFeedback
              onPressOut={() => setModalVisible(false)}
              style={{ backgroundColor: "#fff", width: "100%" }}
            >
              <View style={styles.centeredView}>
                <TouchableWithoutFeedback
                  style={{ backgroundColor: "#fff", width: "100%" }}
                >
                  <View style={styles.modalView}>
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>
                      {title}
                    </Text>
                    <TextInput
                      placeholderTextColor={"#767b83"}
                      style={styles.inputStyle}
                      // keyboardType="numeric"
                      value={tenNhanVien}
                      mode="outlined"
                      placeholder="Nhập tên"
                    />
                    <TextInput
                      placeholderTextColor={"#767b83"}
                      style={styles.inputStyle}
                      value={sdt}
                      mode="outlined"
                      placeholder="Nhập ngày sinh"
                    />
                    <TextInput
                      placeholderTextColor={"#767b83"}
                      style={styles.inputStyle}
                      value={matKhau}
                      mode="outlined"
                      placeholder=" Nhập số di động"
                    />
                    <TextInput
                      placeholderTextColor={"#767b83"}
                      style={styles.inputStyle}
                      value={matKhau}
                      mode="outlined"
                      placeholder=" Nhập địa chỉ"
                    />
                    <TextInput
                      placeholderTextColor={"#767b83"}
                      style={styles.inputStyle}
                      value={matKhau}
                      mode="outlined"
                      placeholder=" Nhập tiểu sử"
                    />
                  
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                       
                      }}
                    >
                      <Text style={{ textAlign: 'center',fontWeight:'bold',fontSize:20,width: 100,color: "#fff" }}>Lưu</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Modal>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
              {

                setModalVisible(true);
                setTitle("Sửa Thông Tin Khách Hàng")
                setId(0);
                setTenNhanVien("");
                setMatKhau("");
                setSdt("");
                setChucVu("");
              }
            }}
        >
          <Text style={styles.buttonText}>Sửa thông tin</Text>
        </TouchableOpacity>
       
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  cardView: {
    backgroundColor: "#000",
    margin: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    borderRadius: 10,
    flex: 1,
  },
  cardView: {
    backgroundColor: "#000",
    margin: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    borderRadius: 10,
    flex: 1,
  },
  //searchview
  sectionStyle: {
    width: "85%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "white",
    margin: 10,
    borderRadius: 5,
    elevation: 10,
    padding: 7,
    alignSelf: "center",
  },
  // input style
  inputStyle: {
    width: 280,
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
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    width: "100%",
  },
  //style dialog
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    width: "85%",
    alignItems: "center",
  },
  main: {
    paddingHorizontal: 10,
    flex: 1,
  },
  footer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  viewText: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textPrimary: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  wrapText: {
    flexWrap: "wrap",
    textAlign: "right",
  },
  addressText: {
    flex: 1,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
