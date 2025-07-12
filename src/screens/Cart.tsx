import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>

      <ScrollView contentContainerStyle={styles.cartContent}>
        {/* Placeholder: Replace this with actual cart items */}
        <View style={styles.emptyCartBox}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 26,
    marginTop: 60,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cartContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartBox: {
    padding: 40,
    marginBottom: 150,
    borderRadius: 16,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  emptyCartText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});