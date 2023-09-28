import React, { useState } from 'react';
import {
  Heading,
  FormControl,
  Center,
  Input,
  Flex,
  Text,
  Button,
  Checkbox,
  Link,
  Image,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './ContextApi/Context';

const Login = () => {
  const {name, auth,setIsAuth, setNamelogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://troubled-ray-fashion.cyclic.cloud/login', {
        email,
        password,
      });

      if (response.status === 200) {
        navigate('/');
        toast({
          position: "top",
          title: 'Success',
          description: 'Login successful',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

        setIsAuth(true);
        console.log(auth);
        const { token } = response.data;
        localStorage.setItem('token', token);

        const userResponse = await fetch('https://troubled-ray-fashion.cyclic.cloud/users', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (userResponse.ok) {
          const userData = await userResponse.json();
          const matchedUser = userData.find((user) => user.email === email);

          if (matchedUser) {
            const matchedUserName = matchedUser.name;
            setNamelogin(matchedUserName);

            console.log(name);
           
          }
        }
      }
    } catch (error) {
      console.error('Error logging in:', error);

      if (error.response && error.response.status === 409) {
        console.error('User not found. Please sign up first.');
        toast({
          position: "top",
          title: 'Error',
          description: 'User not found. Please sign up first.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } else if (error.response && error.response.status === 422) {
        console.error('Wrong password. Please try again.');
        toast({
          position: "top",
          title: 'Error',
          description: 'Wrong password. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <div style={{marginBottom:"15px"}}>
      <form onSubmit={handleSubmit}>
      
        <center  flexDirection="column" alignItems="center">
          <Image
            boxSize={{ base: '100px', md: '200px' }}
            height={{ base: '250px', md: '500px' }}
            width={{ base: '150px', md: '300px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQedry_ZjBYhqekBGAzjL3uTV--A5KyfBtUNHLzeGQajPWwh6HStS2pCASR7Adx7d89N4&usqp=CAU"
            alt="Apple Logo"
          />
          <Text  fontSize={{ base: '4xl', md: '6xl' }} fontWeight="bold">
            Apple ID
          </Text>
          <Text fontSize={{ base: 'lg', md: '2xl' }} color="gray.500">
            Manage your Apple account
          </Text>
        </center>
        <br></br>
        <Flex whiteSpace={0} flexDir={{ base: 'column', md: 'row' }}></Flex>
        <FormControl style={{ marginRight: '1rem' }}>
          <Input
            type="text"
            width={{ base: '100%', md: '30rem' }}
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
            width={{ base: '100%', md: '30rem' }}
            height="4rem"
            placeholder="Password"
            sx={{ '::placeholder': { fontSize: 'xl' } }}
            color="blue.500"
            name="password"
            onChange={handleChange}
          />
        </FormControl>
        <Flex/>
        <br></br>
        <Center mt="1rem">
          <Checkbox defaultChecked fontSize={{ base: '3xl', md: '4xl' }}>
            Remember me
          </Checkbox>
        </Center>
<ReactLink to = "/signup">
<Center mt="1rem">
          <Link color="blue.500" textDecoration="underline">
            <Text fontSize={{ base: 'xl', md: '2xl' }}>Create new Account</Text>
          </Link>
        </Center>
</ReactLink>
     

        <Center mt="1rem">
          <Button
            width={{ base: '100%', md: 'auto' }}
            colorScheme="blue"
            type="submit"
            fontSize={{ base: 'lg', md: '2xl' }}
          >
            Sign In
          </Button>
        </Center>
      </form>
    </div>
  );
};

export default Login;