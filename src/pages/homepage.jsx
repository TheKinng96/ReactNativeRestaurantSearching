import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../component/searchbar'
import useResults from '../hooks/useResults'
import ResultsList from '../component/ResultsList'

const HomePage = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  }



  return (
    <>
      <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit = {() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList 
          title="Cost Effective"
          results={filterResultsByPrice('￥')}
        />
        <ResultsList 
          title="Bit Pricier"
          results={filterResultsByPrice('￥￥')}
        />
        <ResultsList 
          title="Big Spender"
          results={filterResultsByPrice('￥￥￥')}
        />
        <ResultsList 
          title="No Reviews"
          results={filterResultsByPrice()}
        />
      </ScrollView>

    </>
  )
};
 
const style = StyleSheet.create({})

export default HomePage;