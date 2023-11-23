import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const DrawerMenu = (props) => {
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, dispatch an action to clear user authentication
    alert('Logout functionality would be implemented here');
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Online Store</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={handleLogout}
        labelStyle={styles.logoutLabel}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#2C3E50',
  },
  headerText: {
    color: '#FFF',
    fontSize: 20,
  },
  logoutLabel: {
    color: 'red',
  },
});

export default DrawerMenu;
