import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../component/card';
import Circle from '../component/circle';
import Input from '../component/input';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';


const ChatScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
            headerRight: () => (
                <View style={{ marginRight: 'auto', flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../src/assets/profile.png')}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                    />
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginLeft: 7 }}>Ach Ramdani</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: 'black', marginLeft: 7 }}>Online</Text>
                    </View>
                    <View style={{ flexDirection: 'row', left: 90, padding: 5 }}>
                        < MaterialCommunityIcons name="phone" color={'#003865'} size={28} style={{ marginRight: 8 }} />
                        < MaterialCommunityIcons name="video" color={'#003865'} size={30} />
                    </View>


                </View>
            ),
        });
    }, [navigation]);
    const [jam] = useState([

        { jam: '09.25 AM', pengirim: 'dani' },
        { jam: '09.30', pengirim: 'saya' },
        { jam: '09.34', pengirim: 'dani' },
        { jam: '09.34', pengirim: 'dani' },
        { jam: '10.00', pengirim: 'saya' },
        { jam: '11.00', pengirim: 'saya' },
        { jam: '11.04', pengirim: 'dani' },


    ])


    return (
        <View style={{ height: '100%' }}>
            <View style={{ backgroundColor: 'white', marginTop: 20, width: 60, height: 35, borderRadius: 10, alignItems: 'center', padding: 3, elevation: 4, marginLeft: '44%' }}>
                <Text style={{ fontSize: 18, fontWeight: '700' }}>
                    Today
                </Text>
            </View>
            {/* Scroll Chat  */}
            <FlatList
                data={jam}
                renderItem={({ item }) =>
                    item.pengirim === 'saya' ? (

                        <View style={{ alignItems: 'flex-end', marginRight: 15 }}>
                            <Text style={{ color: 'black' }}>{item.pesan}</Text>
                            <View>
                                <Circle />
                            </View>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: 'black', marginLeft: 'auto', marginRight: 10 }}>{item.jam}</Text>
                        </View>
                    ) :
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Image
                                source={require('../src/assets/profile.png')}
                                style={{ width: 50, height: 50, borderRadius: 10 }}
                            />

                            <View style={{ marginTop: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 9 }}>Ach Ramdani</Text>
                                <Card />
                                <Text style={{ fontSize: 14, fontWeight: '400', color: 'black', marginLeft: 'auto' }}>{item.jam}</Text>
                            </View>
                        </View>

                } />



            {/* <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image
                        source={require('../src/assets/profile.png')}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                    />

                    <View style={{ marginTop: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'black', marginLeft: 9 }}>Ach Ramdani</Text>
                        <Card />
                        <Card />
                        <Text style={{ fontSize: 14, fontWeight: '400', color: 'black', marginLeft: 'auto' }}>10.15 AM</Text>
                    </View>
                </View>
                <View style={{ marginLeft: 'auto', marginRight: 15, marginBottom: 25 }}>

                    <Circle />
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'black', marginLeft: 'auto', marginRight: 10 }}>11.00 AM</Text>
                    <View style={{ top: -60, right: -25, flexDirection: 'row' }}>
                        < MaterialCommunityIcons name="triangle" color={'white'} size={20} style={{ transform: [{ rotate: '90deg' }], marginRight: 10, marginTop: -2.8 }} />
                        <Image
                            source={require('../src/assets/voice.png')}
                            style={{ width: 100, height: 13 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'white', right: -10, top: -4, marginRight: 10 }}>0.36</Text>

                    </View>

                </View> */}
            {/* papan ketik */}
            <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
                < MaterialCommunityIcons name="paperclip" color={'#003865'} size={40} style={{ transform: [{ rotate: '45deg' }] }} />
                <Input />
                < MaterialCommunityIcons name="camera-outline" color={'#003865'} size={40} style={{ marginLeft: 20 }} />
                < MaterialCommunityIcons name="microphone" color={'#003865'} size={40} />


            </View>

        </View>

    );
};

ChatScreen.navigationOptions = {
    tabBarVisible: false, // Hides the Bottom Tab Bar
};

export default ChatScreen;
