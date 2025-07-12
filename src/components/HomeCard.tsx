import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const HomeCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Get all you need from your favorite vendors
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E4F7E8',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    width: 440,
    height: 218,
    alignSelf: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  content: {
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D6A4F',
    textAlign: 'right',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2D6A4F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
});