import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
  return (
    <View style={style.background} >
      <FontAwesome5 name="search" style={style.iconstyle} color="black" />
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={style.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const style = StyleSheet.create({
  background:{
    marginTop:15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex:1,
    fontSize: 18
  },
  iconstyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal:15
  }
})

export default SearchBar;