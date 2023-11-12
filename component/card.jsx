import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ title, price, description }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 40,
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 8,
        width: 200,
        height: 60,
        elevation: 4

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