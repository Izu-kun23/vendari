import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const Register = ({ navigation }: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.heading}>Create Account</Text>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            secureTextEntry
            placeholderTextColor="#aaa"
          />
        </View>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('../../../assets/google.png')} // Make sure this path is correct
            style={styles.googleLogo}
          />
          <Text style={styles.googleText}>Sign Up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text style={styles.signupLink}>Log in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E4F7E8',
    padding: 24,
    paddingTop: 60,
  },
  heading: {
    marginTop: 50,
    fontSize: 32,
    fontWeight: '700',
    color: '#2D2D2D',
    textAlign: 'center',
    marginBottom: 40,
  },
  form: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 80,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  signupButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,

  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#A0A0A0',
  },
  orText: {
    marginHorizontal: 12,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginBottom: 30,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  googleText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  footerText: {
    textAlign: 'center',
    color: '#444',
    fontSize: 14,
    marginBottom: 30,
  },
  signupLink: {
    color: 'green',
    fontWeight: '600',
  },
});