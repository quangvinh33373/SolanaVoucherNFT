import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity,TextInput ,FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';

export default function QuanLyVoucher({ navigation }) {

    const [searchText, setSearchText] = useState('');

    // Danh sách các voucher cố định
    const vouchers = [
        {
            id: 1,
            image: require('../assets/logoVoucher.png' ),          
            name: 'Voucher 1',
            code: 'CODE123',
            expiryDate: '30/04/2024'
        },
        {
            id: 2,
            image: require('../assets/logoVoucher.png' ),          
            name: 'Voucher 2',
            code: 'CODE456',
            expiryDate: '15/05/2024'
        },
        {
            id: 3,
            image: require('../assets/logoVoucher.png' ),          
            name: 'Voucher 3    ',
            code: 'CODE456',
            expiryDate: '15/05/2024'
        },
        {
            id: 4,
            image: require('../assets/logoVoucher.png' ),          
            name: 'Voucher 4',
            code: 'CODE456',
            expiryDate: '15/05/2024'
        },
        {
            id: 5,
            image: require('../assets/logoVoucher.png' ),          
            name: 'Voucher 5',
            code: 'CODE456',
            expiryDate: '15/05/2024'
        },
        {
            id: 6,
            image: require('../assets/logoVoucher.png' ),          
            name: 'Voucher 6',
            code: 'CODE456',
            expiryDate: '15/05/2024'
        },
        
      
    ];

     // Hàm lọc danh sách voucher dựa trên searchText
     const filteredVouchers = vouchers.filter(voucher =>
        voucher.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../assets/background.png')}
                style={styles.backgroundImage}
            >
            {/* TextInput tìm kiếm */}
            <TextInput
                    style={styles.searchInput}
                    placeholder="Nhập tên voucher để tìm kiếm"
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                />
                <FlatList
                    data={vouchers}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.voucherItem}>
                            <Image source={item.image} style={styles.voucherImage} />
                            <View style={styles.voucherDetails}>
                                <Text style={styles.voucherName}>{item.name}</Text>
                                <Text style={styles.voucherInfo}>Mã voucher: {item.code}</Text>
                                <Text style={styles.voucherInfo}>Hạn sử dụng: {item.expiryDate}</Text>
                            </View>
                            <TouchableOpacity style={styles.sellButton} onPress={() => {/* Xử lý khi nhấn nút bán */}}>
                                <Text style={styles.sellButtonText}>Bán</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </ImageBackground>
            <StatusBar hidden={true} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
    },
    searchInput: {
        width: '90%',
        backgroundColor: '#fff',
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
    },
    voucherItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    voucherImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    voucherDetails: {
        flex: 1,
        marginHorizontal: 10,
    },
    voucherName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    voucherInfo: {
        fontSize: 14,
        marginBottom: 3,
    },
    sellButton: {
        backgroundColor: '#35C2C1',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    sellButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
