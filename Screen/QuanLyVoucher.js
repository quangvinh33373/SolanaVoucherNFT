import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TextInput, FlatList, TouchableOpacity, Modal, Button, Alert, TouchableWithoutFeedback } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Feather, MaterialIcons, FontAwesome, Fontisto, MaterialCommunityIcons, Ionicons, SimpleLineIcons, EvilIcons } from '@expo/vector-icons';


export default function QuanLyVoucher({ navigation }) {

    const [_id, setId] = useState();
    const [tenPhong, setTenPhong] = useState();
    const [tienThueTheoGio, setTienThueTheoGio] = useState();
    const [tienThueTheoNgay, setTienThueTheoNgay] = useState();

    const [tinhTrang, setTinhTrang] = useState("Yes");

    const [maLoaiPhong, setMaLoaiPhong] = useState([]);
    const [selectLoaiPhong, setSelectLoaiPhong] = useState();

    const [listPhong, setListPhong] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    //mới
    const [btnLeft, setBtnLeft] = useState("");
    const [btnRight, setBtnRight] = useState("");

    const [showDialogChucNang, setShowDiaLogChucNang] = useState(false);

    const [title, setTitle] = useState("");

    const [search, setSearch] = useState("");
    const [oldListPhong, setOldListPhong] = useState([]);

  

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../assets/background.png')} // Đường dẫn tới ảnh
                style={styles.backgroundImage}
            >
                {/* Nội dung của component */}
                <View style={styles.sectionStyle}>
                    {/* search view*/}
                    <Image
                        source={require("../assets/searchview.png")}
                        style={{
                            height: 30,
                            width: 30,
                        }}
                    />
                    <TextInput
                        style={{ flex: 1, borderColor: "#fff", padding: 3 }}
                        placeholder="Search..."
                        underlineColorAndroid="transparent"
                        mode="outlined"
                        value={search}
                        onChangeText={(text) => {
                            
                        }}
                    />
                    {search == "" ? null : (
                        <TouchableOpacity
                            style={{ marginRight: 15 }}
                            onPress={() => {}}
                        >
                            <Text>X</Text>
                        </TouchableOpacity>
                    )}
                </View>
                {/* flatlist loại phòng */}
                <View style={{ width: '100%' }}>
                    <FlatList
                        style={{ marginLeft: 20, marginRight: 20 }}
                        data={maLoaiPhong}
                        horizontal={true} // Đặt horizontal thành true để danh sách nằm ngang
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {
                            }}>
                                <Text style={{ borderWidth: 1, paddingTop: 3, paddingBottom: 3, paddingLeft: 10, paddingRight: 10, marginRight: 15, borderRadius: 20, backgroundColor: '#fff' }}>{item.tenLoaiPhong}</Text>
                            </TouchableOpacity>
                        )} />


                </View>
                {/* flat list - danh sách phòng*/}

                <FlatList
                    keyExtractor={(item, index) => item._id}
                    refreshing={loading}
                    style={{ marginTop: 5, width: '95%' }}
                    data={listPhong}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <View
                            style={{
                                flex: 0.5,
                                height: 140,
                                marginLeft: index % 2 == 0 ? 10 : 0,
                                marginTop: 5,
                                marginRight: 10,
                                marginBottom: 5,
                                padding: 15,
                                borderRadius: 15,
                                backgroundColor: '#fff',
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.5,
                                shadowRadius: 4,
                                elevation: 20,
                            }}

                        >
                            <View style={{ flexDirection: "column", height: "100%" }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 15, flex: 3 }}>
                                        {item.tenPhong}
                                    </Text>
                                    <MaterialCommunityIcons name="equal" size={30} color="black"
                                        onPress={() => {
                                            setShowDiaLogChucNang(true),
                                                edit(item._id, item.tenPhong, item.maLoaiPhong, item.tienThueTheoGio, item.tienThueTheoNgay);
                                        }} />

                                </View>
                                <Text>{item.maLoaiPhong.tenLoaiPhong}</Text>
                                <Text>Giá/giờ: {item.tienThueTheoGio} </Text>
                                <Text>Giá/ngày: {item.tienThueTheoNgay}</Text>


                                <Text style={item.tinhTrang == 'Yes' ? styles.trongPhong : styles.khongTrongPhong}>
                                    {item.tinhTrang == 'Yes' ? 'Còn trống' : 'Đã thuê'}
                                </Text>
                                                
                            </View>
                        </View>
                    )}
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    style={styles.cardView}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
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
                                        {/*dropdown chọn mã loại phòng */}
                                        <Picker
                                            mode="dropdown"
                                            selectedValue={selectLoaiPhong}
                                            onValueChange={(itemValue) => setSelectLoaiPhong(itemValue)}
                                            style={styles.dropdown}
                                        >
                                            {maLoaiPhong.map(category => (
                                                <Picker.Item
                                                    key={category._id}
                                                    label={category.tenLoaiPhong}
                                                    value={category._id}
                                                />
                                            ))}
                                        </Picker>
                                        {/* input tên loại phòng*/}
                                        <TextInput
                                            style={styles.inputStyle}
                                            value={tenPhong}
                                            mode="outlined"
                                            placeholder="Tên phòng"
                                            onChangeText={(text) => setTenPhong(text)}
                                        />
                                        
                                        {/* input tiền theo giờ phòng*/}
                                        <TextInput
                                            style={styles.inputStyle}
                                            value={tienThueTheoGio}
                                            mode="outlined"
                                            placeholder="Tiền thuê theo giờ"
                                            onChangeText={(text) => setTienThueTheoGio(text)}
                                        />
                                        {/* input tiền theo ngày*/}
                                        <TextInput
                                            style={styles.inputStyle}
                                            value={tienThueTheoNgay}
                                            mode="outlined"
                                            placeholder="Tiền thuê theo ngày"
                                            onChangeText={(text) => setTienThueTheoNgay(text)}
                                        />


                                        {/* view button  */}
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => {}}
                                        >
                                            <Text style={{ color: "#fff", fontWeight:'bold' }}>Lưu</Text>
                                        </TouchableOpacity>

                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </Modal>

                {/* dialog chọn chức năng  */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showDialogChucNang}
                    onRequestClose={() => {
                        this.setShowDiaLogChucNang(false);
                    
                    }}
                    onBackdropPress={false}
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
                            onPressOut={() => {
                                setShowDiaLogChucNang(false);
                              
                            }}
                            style={{ backgroundColor: "#fff" }}
                        >
                            <View style={styles.centeredView}>
                                <TouchableWithoutFeedback
                                    style={{ backgroundColor: "#fff", width: "100%" }}
                                >
                                    <View style={styles.modalView}>
                                        <Text style={{ fontSize: 18, fontWeight: "500" }}>
                                            Dialog Chọn Chức Năng
                                        </Text>

                                        {/* btn xóa phong  */}
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => {
                                                setShowDiaLogChucNang(!showDialogChucNang);
                                                Alert.alert(
                                                    //title
                                                    "Thông Báo!",
                                                    //body
                                                    "Bạn có chắc chắn muốn xóa không?",
                                                    [
                                                        {
                                                            text: "Có",
                                                            onPress: () => {
                                                                deletePhong(_id)
                                                                edit(_id, tenPhong, maLoaiPhong, tienThueTheoGio, tienThueTheoNgay); 
                                                                // handleRemove(_id);
                                                            },
                                                            
                                                        },
                                                        {
                                                            text: "Không",
                                                            onPress: () => {
                                                                setId(0)
                                                              
                                                                setModalVisible(false);
                                                            },
                                                            style: "cancel",
                                                        },
                                                    ],
                                                    { cancelable: false }
                                                );
                                            }}
                                        >
                                            <Text style={{ color: "#fff" }}>Xóa</Text>
                                        </TouchableOpacity>
                                        {/* btn sửa khách hàng  */}
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => {
                                                {

                                                    setModalVisible(!modalVisible);
                                                    setTitle("Sửa Thông Tin Phòng")
                                                    setShowDiaLogChucNang(!showDialogChucNang);
                                                }
                                            }}
                                        >
                                            <Text style={{ color: "#fff" }}>Sửa</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </Modal>

                {/* btn open dialog them phong */}
                <View style={{ width: "100%", alignItems: "flex-end", alignSelf: "flex-end", }}>
                    <TouchableOpacity
                        style={{
                            borderColor: "white",
                            elevation: 100,
                            backgroundColor: "#35C2C1",
                            borderRadius: 50,
                            overflow: "hidden",
                            alignItems: "center",
                            padding: 7,
                            margin: 10,
                        }}
                        onPress={() => {
                            setModalVisible(true);
                            setTitle("Thêm Thông Tin Phòng")
                            setSelectLoaiPhong(null);
                        }}
                    >
                        <Ionicons name="add" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>

            </ImageBackground>
            <StatusBar hidden={true} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        // resizeMode: 'cover', // Để ảnh phủ kín phần nền
        // justifyContent: 'center', // Để nội dung nằm giữa ảnh nền
        alignItems: 'center'
    },

    //search view
    sectionStyle: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAFAFA",
        borderWidth: 1,
        borderColor: "white",
        margin: 10,
        borderRadius: 10,
        elevation: 10,

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
    // style dialog
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
        width: "100%",
    },
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
    button: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        
    },

    //button dialog
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width: "90%",
        alignItems: "center",
        backgroundColor: "#35C2C1",
        margin: 10,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    //input style
    inputStyle: {
        // margin: 5,
        // borderWidth: 1,
        // padding: 5,
        // borderRadius: 10,
        width: 280,
        backgroundColor: "#F7F8F9",
        borderRadius: 8,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingLeft: 10,
        paddingTop: 8,
        paddingBottom: 8,
        margin: 10,
    },

    //picker
    dropdown: {
        backgroundColor: '#E0EEE0',
        borderRadius: 20,
        width: 280,
        padding: 10,
        margin: 10
    },
    //set style trống phòng
    trongPhong: {
        color: "white",
        backgroundColor: 'green',
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 5,
        borderRadius: 5,
        width: 100
    },
    khongTrongPhong: {
        color: "white",
        backgroundColor: 'red',
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 5,
        borderRadius: 5,
        width: 100
    },

})