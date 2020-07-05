import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions } from 'react-native'


const MapComponent = ({ result }) => {

  return (
    <View style={style.container}>
      <MapView 
        style={style.mapStyle}
        region={{
          latitude: result.coordinates.latitude,
          longitude: result.coordinates.longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}
        >
        <Marker
          coordinate={{latitude: result.coordinates.latitude,
          longitude: result.coordinates.longitude}}
          title={result.name}
        />
      </MapView>
    </View>
  )
}

const style = StyleSheet.create({
  mapStyle: {
    height: "30%",
    width: "95%",
    marginHorizontal: 'auto'
  }, 
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  }
})

export default MapComponent;