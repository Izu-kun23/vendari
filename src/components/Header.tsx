import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Image } from 'react-native';
import { ArrowLeft, Search } from 'lucide-react-native';

interface HeaderProps {
  showBackButton?: boolean;
  onBackPress?: () => void;
  initials?: string; // initials to show, e.g. "JD"
}

const Header: React.FC<HeaderProps> = ({ showBackButton = false, onBackPress, initials = 'JD' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {showBackButton ? (
          <TouchableOpacity onPress={onBackPress} style={styles.iconWrapper}>
            <ArrowLeft color="#000" size={24} />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconWrapper} />
        )}

        {/* Initials circle */}
        <View style={styles.initialsCircle}>
          <Text style={styles.initialsText}>{initials}</Text>
        </View>
      </View>

     
      <View style={styles.searchBar}>
        <Search color="#888" size={20} style={styles.searchIcon} />
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconWrapper: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'green', // customize color
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#ececec',
    borderRadius: 30,
    marginTop: -5,
    alignItems: 'center',
    paddingHorizontal: 18,
    height: 49,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});