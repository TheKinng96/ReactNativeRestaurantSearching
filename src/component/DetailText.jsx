import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const DetailText = ({ result }) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{result.review_count} Reviews | {result.rating} Stars</Text>
      {result.display_phone ? <Text style={style.phone}>
        <FontAwesome name="phone" size={20} color="black" />
        {result.display_phone}
        </Text> : null}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    margin:10
  },
  text: {
    fontSize:20
  },
  phone: {
    fontSize:20,
    color: 'blue'
  }
})

export default DetailText;