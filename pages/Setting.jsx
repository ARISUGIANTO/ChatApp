// HomeScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../component/SearchBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SettingScreen = () => {
    return (
        <LinearGradient
            colors={['#F9F9F9', '#ffff']} // Warna atas dan bawah latar belakang
            style={styles.container}>
            <View style={styles.container}>
                <View style={{ backgroundColor: '#003865', height: 170 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, marginTop: 55, marginRight: 10, marginLeft: 15 }}>
                            <SearchBar />
                        </View>
                        <View style={{ flex: 1, marginTop: 65, marginLeft: 18 }}>
                            <Text
                                style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Setting</Text>
                        </View>
                        <View style={{ flex: 1, width: 50, height: 50, marginTop: 50, left: -95 }}>
                            <Image source={require('../src/assets/profile.png')} style={styles.head} />
                        </View>
                    </View>
                </View>
                {/* area panggilan */}
                <View style={{ backgroundColor: '#FFFFFF', borderTopRightRadius: 30, borderTopLeftRadius: 30, marginTop: -30, elevation: 4 }}>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center',
                    }}>
                        <View style={{
                            marginTop: 10,
                            width: 50,
                            height: 0,
                            borderWidth: 3,
                            borderColor: '#EBE3D5',
                        }} ></View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginBottom: 10 }}>
                        <View>
                            <Image source={require('../src/assets/profile.png')} style={{ width: 60, height: 60, borderRadius: 20 }} />
                        </View>

                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 20, fontWeight: 600, color: 'black' }}>Ari Sugianto</Text>
                            <Text style={{ fontSize: 13, fontWeight: 500 }}>Software Developer👌</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            < MaterialCommunityIcons name="qrcode-scan" color={'#003865'} size={30} />
                        </View>
                    </View>



                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: 30, elevation: 2, borderRadius: 20 }}>
                    < MaterialCommunityIcons name="star-circle" color={'#003865'} size={45}
                        style={{ marginLeft: 20 }} />
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 15 }}>Pesan Berbintang</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: 10, elevation: 2, borderRadius: 20 }}>

                    < MaterialCommunityIcons name="monitor-cellphone-star" color={'white'} size={30}
                        style={{ marginLeft: 23, backgroundColor: 'green', width: 40, height: 40, borderRadius: 20, position: 'relative', padding: 5 }} />

                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 15 }}>Perangkat Tertaut</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: 40, elevation: 2, borderRadius: 20 }}>

                    < MaterialCommunityIcons name="ticket-account" color={'white'} size={30}
                        style={{ marginLeft: 23, backgroundColor: 'orange', width: 40, height: 40, borderRadius: 20, position: 'relative', padding: 5 }} />

                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 15 }}>Akun</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: 10, elevation: 2, borderRadius: 20 }}>

                    < MaterialCommunityIcons name="shield-key" color={'white'} size={30}
                        style={{ marginLeft: 23, backgroundColor: '#B15EFF', width: 40, height: 40, borderRadius: 20, position: 'relative', padding: 5 }} />

                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 15 }}>Privasi</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: 10, elevation: 2, borderRadius: 20 }}>

                    < MaterialCommunityIcons name="chat-processing" color={'white'} size={30}
                        style={{ marginLeft: 23, backgroundColor: '#3D30A2', width: 40, height: 40, borderRadius: 20, position: 'relative', padding: 5 }} />

                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 15 }}>Chat</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: 40, elevation: 2, borderRadius: 20 }}>

                    < MaterialCommunityIcons name="bell-badge" color={'white'} size={30}
                        style={{ marginLeft: 23, backgroundColor: '#D2DE32', width: 40, height: 40, borderRadius: 20, position: 'relative', padding: 5 }} />

                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 15 }}>Pemberitahuan</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: 10, elevation: 2, borderRadius: 20 }}>

                    < MaterialCommunityIcons name="cable-data" color={'white'} size={30}
                        style={{ marginLeft: 23, backgroundColor: '#344D67', width: 40, height: 40, borderRadius: 20, position: 'relative', padding: 5 }} />

                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 15 }}>Penyimpanan dan Data</Text>
                </View>



            </View>


        </LinearGradient >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        // Tidak perlu background color di sini karena warna latar belakang diatur menggunakan LinearGradient
    },
    head: {
        marginLeft: 120,
        marginTop: 5,
        width: 60,
        height: 60,
        borderRadius: 30
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        marginRight: 20

    },
    font: {
        color: 'white'
    },
    Input: {
        borderRadius: 20,
        margin: 20
    },
    buton: {
        margin: 20
    },
    card: {
        padding: 5,
        margin: 5,
        borderTopLeftRadius: 20, // Atur border radius di bagian atas
        borderTopRightRadius: 20,
        flexDirection: 'row', // Mengatur arah penempatan card secara horizontal
        justifyContent: 'space-between', // Atur border radius di bagian atas
    },
    rectangleView: {
        borderRadius: 100,
        backgroundColor: "#e6e6e6",
        flex: 1,
        width: "100%",
        height: 3
    }

});

export default SettingScreen;
