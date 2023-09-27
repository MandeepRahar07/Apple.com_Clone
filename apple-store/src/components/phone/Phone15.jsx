
import { Heading, Text, Image, Box, Center , Flex, UnorderedList, ListItem, Button} from '@chakra-ui/react';
import { useEffect , useState } from 'react';
import {Link} from 'react-router-dom'

const Phone15 = ()=>{

    const images = [
       "https://instrukcjeapple.pl/wp-content/uploads/2022/09/Dynamic-Island.png",
       "https://www.mygsm.me/media/catalog/product/i/p/iphone-15-dubai-3.jpg",
       "https://i.ytimg.com/vi/BBcwE4bMD70/maxresdefault.jpg",
       "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2017/10/iphone-x-5w-charger.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1c"

      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000); // Change slide every 1 second
    
        return () => {
          clearInterval(interval);
        };
      }, [currentIndex, images.length]);


    return (
    <Box>
            
        <Box width="100%" bgColor="white"  height={{ base: '20rem', md: '40rem', xl: '47rem' }} paddingX={{ base: '2', md: '4', xl: '8' }}>
                <Text color="black" fontSize={{ base: '4xl', md: '6xl', xl: '8xl' }} fontWeight="bold" >iPhone 15 </Text>
                {/* <Text color="black" fontSize={{ base: '3xl', md: '4xl', xl: '6xl' }} fontWeight="bold">New camera. New design. Newphoria</Text>
                <Text fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="bold" color="gray.500">Available from 22.09</Text> */}
                <Center>
                    <Box boxSize={{ base: '0px', md: '300px', xl: '400px' }}>
                    <Image src='https://vedi-express.twic.pics/1830799-large_default/apple-iphone-14-pro-max-1tb-silver.jpg?twic=v1/resize=640' alt='Dan Abramov' 
                    height= "28rem" width= "150rem" />
                    </Box>
                </Center>
            
            <Button  width={{ base: '100%', md: 'auto' }}
            colorScheme="blue"
            type="submit"
            fontSize={{ base: 'lg', md: '2xl' }}>Pre-Order</Button>

             <Text color="black" fontSize={{ base: '1xl', md: '2xl', xl: '4xl' }} fontWeight="bold">From $799 or $33.29/mo. for 24 mo</Text>
            <Text fontSize={{ base: '1xl', md: '2xl', xl: '3xl' }} fontWeight="bold" color="gray.500">Available from 22.09</Text> 
        </Box>



        <Box>
        <Text color="black" fontSize={{ base: '4xl', md: '6xl', xl: '8xl' }} fontWeight="bold" >Get the highlights. </Text>
        <Box width="100%" borderRadius="2xl">
                    <Box   height={{ base: '300px', md: '400px', xl: '600px' }}
                        width="90%"
                        margin="auto"
                        mt="50px"
                        boxShadow="xl" // Add shadow
                        borderRadius="2xl" // Add curved corners
                        >
                    <Image
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        width="100%"
                        height="100%"
                        fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }}
                    />
                    </Box>
                </Box>
        </Box>

        <Box>
        <Text color="black" fontSize={{ base: '4xl', md: '6xl', xl: '8xl' }} fontWeight="bold" >Take a closer look. </Text>

        <Center mt = "50px">
                    <Box boxSize={{ base: '200px', md: '700px', xl: '700px' }}>
                    <Image src='https://www.apple.com/v/iphone-15/a/images/overview/closer-look/all_colors__d4w03v51nwcy_large.jpg' alt='phone 15' 
                    height= "28rem" width= "150rem" />
                    </Box>
                </Center>
        </Box>



        <Box>
        <Text color="black" fontSize={{ base: '4xl', md: '6xl', xl: '8xl' }} fontWeight="bold" >Keep exploring iPhone. </Text>
        <Flex>
        <Link>
                <Box  boxSize={{ base: '0px', md: '300px', xl: '450px' }}>
                        <Image src='https://img.freepik.com/premium-photo/smart-phone-isolated-white-screen-with-empty-background-mockup_752648-43.jpg' alt='iPhone 15' 
                        height= "30rem" width= "100%" />
                        <Center> <Text fontSize="4xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone 15</Text></Center>
                        <Center> <Text fontSize="xl" >The ultimate iPhone.</Text></Center>
                       
                     </Box>
                </Link>

                <Link>
                <Box  boxSize={{ base: '0px', md: '300px', xl: '450px' }}>
                        <Image src='https://cdn.dxomark.com/wp-content/uploads/medias/post-125428/Apple-iPhone-14-Pro-Max_FINAL_featured-image-packshot-review-1.jpg' alt='iPhone 14' 
                        height= "30rem" width= "100%" />
                        <Center> <Text fontSize="4xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone 14</Text></Center>
                        <Center> <Text fontSize="xl" >As amazing as ever.</Text></Center>
                       
                     </Box>
                </Link>

                <Link>
                <Box  boxSize={{ base: '0px', md: '300px', xl: '450px' }}>
                        <Image src='https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/D/I/174909_1663482081.jpg' alt='Dan Abramov' 
                        height= "30rem" width= "80%" />
                       <Center> <Text fontSize="4xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone 13</Text></Center>
                        <Center> <Text fontSize="xl">A total powerhouse.</Text></Center>
                       
                     </Box>
                </Link>

                <Link>
                <Box  boxSize={{ base: '0px', md: '300px', xl: '450px' }}>
                        <Image src='https://www.refurbished.store/cache/images/iphone-xs-zilver-multiapple_1_600x600_BGresize_16777215-tj.png' alt='Dan Abramov' 
                        height= "30rem" width= "100%" />
                              <Center> <Text fontSize="4xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone X</Text></Center>
                        <Center> <Text fontSize="xl">Serious power. Serious value.</Text></Center>
                       
                     </Box>
                </Link>
        </Flex>
                
        </Box>

    </Box>
    )
}

export default Phone15;