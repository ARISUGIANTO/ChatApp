import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Input = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ketik......."
                placeholderTextColor="#999"
            />
            < MaterialCommunityIcons name="file-plus" color={'#003865'} size={30} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F3F6F6',
        alignItems: 'center',
        alignContent: 'center',
        padding: 3,
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#003865',
        width: 250,
        height: 45
    },
    icon: {
        marginRight: 8,

    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});

export default Input;
