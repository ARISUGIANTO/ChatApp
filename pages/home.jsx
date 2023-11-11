// HomeScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../component/SearchBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../component/card';
import Button from '../component/button';
import Circle from '../component/circle';
import FastImage from 'react-native-fast-image';

const HomeScreen = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['#F9F9F9', '#ffff']} // Warna atas dan bawah latar belakang
            style={styles.container}>
            <View style={styles.container}>
                <View style={{ backgroundColor: '#003865', height: 250 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginTop: 55, marginRight: 10, marginLeft: 15 }}>
                            <SearchBar />
                        </View>
                        <View>
                            <Text
                                style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 65, marginLeft: 70 }}>WhatMe</Text>
                        </View>
                        <View style={{ width: 50, height: 50, marginTop: 50, marginLeft: - 50 }}>
                            <Image source={require('../src/assets/profile.png')} style={styles.head} />
                        </View>
                    </View>
                    {/* status bar */}
                    <View style={{ flexDirection: 'row', marginTop: 10, padding: 5 }}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginRight: 8, padding: 4, borderRadius: 30, borderLeftColor: '#A6FF96', borderTopColor: '#F99417', borderWidth: 2 }}>
                                <Image source={require('../src/assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                            </View>
                            < MaterialCommunityIcons name="plus-circle" color={'red'} size={15} style={{ position: 'relative', marginTop: -11, marginRight: -18, backgroundColor: 'white', width: 15, height: 15, borderRadius: 10, alignItems: 'center' }} />
                            <Text style={{ color: 'white', marginTop: -4 }}>My story</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginRight: 8, padding: 4, borderRadius: 30, borderColor: '#A6FF96', borderWidth: 2 }}>
                                <Image source={require('../src/assets/profile5.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                            </View>
                            <Text style={{ color: 'white' }}>Muhlis</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginRight: 8, padding: 4, borderRadius: 30, borderLeftColor: '#A6FF96', borderTopColor: '#F99417', borderRightColor: '#D4F6CC', borderWidth: 2 }}>
                                <Image source={require('../src/assets/profile2.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                            </View >
                            <Text style={{ color: 'white' }}>Thufael</Text></View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginRight: 8, padding: 4, borderRadius: 30, borderColor: '#A6FF96', borderWidth: 2 }}>
                                <Image source={require('../src/assets/profile6.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                            </View>
                            <Text style={{ color: 'white' }}>Yuda</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginRight: 8, padding: 4, borderRadius: 30, borderLeftColor: '#A6FF96', borderTopColor: '#F99417', borderRightColor: '#D4F6CC', borderBottomColor: '#1F8A70', borderWidth: 2 }}>
                                <Image source={require('../src/assets/profile3.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                            </View>
                            <Text style={{ color: 'white' }}>Yady</Text>
                        </View>



                    </View>
                </View>
                {/* Kolom chat */}
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
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <View>
                            <Image source={require('../src/assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                            <View style={{ backgroundColor: '#A6FF96', width: 10, height: 10, borderRadius: 10, position: 'relative', marginTop: -8, marginLeft: 30 }}></View>
                        </View>

                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Ach Ramdani</Text>
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Kapan Kamu Kerumah?</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            <Text style={{ fontSize: 10 }}>11.04</Text>
                            <View style={{ backgroundColor: 'red', width: 17, height: 17, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>3</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile2.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Thufael Mirza</Text>
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Ketemu ditempat biasa ya!?</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            <Text style={{ fontSize: 10 }}>Kemaren</Text>
                            <View style={{ backgroundColor: 'red', width: 17, height: 17, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>1</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile3.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Dwi Rafinul A</Text>
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Sampai jumpa kembali👋</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            <Text style={{ fontSize: 10 }}>Kemaren</Text>
                            <View style={{ backgroundColor: 'red', width: 17, height: 17, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>5</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile4.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Moh Iqbal AR</Text>
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Jangan lupa hadir Ya!</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            <Text style={{ fontSize: 10 }}>Kemaren</Text>
                            <View style={{ backgroundColor: 'red', width: 17, height: 17, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>4</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile5.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Bayu Yalta</Text>
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Info hari ini Boss</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            <Text style={{ fontSize: 10 }}>5/11/23</Text>
                            <View style={{ backgroundColor: 'red', width: 17, height: 17, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>2</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile6.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Ach Rohil Kh</Text>
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Aku izin ga bisa masuk hari ini </Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            <Text style={{ fontSize: 10 }}>01/11/23</Text>
                            <View style={{ backgroundColor: 'red', width: 17, height: 17, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>1</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>King Mulyadi</Text>
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Mabar Yukks😁</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            <Text style={{ fontSize: 10 }}>01/11/23</Text>
                            <View style={{ backgroundColor: 'red', width: 17, height: 17, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>2</Text>
                            </View>
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

export default HomeScreen;
