import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SearchScreen from '../screens/SearchScreen';
import Cart from '../screens/Cart';
import Orders from '../screens/Orders';
import Account from '../screens/Account';
import { Home as HomeIcon, Search, ShoppingCart, Package, User } from 'lucide-react-native';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Home':
              return <HomeIcon color={color} size={size} />;
            case 'Search':
              return <Search color={color} size={size} />;
            case 'Cart':
              return <ShoppingCart color={color} size={size + 8} />; // bigger for center button
            case 'Orders':
              return <Package color={color} size={size} />;
            case 'Account':
              return <User color={color} size={size} />;
            default:
              return null;
          }
        },
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: '#64cd8c',
        tabBarInactiveTintColor: '#888',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 30,
    marginLeft: 20,
    height: 70,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingBottom: 4,
    paddingTop: 8,
  },
  tabBarLabel: {
    fontSize: 12,
    paddingBottom: 5,
  },
});