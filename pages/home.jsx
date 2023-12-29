// HomeScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../component/SearchBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// component
import Circle from '../component/circle';

import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    MessageText,
    TextSection,
    PostTime
} from '../styles/homeStyle';



const Messages = [
    {
        id: '1',
        userName: 'Muhlis',
        userImg: require('../src/assets/profile2.png'),
        messageTime: '4 mins ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '2',
        userName: 'Thufael',
        userImg: require('../src/assets/profile3.png'),
        messageTime: '2 hours ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '3',
        userName: 'King',
        userImg: require('../src/assets/profile4.png'),
        messageTime: '1 hours ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '4',
        userName: 'Yuda',
        userImg: require('../src/assets/profile5.png'),
        messageTime: '1 day ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '5',
        userName: 'Bayu',
        userImg: require('../src/assets/profile6.png'),
        messageTime: '2 days ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '6',
        userName: 'Iqbal',
        userImg: require('../src/assets/profile4.png'),
        messageTime: '2 days ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '7',
        userName: 'Iqbal',
        userImg: require('../src/assets/profile4.png'),
        messageTime: '2 days ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
];


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
                            <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
                                <Image source={require('../src/assets/profile.png')} style={styles.head} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* status bar */}
                    <View style={{ flexDirection: 'row', marginTop: 10, padding: 5 }}>
                        <View style={{ alignItems: 'center', }}>
                            <View style={{ marginRight: 8, padding: 4, borderRadius: 30, borderLeftColor: '#A6FF96', borderTopColor: '#F99417', borderWidth: 2 }}>
                                <Image source={require('../src/assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                            </View>
                            < MaterialCommunityIcons name="plus-circle" color={'red'} size={15} style={{ position: 'relative', marginTop: -11, marginRight: -18, backgroundColor: 'white', width: 15, height: 15, borderRadius: 10, alignItems: 'center' }} />
                            <Text style={{ color: 'white', marginTop: -4 }}>My story</Text>
                        </View>
                        <ScrollView horizontal>
                            <TouchableOpacity>
                                <Circle imageSource={require('../src/assets/profile2.png')}
                                    text="Muhlis" />
                            </TouchableOpacity>
                            <Circle imageSource={require('../src/assets/profile3.png')}
                                text="Thufael" />
                            <Circle imageSource={require('../src/assets/profile4.png')}
                                text="King" />
                            <Circle imageSource={require('../src/assets/profile5.png')}
                                text="Dwi" />
                            <Circle imageSource={require('../src/assets/profile6.png')}
                                text="Bayu" />
                            <Circle imageSource={require('../src/assets/profile.png')}
                                text="Moh" />
                            <Circle imageSource={require('../src/assets/profile3.png')}
                                text="Ach" />
                        </ScrollView>
                    </View>

                </View>
                {/* List nama-nama chat */}
                <Container>
                    <FlatList
                        data={Messages}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Card onPress={() => navigation.navigate('Chat', { userName: item.userName, userImg: item.userImg })}>
                                <UserInfo>
                                    <UserImgWrapper>
                                        <UserImg source={item.userImg} />
                                    </UserImgWrapper>
                                    <TextSection>
                                        <UserInfoText>
                                            <UserName>{item.userName}</UserName>
                                            <PostTime>{item.messageTime}</PostTime>
                                        </UserInfoText>
                                        <MessageText>{item.messageText}</MessageText>
                                    </TextSection>
                                </UserInfo>
                            </Card>
                        )}
                    />
                </Container>
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
