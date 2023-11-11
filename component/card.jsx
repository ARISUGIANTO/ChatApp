import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ title, price, description }) => {
    return (
        <View style={styles.card}>
            <Image source={require('../src/assets/fotodiri.jpg')} style={{ width: 50, height: 50, borderRadius: 5 }} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        width: 160,
        height: 150
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6F00',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#777',
    },
});

export default Card;