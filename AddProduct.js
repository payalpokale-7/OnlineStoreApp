import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions'; // Assuming you have an action for adding a product

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    if (!productName || !productPrice) {
      alert('Please fill in all fields');
      return;
    }

    const newProduct = {
      id: Math.random().toString(), // Generate a unique ID (use a proper ID generator in a real app)
      title: productName,
      price: parseFloat(productPrice),
    };

    dispatch(addProduct(newProduct));
    alert('Product added successfully!');
    // You might want to navigate to the product list or take other actions after adding a product
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={(text) => setProductName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        keyboardType="numeric"
        value={productPrice}
        onChangeText={(text) => setProductPrice(text)}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default AddProduct;
