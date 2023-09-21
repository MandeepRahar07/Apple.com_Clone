import React, { useState } from 'react';
import {
  Heading,
  FormControl,
  Input,
  Flex,
  Text,
  Button,
  Checkbox,
  Link,
  Image,
  Alert , AlertIcon
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', data)
      .then((res)=>{
          console.log(res.data)
          setData(data);
          <Alert status='info'>
          <AlertIcon />
          Login Suggessful
        </Alert>
         alert("signup  ")
      });
    } catch (error) {
      console.error('Error logging in:', error);
      <Alert status='error'>
      <AlertIcon />
      Signup First
    </Alert>
    alert("signup first ")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Flex justifyContent="space-between" alignItems="center" mr="280px" ml="280px">
          <Heading as="h3" size="lg">
            Apple ID
          </Heading>
          <Flex justifyContent="space-between" alignItems="center">
            <Link>
              <Text fontSize="xl" color="gray.500" mr="2rem">
                Sign In
              </Text>
            </Link>
            <Link>
              <Text fontSize="xl" color="gray.500" mr="2rem">
                Create Your Apple ID
              </Text>
            </Link>
            <Link>
              <Text fontSize="xl" color="gray.500">
                FAQ
              </Text>
            </Link>
          </Flex>
        </Flex>
        <hr></hr>
        <center>
          <Image
            boxSize="200px"
            height="500px"
            width="300px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQedry_ZjBYhqekBGAzjL3uTV--A5KyfBtUNHLzeGQajPWwh6HStS2pCASR7Adx7d89N4&usqp=CAU"
            alt="Apple Logo"
          />
          <Text fontSize="6xl" fontWeight="bold">
            Apple ID
          </Text>
          <Text fontSize="2xl" color="gray.500">
            Manage your Apple account
          </Text>
        </center>
        <br></br>
        <FormControl style={{ marginRight: '1rem' }}>
          <Input
            type="text"
            width="30rem"
            height="4rem"
            placeholder="Email or Phone no."
            sx={{ '::placeholder': { fontSize: 'xl' } }}
            color="blue.500"
            name="email"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl style={{ marginRight: '1rem' }}>
          <Input
            type="password"
            width="30rem"
            height="4rem"
            placeholder="Password"
            sx={{ '::placeholder': { fontSize: 'xl' } }}
            color="blue.500"
            name="password"
            onChange={handleChange}
          />
        </FormControl>
        <br></br>
        <Checkbox defaultChecked fontSize="4xl">
          Remember me
        </Checkbox>

        <Link color="blue.500" textDecoration="underline">
          <Text fontSize="xl">Forgotten your password?</Text>
        </Link>

        <Button mt="1rem" colorScheme="blue" type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default Login;



