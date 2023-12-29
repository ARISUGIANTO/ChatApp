// HomeScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../component/SearchBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
} from '../styles/homeStyle';


const contact = [
    {
        id: '1',
        userName: 'Ach Ramdani',
        userImg: require('../src/assets/profile.png'),
        messageText:
            'Coding Is My Live🫶',
    },
    {
        id: '2',
        userName: 'Bayu',
        userImg: require('../src/assets/profile2.png'),
        messageText:
            'Kuli Boy',
    },
    {
        id: '3',
        userName: 'Iqbal',
        userImg: require('../src/assets/profile3.png'),
        messageText:
            'Sibuk',
    },
    {
        id: '4',
        userName: 'Thufael',
        userImg: require('../src/assets/profile4.png'),
        messageText:
            'This Is Cogil',
    },
    {
        id: '5',
        userName: 'Yuda',
        userImg: require('../src/assets/profile5.png'),
        messageText:
            'Coding Is My Live🫶',
    },
    {
        id: '7',
        userName: 'Muhlis',
        userImg: require('../src/assets/profile6.png'),
        messageText:
            'Coding Is My Live🫶',
    },
    {
        id: '8',
        userName: 'Rohil',
        userImg: require('../src/assets/profile4.png'),
        messageText:
            'Coding Is My Live🫶',
    },
    {
        id: '9',
        userName: 'King',
        userImg: require('../src/assets/profile3.png'),
        messageText:
            'Coding Is My Live🫶',
    },
    {
        id: '10',
        userName: 'Indra',
        userImg: require('../src/assets/profile2.png'),
        messageText:
            'Coding Is My Live🫶',
    },


]
const sortedContact = contact.slice().sort((a, b) =>
    a.userName.localeCompare(b.userName)
);

const ContactScreen = ({ navigation }) => {

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
                {/* area contact */}
                <Container>
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
                    <Text style={{ fontSize: 20, right: 159, top: 7, fontWeight: 'bold', marginBottom: 8 }}>Kontak</Text>
                    <FlatList
                        data={sortedContact}
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
