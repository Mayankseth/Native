import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from './components/Header';
import Product from './components/Product';

function App(): React.JSX.Element {
  const products = [
    {
      name: 'Samsung Phone',
      price: 30000,
      color: 'Blue',
      image: 'https://cdn-icons-png.freepik.com/256/65/65958.png?semt=ais_hybrid',
    },
    {
      name: 'Apple Iphone',
      price: 130000,
      color: 'Black',
      image: 'https://cdn-icons-png.freepik.com/256/65/65958.png?semt=ais_hybrid',
    },
    {
      name: 'Nokia phone',
      price: 50000,
      color: 'White',
      image: 'https://cdn-icons-png.freepik.com/256/65/65958.png?semt=ais_hybrid',
    },
  ];

  return (
    <View>
      <Header />
      <ScrollView>
        {products.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

export default App;
