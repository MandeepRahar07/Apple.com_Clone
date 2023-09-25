import React, { useContext, useState,useEffect } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
Text
,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaHeart, FaShoppingCart, FaShare, FaBars } from 'react-icons/fa';

import { Link } from 'react-router-dom';


function NavbarFirst() {

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={{ base: '4', md: '8' }}
      py="3"
      borderBottom='1px'
      
    >
    <Link to="/">
      <Box
        alignItems="center"
        justifyContent="center"
      >
         <h1>
              <AiFillApple />
            </h1>
      </Box>
      </Link>


      <Flex
        display={{ base: 'none', md: 'flex' }} // Hide on small screens, show on medium screens and above
        justifyContent="space-between"
        alignItems="center"
        gap="7" // Adjust the gap between items
      >
        <Link to="/chair">
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
       Store
      </Text>
      </Link>

      <Link to="/table">
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Mac
      </Text>
      </Link>

      <Link to="/lambs">
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        iPhone
      </Text>
      </Link>

      <Link to="/sofas">
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Watch
      </Text>
      </Link>

      <Link to="/cases">
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        TV & Home
      </Text>
      </Link>

      <Link to="/other">
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Other
      </Text>
      </Link>

      </Flex>
      <Flex alignItems="center" gap="4">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.700" />} />
          <Input type="text" placeholder="Search" />
        </InputGroup>
      
        <Flex alignItems="center" gap="2">
          <Tooltip label="Cart Page">
            <Link to="/cart">
            <IconButton
              aria-label="Cart"
              icon={<FaShoppingCart />}
              variant="ghost"
              colorScheme="gray"
            />
            </Link>
          </Tooltip>
          <Box
          ml="-6"
          p="1"
          color="red"
          borderRadius="full"
          fontWeight="bold"
          fontSize="sm"
          minWidth="1.5rem"
          textAlign="center"
          marginBottom='15px'
        >
          {cartItemCount}
        </Box>
        </Flex>
        <Tooltip label="Menu">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Menu"
              icon={<FaBars />}
              variant="ghost"
              colorScheme="gray"
              _hover={{ // Add hover effect styling
                color: 'teal.500',
                backgroundColor: 'transparent',
              }}
            />
            <MenuList
              _hover={{ // Add hover effect styling for the MenuList
                backgroundColor: 'gray.100',
              }}
            >
              <Link to="/chair">
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Chair</MenuItem>
              </Link>
              <Link to="/table">
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Table</MenuItem>
              </Link>
              <Link to="/lambs">
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Lamps</MenuItem>
              </Link>

              <Link to="/sofas">
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Sofas</MenuItem>
              </Link>
              <Link to="/cases">
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Cases</MenuItem>
              </Link>
              <Link to="/other">
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Other</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Tooltip>
      
      <Link to="/login">
        <Button colorScheme="blue" size="md" width="100%"  bg='#f79525'>
          {namelogin.length===0 ? "Login" : namelogin}
    </Button>
    </Link>
      </Flex>
    </Box>
  );
}

export default NavbarFirst;