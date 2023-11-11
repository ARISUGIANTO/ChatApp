import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Circle = () => {
  return (
    <View>
      <Image source={require('../src/assets/profile.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
    </View>
  )
}

export default Circle

const styles = StyleSheet.create({})