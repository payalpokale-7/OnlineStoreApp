import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateProduct, deleteProduct } from '../redux/actions/productActions'; // Assuming you have actions for updating and deleting a product

const ProductDetails = ({ route, navigation }) => {
  const { productId, productName: initialProductName, productPrice: initialProductPrice } = route.params;
  const [productName, setProductName] = useState(initialProductName);
  const [productPrice, setProductPrice] = useState(initialProductPrice);
  const dispatch = useDispatch();

  const handleUpdateProduct = () => {
    if (!productName || !productPrice) {
      alert('Please fill in all fields');
      return;
    }

    const updatedProduct = {
      id: productId,
      title: productName,
      price: parseFloat(productPrice),
    };

    dispatch(updateProduct(updatedProduct));
    alert('Product updated successfully!');
    navigation.goBack(); // Navigate back to the previous screen
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(productId));
    alert('Product deleted successfully!');
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
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
        value={productPrice.toString()}
        onChangeText={(text) => setProductPrice(text)}
      />
      <Button title="Update Product" onPress={handleUpdateProduct} />
      <Button title="Delete Product" onPress={handleDeleteProduct} />
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

export default ProductDetails;
