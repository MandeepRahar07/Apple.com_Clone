import { Box, Image, Heading, Text, Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate(); // Use this for navigation

  const randomOrderId = Math.round(Math.random() * 3311000);

  const continueShopping = () => {
    navigate("/"); 
  };

  return (
    <Box textAlign="center">
        <Center>
        <Image
        src="https://us.v-cdn.net/6033805/uploads/NFFSMTHMR4G8/quaintlikelyflyingfish-max-1mb.gif"
        alt=""
        width="200px"
      />
        </Center>
     
      <Heading as="h2" size="lg">
        Thank you for your purchase!
      </Heading>
      <Text>
        Your order id: <span id="order">{randomOrderId}</span>
      </Text>
      <Button
        colorScheme="teal"
        onClick={continueShopping}
        mt={4}
        size="lg"
        borderRadius="6px"
      >
        Continue Shopping
      </Button>
    </Box>
  );
};

export default Success;