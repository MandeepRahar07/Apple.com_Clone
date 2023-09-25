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
} from '@chakra-ui/react';
import axios from 'axios';

const Address = () => {
  const toast = useToast({ position: 'top-left' }); // Set the toast position to top-left
  const [formData, setFormData] = useState({
    country: '',
    city: '',
    town: '',
    pincode: '',
    contactNumber: '',
  });

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
      <Heading as="h1" size="lg" mb={4}>
       Add you Address Please
      </Heading>
      <form onSubmit={handleSubmit}>
        <div style={{marginTop: "80px"}}>
            <Flex flexDirection={{base: "column", md:"row"}}>

           
          <FormControl mb={4} flex="1" mr={4}>
          <FormLabel>Country</FormLabel>
          <Select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            size="lg" // Increase the size for better mobile usability
          >
            <option value="">Select Country</option>
            <option value="Country1">Country 1</option>
            <option value="Country2">Country 2</option>
            {/* Add more options as needed */}
          </Select>
        </FormControl>
          <FormControl mb={4} flex="1" mr={4}>
            <FormLabel>City</FormLabel>
            <Input type="text" name="city" value={formData.city} onChange={handleChange} required />
          </FormControl>
          <FormControl mb={4} flex="1" mr={4}>
            <FormLabel>Town</FormLabel>
            <Input type="text" name="town" value={formData.town} onChange={handleChange} required />
          </FormControl>
          <FormControl mb={4} flex="1" mr={4}>
            <FormLabel>Pincode</FormLabel>
            <Input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
          </FormControl>
          <FormControl mb={4} flex="1">
            <FormLabel>Contact Number</FormLabel>
            <Input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
          </FormControl>
          </Flex>
        </div>
        <Button type="submit" colorScheme="teal">
          Save Address
        </Button>
      </form>
    </Box>
  );
};

export default Address;
