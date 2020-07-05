import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'
import MapComponent from '../component/MapComponent';
import DetailText from '../component/DetailText';

const DetailPage = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id')

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={style.container}> 
      <Text style={style.title}>{result.name}</Text>
      <FlatList 
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={style.image} source={{ uri: item }} />
        }}
      />
      <DetailText result={result} />
      <MapComponent result={result}/>

    </View>
  )
}

const style = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginLeft:10
  }, 
  container: {
    margin: 10
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: 'center'
  },

})

export default DetailPage;