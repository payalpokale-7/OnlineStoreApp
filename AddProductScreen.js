import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddProduct from '../components/AddProduct';

const AddProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>
      <AddProduct />
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

export default AddProductScreen;
