import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  useToast,
  Select,
  Flex,
  Center,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Address = () => {
  const toast = useToast({ position: 'top-left' }); // Set the toast position to top-left
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    address: '',
    city: '',
    pin: '',
    country: '',
    contactNumber: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('', formData);
      // if (response.status === 200) {
        // toast({
        //   title: 'Success',
        //   description: 'Address saved successfully!',
        //   status: 'success',
        //   duration: 3000,
        //   isClosable: true,
        // });

        // Store form data in local storage
        localStorage.setItem('Address', JSON.stringify(formData));
        navigate("/payment")
        toast({
          title: 'Success',
          description: 'Address saved successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
     catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while saving the address.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <Box p={4} >
      <Heading as="h1" size="lg" mb={2}>
       Enter your name and address
      </Heading>
      <form onSubmit={handleSubmit}>
        <Center>
        <div style={{marginTop: "80px"}}>
          <FormControl mb={4} flex="1" mr={4}>

             <FormLabel>First Name</FormLabel>
            <Input type="text" name="fname" value={formData.fname} onChange={handleChange} required />

            <FormLabel>Last Name</FormLabel>
            <Input type="text" name="lname" onChange={handleChange} />
       
            <FormLabel>Street Address</FormLabel>
            <Input type="text" name="address" value={formData.address} onChange={handleChange} required />

            <Flex flexDirection={{ base: 'column', md: 'row' }}>
              <FormControl mb={2} mr={{ base: 0, md: 2 }}>
              <FormLabel>City</FormLabel>
                <Input
                  type="text"
                  width="100%"
                  height="2rem"
                  required={true}
                  name="city"
                  placeholder="City"
                  sx={{ '::placeholder': { fontSize: 'md' } }}
                  color="blue.500"
                  onChange={handleChange}
                />
              </FormControl>


              <FormControl mb={2}>
              <FormLabel>Pin No</FormLabel>
                <Input
                  type="text"
                  width="100%"
                  height="2rem"
                  required={true}
                  name="pin"
                  placeholder="Pin No"
                  minLength={6}
                  maxLength={6}
                  sx={{ '::placeholder': { fontSize: 'md' } }}
                  color="blue.500"
                  onChange={handleChange}
                />
              </FormControl>
            </Flex>

          <FormLabel>Country</FormLabel>
          <Select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            size="lg" // Increase the size for better mobile usability
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="China">China</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Albania">Albania</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Austria">Austria</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Angola">Angola</option>
                    <option value="Greece">Greece</option>
                    <option value="Algeria">Algeria</option>  
            
          </Select>
        </FormControl>

         
          <FormControl mb={4} flex="1">
            <FormLabel>Contact Number</FormLabel>
            <Input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required minLength={10} maxLength={10}/>
          </FormControl>
         
        </div>
      
        </Center>
        <Button type="submit" colorScheme="teal">
          Continue to Payment 
        </Button>
      </form>
   
    </Box>
  );
};

export default Address;