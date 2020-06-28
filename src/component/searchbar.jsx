import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={style.background} >
      <FontAwesome5 name="search" size={24} color="black" />
      <TextInput 
        placeholder="Search"
      />
    </View>
  )
}

const style = StyleSheet.create({
  background:{
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex:1
  },
  iconstyle: {
    fontSize: 35
  }
})

export default SearchBar;