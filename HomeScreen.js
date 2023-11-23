import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';

const HomeScreen = ({ navigation }) => {
  const navigateToAddProduct = () => {
    navigation.navigate('AddProduct');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <ProductList />
      <Button title="Add New Product" onPress={navigateToAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default HomeScreen;
