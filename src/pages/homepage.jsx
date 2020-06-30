import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../component/searchbar'
import useResults from '../hooks/useResults'
import ResultsList from '../component/ResultsList'

const HomePage = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit = {() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList 
        title="Cost Effective"

      />
      <ResultsList 
        title="Bit Pricier"

      />
      <ResultsList 
        title="Big Spender"

      />

    </View>
  )
};
 
const style = StyleSheet.create({})

export default HomePage;