import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    image: require('../../assets/shop.png'),
    title: 'Shop Online with Vendari',
  },
  {
    image: require('../../assets/vendor.png'),
    title: 'Communicate with different customers',
  },
  {
    image: require('../../assets/customer.png'),
    title: 'Connect with your favorite vendors',
  },
];

const Welcome = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate('Login'); // Navigate to Login screen when the last slide is reached
    }
  };

  const handleSkip = () => {
    navigation.navigate('Login'); // Skip to Login screen
    flatListRef.current?.scrollToIndex({ index: slides.length - 1 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
          </View>
        )}
        style={{ flexGrow: 0 }}
      />

      <View style={styles.footer}>
        {/* Pagination Dots */}
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>

        {/* Next/Get Started Button */}
        <TouchableOpacity style={styles.getStartedButton} onPress={handleNext}>
          <Text style={styles.getStartedText}>
            {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F7E8',
    paddingTop: 60,
    alignItems: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: 65,
    left: 20,
    zIndex: 10,
  },
  skipText: {
    fontSize: 16,
    color: 'green',
    fontWeight: '600',
  },
  slide: {
    width,
    alignItems: 'center',
  },
  title: {
    marginTop: 70,
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#2D2D2D',
    width: '85%',
    textAlign: 'left',
    lineHeight: 52,
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Italic' : 'sans-serif',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  image: {
    marginTop: 20,
    width,
    height: 450,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: 'green',
  },
  inactiveDot: {
    backgroundColor: '#A0A0A0',
  },
  getStartedButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 30,
  },
  getStartedText: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
  },
});