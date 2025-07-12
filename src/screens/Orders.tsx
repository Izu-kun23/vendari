import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const Orders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Orders</Text>

      <ScrollView contentContainerStyle={styles.orderContent}>
        {/* Placeholder – replace this with a mapped list of order items */}
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>You haven't placed any orders yet.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 26,
    marginTop: 60,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  orderContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyBox: {
    padding: 40,
    borderRadius: 16,
    marginBottom: 120,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});