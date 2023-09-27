import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../ContextApi/Context';
import { Button, Box, Flex, Img, Center, Heading } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Cartpage() {
  const { CartData,SetCartData } = useContext(AuthContext);
  const [TotalPrice, SetTotalPrice] = useState(0);

  const DeleteItem = (index) => {
    // Use filter to create a new array without the item with the given index
    const newCartData = CartData.filter((item, i) => i !== index);
    // Update the cart data in your context or state
    // Example using context:
    // Assuming you have a function updateCartData to update the state:
    // updateCartData(newCartData);
    // If using React state:
    SetCartData(newCartData); // Assuming you have setCartData as your state setter
  };
  

  const IncreaseQuantity = (index) => {
    // Find the item by index
    const item = CartData[index];
    if (item) {
      // Increase quantity
      item.quantity += 1;
      // Update total price
      SetTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
    }
  };

  const DecreaseQuantity = (index) => {
    // Find the item by index
    const item = CartData[index];
    if (item && item.quantity > 1) {
      // Decrease quantity, but not below 1
      item.quantity -= 1;
      // Update total price
      SetTotalPrice((prevTotalPrice) => prevTotalPrice - item.price);
    }
  };

  useEffect(() => {
    // Calculate total price based on CartData
    const totalSum = CartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
    SetTotalPrice(totalSum);
  }, [CartData]);

  return (
    <div>
      {CartData.length === 0 ? (
        <div>
          <Heading>Add Item to Cart</Heading>
          <Center>
            <Img
              src="https://cdn.dribbble.com/users/20130/screenshots/2933302/carrello-800600.gif"
              width="50%"
            />
          </Center>
        </div>
      ) : (
        <div width="80%" margin="auto">
          <div>
            {CartData.map((item, index) => (
              <Box key={index}>
                <Box display="flex" alignItems="center" justifyContent="space-between" p={4}>
                  <Box>
                    <Flex
                      alignItems="center"
                      flexDirection={{ base: 'column', md: 'row' }}
                      justifyContent="center"
                    >
                      <img src={item.image} alt="name" width="120" style={{ marginRight: '16px' }} />
                      <h3 style={{ marginBottom: '8px' }}>{item.name}</h3>
                      <h3 style={{ marginBottom: '8px', marginLeft: '8px', fontWeight: 'bold' }}>
                        ₹{item.price}
                      </h3>
                    </Flex>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <Button
                      style={{ marginRight: '8px', marginLeft: '8px' }}
                      onClick={() => DecreaseQuantity(index)} // Pass the item index
                    >
                      -
                    </Button>
                    <h2 style={{ margin: '0 16px' }}>{item.quantity}</h2>
                    <Button
                      style={{ marginRight: '8px', marginLeft: '8px' }}
                      onClick={() => IncreaseQuantity(index)} // Pass the item index
                    >
                      +
                    </Button>
                    <Box>
                      <button onClick={() => DeleteItem(index)}>
                        <FaTrash />
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </div>
          <Box style={{ float: 'right', textAlign: 'right', marginRight: '20px', marginTop: '20px' }}>
            <Flex>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
                Total Price:
              </h3>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff5733', paddingLeft: '10px' }}>
                ₹{TotalPrice}
              </h3>
            </Flex>

            
            <Link to="/address">
              <Button
                backgroundColor="#4caf50"
                color="white"
                padding="10px 20px"
                borderRadius="5px"
                cursor="pointer"
                fontSize="16px"
                marginTop="10px"
                transition="background-color 0.3s ease"
              >
                Checkout
              </Button>
            </Link>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Cartpage;
