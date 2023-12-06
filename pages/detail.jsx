// HomeScreen.js
import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../component/SearchBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const CallScreen = () => {
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
                        <View style={{ flex: 1, marginTop: 65, marginLeft: -10 }}>
                            <Text
                                style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Panggilan</Text>
                        </View>
                        <View style={{ flex: 1, width: 50, height: 50, marginTop: 50, left: -80 }}>
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: ' lucida grande' }}>Terbaru</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <View>
                            <Image source={require('../src/assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        </View>

                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Ach Ramdani</Text>
                            < MaterialCommunityIcons name="call-made" color={'#003865'} size={15} />
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Hari ini 11.04</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            < MaterialCommunityIcons name="video" color={'#003865'} size={30} />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile2.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'red' }}>Thufael Mirza</Text>
                            < MaterialCommunityIcons name="call-received" color={'red'} size={15} />
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Hari ini 11.00</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            < MaterialCommunityIcons name="video" color={'#003865'} size={30} />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile3.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'red' }}>Dwi Rafinul A</Text>
                            < MaterialCommunityIcons name="call-received" color={'red'} size={15} />
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Kemarin 16.45</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            < MaterialCommunityIcons name="phone" color={'#003865'} size={28} />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile4.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Moh Iqbal AR</Text>
                            < MaterialCommunityIcons name="call-made" color={'#003865'} size={15} />
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Kemarin 13.45</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            < MaterialCommunityIcons name="phone" color={'#003865'} size={28} />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile5.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Bayu Yalta</Text>
                            < MaterialCommunityIcons name="call-missed" color={'red'} size={15} />
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Kemarin 12.00</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            < MaterialCommunityIcons name="video" color={'#003865'} size={30} />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile6.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>Ach Rohil Kh</Text>
                            < MaterialCommunityIcons name="call-received" color={'#003865'} size={15} />
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>Kemarin 08.50</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            < MaterialCommunityIcons name="phone" color={'#003865'} size={28} />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginBottom: 10 }}>
                        <Image source={require('../src/assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flex: 1, marginLeft: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>King Mulyadi</Text>
                            < MaterialCommunityIcons name="call-received" color={'#003865'} size={15} />
                            <Text style={{ fontSize: 10, fontWeight: 300 }}>10 november 11.13</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 100, marginRight: -50 }}>
                            < MaterialCommunityIcons name="phone" color={'#003865'} size={28} />
                        </View>

                    </View>
                </View>
                <View style={{ position: 'absolute', right: 20, bottom: 20, backgroundColor: '#003865', borderRadius: 5, width: 40, height: 40, alignItems: 'center', padding: 3 }}>
                    < MaterialCommunityIcons name="phone-plus" color={'white'} size={30} styles={{

                    }} />
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

export default CallScreen;
