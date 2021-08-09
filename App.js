import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import services from './services'

const App = () => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    console.log('hi')
    getRestaurantsData()
  }, [])

  const getRestaurantsData = async () => {

    // const response = await services.get()

    // console.log(response)




    await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.6204,-122.3491&radius=2500&type=restaurant&key=AIzaSyDxVclNSQGB5WHAYQiHK-VxYKJelZ_9mjk',
      { mode: 'no-cors' })
      .then((response) => response.json())
      .then((json) => {
        console.log('response ====>', json)
      })
      .catch((error) => {
        console.log('error ====> ', error)
      })

  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons style={{ flex: 0.2 }} name="search" size={24} color="#ccc" />
        <TextInput
          style={styles.searchInput}
          placeholder='Search for restaurants, cuisines'
          numberOfLines={1}
          value={searchText}
          onChangeText={(txt) => setSearchText(txt)}
        />
      </View>

      <View style={{ flexDirection: 'row', margin: 4 }} >
        <Image
          style={{ height: 100, width: 100, borderWidth: 1, borderColor: 'transparent', borderRadius: 8 }}
          source={{ uri: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80' }}
        />
        <View style={{ flex: 1, marginLeft: 4 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text numberOfLines={2} style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Ovenstory Pizza</Text>
            <Text style={{ padding: 6, borderRadius: 6, fontSize: 12, color: 'white', backgroundColor: 'green' }}>4.0</Text>
          </View>
          <Text style={{ fontSize: 14, color: '#ccc' }}>Pizza</Text>
          <Text style={{ marginVertical: 2, fontSize: 14, color: '#ccc' }}>$ 200 per person | 52 mins</Text>
          <Text style={{ marginVertical: 2, fontSize: 12, color: '#fc3158' }}>close in 25 Minutes</Text>
          <Text style={{ marginVertical: 2, fontSize: 14, color: '#ccc' }}>Promoted</Text>
          <Text style={{ marginVertical: 2, fontSize: 12, color: '#0a96ed' }}>well sanitized kitchen * Daily tempture checks * Rider hand wash</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    margin: 4,
    padding: 4,
  },
  searchInput: {
    flex: 2,
    padding: 12
  }
});

export default App
