import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  ActivityIndicator,
} from 'react-native';

const vendariLogo = require('../../assets/vendari_logo.png');

const Start = () => {
  const logoAnim = useRef(new Animated.Value(0)).current; // for translateY
  const textOpacity = useRef(new Animated.Value(0)).current; // for text fade-in
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      Animated.sequence([
        Animated.timing(logoAnim, {
          toValue: -30,
          duration: 800,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Show spinner after animations complete
        setShowSpinner(true);
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={vendariLogo}
        style={[styles.logo, { transform: [{ translateY: logoAnim }] }]}
        resizeMode="contain"
      />
      <Animated.Text style={[styles.text, { opacity: textOpacity }]}>
        Vendari
      </Animated.Text>
      {showSpinner && <ActivityIndicator size="large" color="#3C3C7C" />}
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4F7E8',
  },
  logo: {
    width: 350,
    height: 330,
    marginBottom: -70,
  },
  text: {
    fontSize: 40,
    color: '#333',
    marginTop: -49,
    marginBottom: 40,
    fontWeight: '700',
  },
});