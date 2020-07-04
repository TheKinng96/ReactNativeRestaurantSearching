import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const DetailPage = ({ navigation }) => {
  const id = navigation.getParam('id')

  console.log(id)
  return (
    <View> 
      <Text>This is DetailPage</Text>
    </View>
  )
}

const style = StyleSheet.create({})

export default DetailPage;