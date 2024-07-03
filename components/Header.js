import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

function Header(){
  const cartData = useSelector((state) => state.reducer);

  console.log('cartData:', cartData); // Log cartData to see what it looks like

  const [cartItem, setCartItem] = useState(0);
  useEffect(() => {
      setCartItem(cartData.length);
    
  }, [cartData]);

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: "right", padding: 10, backgroundColor: "purple" }}>{cartItem}</Text>
    </View>
  );
};

export default Header;
