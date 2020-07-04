import React from 'react'
import { View, StyleSheet,Text, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results, navigation }) => {
  
  return (
    <View style={style.container} >
      <Text style={style.title}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data = {results}
        keyExtractor = {(result) => result.id}
        renderItem={({item}) => {
          return (
          <TouchableOpacity onPress={() => navigation.navigate('Detail',{ id: item.id })}>
            <ResultDetail result={item} />
          </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom:5
  },
  container: {
    marginBottom: 10
  }
})

export default withNavigation(ResultsList);