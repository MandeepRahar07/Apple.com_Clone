import React from 'react';
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton, Text } from '@chakra-ui/react';
import { AiFillApple, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

function MainNavbar() {
  const listItemStyle = {
    textDecoration: 'none', // Remove underline from list items
    listStyle: 'none',
    fontSize: '12px',
    padding: '10px', // Remove default list bullets
  };



  return (
    <Box width="780px" margin="auto">
      <Flex
        as="ul"
        align="center"
        justify="space-between"
        padding={4}
        flexWrap={['wrap', 'nowrap']}
        listStyle="none"
      >
        <li style={listItemStyle}>
          <button>
            <h1 >
              <AiFillApple />
            </h1>
          </button>
        </li>
        <li style={listItemStyle}>
          <Box display={ {base: 'none', md:"block" }}>

          Store
          </Box>
          </li>
        <li style={listItemStyle}>
        <Box display={ {base: 'none', md:"block" }}>
           Mac
          </Box>
        </li>
        <li style={listItemStyle}>
        <Box display={ {base: 'none', md:"block" }}>
           iPhone
          </Box>
        </li>
        <li style={listItemStyle}>
        <Box display={ {base: 'none', md:"block" }}>
           iPad
          </Box>
        </li>
        <li style={listItemStyle}>
        <Box display={ {base: 'none', md:"block" }}>
           Watch
          </Box>
        </li>
        <li style={listItemStyle}>
        <Box display={ {base: 'none', md:"block" }}>
           Airpods
          </Box>
        </li>
        <li style={listItemStyle}>
        <Box display={ {base: 'none', md:"block" }}>
           TV & Home
          </Box>
        </li>
        <li style={listItemStyle}><Box display={ {base: 'none', md:"block" }}>
           Entertainment
          </Box></li>
        <li style={listItemStyle}>
        <Box display={ {base: 'none', md:"block" }}>
           Accosseroies
          </Box>
        </li>
        <li style={listItemStyle}><Box display={ {base: 'none', md:"block" }}>
           Support
          </Box></li>
        <li style={listItemStyle}>
          <Box display={['block', 'flex']} alignItems="center">
            <AiOutlineSearch className="icon" />
          </Box>
        </li>
        <li style={listItemStyle}>
          <Box display={['block', 'flex']} alignItems="center">
            <AiOutlineShoppingCart className="icon" />
          </Box>
        </li>
        <li style={{ ...listItemStyle, display: { base: 'none' } }}>
          <Menu display={ {base: 'block', md:"none" , lg: "none" }}>
            <MenuButton
              as={IconButton}
              display={ {base: 'block', md:"none" , lg: "none" }}
              aria-label="Menu"
              icon={<FaBars />}
              variant="ghost"
              colorScheme="gray"
              _hover={{
                color: 'teal.500',
                backgroundColor: 'transparent',
              }}
            />
            <MenuList>
              <MenuItem>Mac</MenuItem>
              <MenuItem>Store</MenuItem>
              <MenuItem>iPhone</MenuItem>
              <MenuItem>Watch</MenuItem>
              <MenuItem>TV & Home</MenuItem>
              <MenuItem>Accosseroies</MenuItem>
              <MenuItem>Airpods</MenuItem>
              <MenuItem>Entertainment</MenuItem>
              {/* Add more menu items here */}
            </MenuList>
          </Menu>
        </li>
        <li style={{ ...listItemStyle, display: { base: 'none' } }}>Login</li>
      </Flex>
    </Box>
  );
}

export default MainNavbar;
