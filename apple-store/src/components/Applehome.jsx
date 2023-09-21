import React from 'react';
import { Box } from '@chakra-ui/react';

const Applehome = () => {
  return (
    <Box>
      {/* Image for Small Screen */}
      <Box
           
        display={{ base: 'block', md: 'none', lg: 'none' }}
      >
        <h1>small</h1>
        <img src="https://www.apple.com/v/home/be/images/heroes/iphone-15-pro/hero_iphone15pro_announce__c1coc7n3a0uq_small_2x.jpg" alt="Small Screen Image" />
      </Box>

      {/* Image for Medium Screen */}
      <Box
        w="100%"
        h="auto"
        display={{ base: 'none', md: 'block', lg: 'none' }}
      >
        <h1>medium</h1>
        <img src="https://www.apple.com/v/home/be/images/heroes/iphone-15-pro/hero_iphone15pro_announce__c1coc7n3a0uq_mediumtall_2x.jpg" alt="Medium Screen Image" />
      </Box>

      {/* Image for Large Screen */}
      <Box
        w="100%"
        h="600px"
        display={{ base: 'none', md: 'none', lg: 'block' }}
      >
        <h1>large</h1>
        <img src="https://www.apple.com/v/home/be/images/heroes/iphone-15-pro/hero_iphone15pro_announce__c1coc7n3a0uq_large_2x.jpg" alt="Large Screen Image" />
      </Box>
    </Box>
  );
};

export default Applehome;
