import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const HomeCard = () => {
  return (
    <View style={styles.card}>
      {/* Left side with category images */}
      <View style={styles.leftContent}>
        <View style={styles.item}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/food.png' }}
            style={styles.image}
          />
          <Text style={styles.itemText}>Food</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/services.png' }}
            style={styles.image}
          />
          <Text style={styles.itemText}>Services</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/shopping-cart.png' }}
            style={styles.image}
          />
          <Text style={styles.itemText}>Groceries</Text>
        </View>
      </View>

      {/* Right side with text and CTA */}
      <View style={styles.rightContent}>
        <Text style={styles.text}>
          Food, Services and More — Get what you need, when you need it.
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
    flexDirection: 'row',
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
  leftContent: {
    flex: 1,
    justifyContent: 'space-around',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  image: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  itemText: {
    fontSize: 16,
    color: '#2D6A4F',
    fontWeight: '500',
  },
  rightContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D6A4F',
    textAlign: 'right',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2D6A4F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 90,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});