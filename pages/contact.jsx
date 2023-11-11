// HomeScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../component/SearchBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ContactScreen = () => {
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
                                style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Kontak</Text>
                        </View>
                        <View style={{ flex: 1, width: 50, height: 50, marginTop: 50, left: -95 }}>
                            <Image source={require('../src/assets/profile.png')} style={styles.head} />
                        </View>
                    </View>
                </View>
                {/* area panggilan */}
                <View style={{ backgroundColor: '#FFFFFF', borderTopRightRadius: 30, borderTopLeftRadius: 30, marginTop: -30 }}>
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
                    <View style={{ margin: 10, }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: ' lucida grande' }}>Kontak</Text>
                    </View>
                    <View style={{ marginLeft: 23, marginBottom: 5 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: ' lucida grande' }}>A</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <View>
                            <Image source={require('../src/assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        </View>

                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Ach Ramdani</Text>
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Coding Is My Life👌</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile6.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Ach Rohil Kh</Text>
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>YAKUSA❤️</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 23, marginBottom: 5 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: ' lucida grande' }}>B</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile5.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Bayu Yalta</Text>

                            <Text style={{ fontSize: 10, fontWeight: 300 }}>StarBoy😎</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 23, marginBottom: 5 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: ' lucida grande' }}>D</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile3.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Dwi Rafinul A</Text>
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Sibuk</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 23, marginBottom: 5 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: ' lucida grande' }}>K</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>King Mulyadi</Text>
                            < MaterialCommunityIcons name="call-received" color={'#003865'} size={15} />
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Santai dulu ga sihhh</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 23, marginBottom: 5 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: ' lucida grande' }}>M</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile4.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Moh Iqbal AR</Text>
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Kemarin 13.45</Text>
                        </View>


                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile2.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'red' }}>Thufael Mirza</Text>
                            < MaterialCommunityIcons name="call-received" color={'red'} size={15} />
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Hari ini 11.00</Text>
                        </View>

                    </View>



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

export default ContactScreen;
