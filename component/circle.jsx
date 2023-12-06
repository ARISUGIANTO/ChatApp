import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Circle = ({ imageSource, text }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ marginRight: 8, padding: 4, borderRadius: 30, borderColor: '#A6FF96', borderWidth: 2 }}>
        <Image source={imageSource} style={styles.image} />
      </View >
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {

    width: 50,
    height: 50,
    borderRadius: 20
  },
  text: {
    color: 'white'
  }
});

export default Circle;