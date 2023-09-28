import React, { useContext } from 'react';
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton, Text } from '@chakra-ui/react';
import { AiFillApple, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { AuthContext } from '../ContextApi/Context';
import { Link } from 'react-router-dom';


function MainNavbar() {

  const {name,setName,CartData} = useContext(AuthContext);


  const listItemStyle = {
    textDecoration: 'none', // Remove underline from list items
    listStyle: 'none',
    fontSize: '12px',
    padding: '8px', // Remove default list bullets
  };
  const stickyNavbarStyle = {
    position: 'sticky',
    top: 0, // Stick to the top of the viewport
    backgroundColor: 'white', // Customize the background color as needed
    zIndex: 1000, // Ensure it's above other content
  };


  return (
    <Box margin="auto" style={stickyNavbarStyle} >
      <Flex
        as="ul"
        align="center"
        justify="space-between"
        padding={4}
        flexWrap={['wrap', 'nowrap']}
        listStyle="none"
      >
        <li style={listItemStyle}>
          <Link to = "/">
          <button>
            <h1 >
              <AiFillApple />
            </h1>
          </button>
          </Link>
         
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
          <Link to = "/iphone15">
          <Box display={ {base: 'none', md:"block" }}>
           iPhone
          </Box>
          </Link>
     
        </li>
        <li style={listItemStyle}>
        <Box display={ {base: 'none', md:"block" }}>
           iPad
          </Box>
        </li>
        <li style={listItemStyle}>
          <Link to = "/watch">
          <Box display={ {base: 'none', md:"block" }}>
           Watch
          </Box>
          </Link>
       
        </li>
        <li style={listItemStyle}>
        <Link to = "/airpods">
        <Box display={ {base: 'none', md:"block" }}>
           Airpods
          </Box>
          </Link>
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
        <Link to = "cart">
        <li style={listItemStyle}>
          <Box display={['block', 'flex']} alignItems="center">
            <Flex>
              <Box>

            <AiOutlineShoppingCart className="icon" />
              </Box>
              <Box>
            <h3  style={{marginBottom:"-7px",color:'red', fontWeight:"bold"}}>{CartData.length}</h3>
              </Box>
            </Flex>
          </Box>
        </li>
        </Link>
       
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
              <Link to="/iphone15">
              <MenuItem>iPhone</MenuItem>
              </Link>

              
              {/* ///////// */}

              <Link to = "/watch">  <MenuItem>Watch</MenuItem> </Link>
              <MenuItem>TV & Home</MenuItem>
              <MenuItem>Accosseroies</MenuItem>
              <Link to = "/airpods"><MenuItem>Airpods</MenuItem></Link>
              <MenuItem>Entertainment</MenuItem>
             <Link to = "/login">
             <MenuItem>
              {name !== "" ? name : "Login"}
              </MenuItem>
             </Link> 
            
            </MenuList>
          </Menu>
        </li>

        <li style={{ ...listItemStyle, display: { base: 'none' } }}>
        <Link to = "/login">   <Box display={ {base: 'none', md:"block" }}>
          {name !== "" ? name : "Login"} 
          </Box>
         </Link> 
          </li>
      </Flex>
    </Box>
  );
}
export default MainNavbar;

