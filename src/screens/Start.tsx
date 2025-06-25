import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../types'; // or wherever you define it

const vendariLogo = require('../../assets/vendari_logo.png');

// Type navigation prop for this screen
type StartScreenProp = NativeStackNavigationProp<RootStackParamList, 'Start'>;

const Start = () => {
  const navigation = useNavigation<StartScreenProp>();

  const logoAnim = useRef(new Animated.Value(0)).current; // translateY
  const textOpacity = useRef(new Animated.Value(0)).current; // fade-in text
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
        setShowSpinner(true);

        setTimeout(() => {
          navigation.navigate('Welcome');
        }, 3000);
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [logoAnim, textOpacity, navigation]);

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