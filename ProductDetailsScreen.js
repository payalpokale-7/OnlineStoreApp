import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <ProductDetails route={route} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ProductDetailsScreen;
