import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../ContextApi/Context';
import { Button, Box ,Flex} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function Cartpage() {
  const { CartData } = useContext(AuthContext);
  const [price, Setprice] =useState(2000);
  const[TotalPrice, SetTotalPrice] = useState(4000)


  const DeleteItem = (id)=>CartData.filter((item)=> item.id !=id )


  const IncreaseQuantity = (id)=>{
    const itemIndex = CartData.findIndex((item) => item.id === id);
    if(itemIndex !== -1){
     SetTotalPrice(TotalPrice + CartData[itemIndex].price) 
     CartData[itemIndex].quantity += 1;
    }
  }




  const DicreaseQuantity = (id)=>{
    const itemIndex = CartData.findIndex((item) => item.id === id);
    if(itemIndex !== -1){
     SetTotalPrice(TotalPrice - CartData[itemIndex].price) 
     CartData[itemIndex].quantity -= 1;
    }
  }

  useEffect(()=>{
      const totalSum = CartData.reduce((acc, item) => acc + item.price, 0);
      SetTotalPrice(totalSum);
  })
    

  return (
    <div>
      <div width="80%" margin="auto">
        <div>
          {CartData.map((item) => (
            <Box key={item.id} display="flex" alignItems="center" justifyContent="space-between" p={4}>
              <Box>
                <img src={item.imageSrc} alt={item.name} width="100" />
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
              </Box>

              <Box display="flex" alignItems="center">
                <Button>-</Button>
                <h2>{item.quantity}</h2>
                <Button>+</Button>
                <Box>
                  <FaTrash />
                </Box>
              </Box>
            </Box>
          ))}
        </div>

        <Box display="flex" alignItems="center" justifyContent="space-between" p={4}>
          <Box >
           
            <Flex
            alignItems="center"
            flexDirection={{ base: 'column', md: 'row' }} // On base screens, it's column; on larger screens (md and up), it's row
            justifyContent="center" // You can adjust this as needed
          >

            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-product-red?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027205642"
              alt="name"
              width="120"
              style={{ marginRight: '16px' }}
              />
            <h3 style={{ marginBottom: '8px' }}>Mandeep Rahar</h3>
              </Flex>
          </Box>

          <Box display="flex" alignItems="center">
            <Button style={{ marginRight: '8px', marginLeft: '8px' }}>-</Button>
            <h2 style={{ margin: '0 16px' }}>1</h2>
            <Button style={{ marginRight: '8px', marginLeft: '8px' }}>+</Button>
            <Box>
              <FaTrash />
            </Box>
          </Box>
        </Box>

        <Box style={{ float: 'right', textAlign: 'right', marginRight: '20px', marginTop: '20px' }}>
            <Flex>

  <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Total Price:</h3>
  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff5733',paddingLeft:"10px"}}>000000</h3>
            </Flex>
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
</Box>


      </div>
    </div>
  );
}

export default Cartpage;
