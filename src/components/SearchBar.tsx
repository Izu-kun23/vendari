import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search</Text>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Type to search..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>
          {searchText ? `Results for "${searchText}"` : 'Search results will appear here.'}
        </Text>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -10,
    marginBottom: 15,
    color: '#333',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#ececec',
    borderRadius: 30,
    marginTop: -5,
    alignItems: 'center',
    paddingHorizontal: 18,
    height: 49,
    marginBottom: 20,
    width: '110%',
    alignSelf: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});