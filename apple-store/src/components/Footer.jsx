import React from 'react';
import { Box, Flex, Text, Link, Stack, IconButton, Center } from '@chakra-ui/react';
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaPhone,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray" py={8} color="white">
     

      
      <Flex
        direction={{ base: 'column', md: 'row' }} // Responsive column layout
        maxW="1200px"
        mx="auto"
        justify="space-between"
        px={4}
        align="Center"
        
        flexWrap="wrap" // Wrap content to the next line on small screens
      >
        {/* Footer Column 1 */}
        <Stack direction="row" spacing={4} mb={{ base: 4, md: 0 }}>
          <Flex alignItems="center">
            <IconButton
              icon={<FaPhone />}
              aria-label="Phone Icon"
              fontSize="12px"
              ml={-8}
              variant="unstyled"
            />
      
              
           
            <Stack spacing={1}>
              <Text>Working</Text>
              <Text>24*7</Text>
              <Text>from 8.00 - 9.00</Text>
            </Stack>
          </Flex>
        </Stack>

        {/* Footer Column 2 */}
        <Stack direction="row" spacing={4} mb={{ base: 4, md: 0 }}>
          <Flex alignItems="center">
            <Stack spacing={1}>
              <Text>Free Delivery</Text>
              <Text>WorldWide</Text>
              <Text>from $2.500</Text>
            </Stack>
          </Flex>
        </Stack>

        {/* Footer Column 3 */}
        <Stack direction="row" spacing={4}>
          <Flex alignItems="center">
            <Stack spacing={1}>
              <Text>Support</Text>
              <Text>Documentation</Text>
              <Text>All collection</Text>
            </Stack>
          </Flex>
        </Stack>

        {/* Footer Column 4 */}
        <Stack direction="column" spacing={4} mt={{ base: 4, md: 0 }}>
          <Text fontSize="xl">0332 253 3535</Text>
          <Text>Online Store helpline</Text>
        </Stack>
      </Flex>
     
      {/* Footer Row 2 */}
      
      <Flex
        maxW="1200px"
        mx="auto"
        justify="space-between"
        align="center"
        py={4}
        px={4}
        mt={4}
      
        flexWrap="wrap" // Wrap content to the next line on small screens
      >
        <Text fontSize={{ base: 'sm', md: 'md' }}>
          &copy; 2023 AAMM All Right Reserved
        </Text>

        <Flex>
          <Link href="#" isExternal>
            <IconButton
              icon={<FaFacebook />}
              aria-label="Facebook Icon"
              fontSize="24px"
              variant="unstyled"
              mr={2}
            />
          </Link>
          <Link href="#" isExternal>
            <IconButton
              icon={<FaLinkedin />}
              aria-label="LinkedIn Icon"
              fontSize="24px"
              variant="unstyled"
              mr={2}
            />
          </Link>
          <Link href="#" isExternal>
            <IconButton
              icon={<FaYoutube />}
              aria-label="YouTube Icon"
              fontSize="24px"
              variant="unstyled"
              mr={2}
            />
          </Link>
          <Link href="#" isExternal>
            <IconButton
              icon={<FaTwitter />}
              aria-label="Twitter Icon"
              fontSize="24px"
              variant="unstyled"
            />
          </Link>
        </Flex>

        <Flex>
          <Text fontSize="xl" mr={2}>
            Accepting payment methods
          </Text>
          <IconButton
            icon={<FaCcVisa />}
            aria-label="Visa Icon"
            fontSize="24px"
            variant="unstyled"
            mr={2}
          />
          <IconButton
            icon={<FaCcMastercard />}
            aria-label="MasterCard Icon"
            fontSize="24px"
            variant="unstyled"
            mr={2}
          />
          <IconButton
            icon={<FaCcPaypal />}
            aria-label="PayPal Icon"
            fontSize="24px"
            variant="unstyled"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
