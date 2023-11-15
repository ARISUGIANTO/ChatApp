import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import dari library ikon Material Icons

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Icon name="search" size={35} color="#999" style={styles.icon} />
            <TextInput
                style={styles.input}

                placeholderTextColor="#999"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        padding: 5,
        margin: 5,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: 'white',
        width: 45,
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

export default SearchBar;
