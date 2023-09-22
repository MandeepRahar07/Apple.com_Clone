import { Box, Heading, Text , Image, Flex, Button ,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,useDisclosure ,
    ModalCloseButton,
    Center,} from "@chakra-ui/react";
import { useEffect , useState } from 'react';
import {Link} from 'react-router-dom'

const Phone14 = () => {

    const images = [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1676506021673",
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660689596976",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch_AV3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1677293707305",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671474798353",
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1676930655577",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_AV2_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671474739477",
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const { isOpen, onOpen, onClose } = useDisclosure();
      const [model , setModel] = useState("");
      const [color , setColor] = useState("");
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000); // Change slide every 1 second
    
        return () => {
          clearInterval(interval);
        };
      }, [currentIndex, images.length]);


    return (

        <Box textAlign="left" ml = "20" mr = "20">
            <Heading as="h1" size="2xl" mr="2">
                Buy iPhone 14
            </Heading>
            <Text fontSize="xl" color="gray.500" mr="0" mt="2">
                From $799 or $33.29/mo. for 24 mo. 
            </Text>

         <Box mr = "0">
            <Flex>

{/* ..............................slide image............................. */}

            <Box width="70%" borderRadius="2xl">
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

                    {/* <Box>
                        
                    <Image src={model} alt='Dan Abramov' 
                    height= "19rem" width= "100rem" />

                    </Box> */}
                </Box>

                <Box width = "30%">
                    <Flex>
                    <Text fontSize="4xl" color="black" fontWeight="bold" mr="0" mt="2">    Model.   </Text>
                    <Text fontSize="4xl" color="gray.500" fontWeight="bold" mr="0" mt="2" ml = "1">  Which is best for you? </Text>
                    </Flex>

{/* ..................................three button on rightside............................  */}


                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }} 
                // onClick={()=>setModel("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1676506021673")}
                 >       
                        <Flex justifyContent="space-between" alignItems="center" width="100%">
                            <Box textAlign="left">
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">iPhone 14</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">6.1-inch display</Text>
                            </Box>
                            <Box>
                                <Text fontSize="lg" color="gray.500" textAlign="right">$29.12/mo. for 24 month</Text>
                            </Box>
                     </Flex>  
                </Button>
                   
                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }} >       
                        <Flex justifyContent="space-between" alignItems="center" width="100%">
                            <Box textAlign="left">
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">iPhone 14 Plus</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">6.7-inch display</Text>
                            </Box>
                            <Box>
                                <Text fontSize="lg" color="gray.500" textAlign="right">$33.29/mo. for 24 month</Text>
                            </Box>
                     </Flex>  
                </Button>

                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  onClick={onOpen} >       
                        <Flex justifyContent="space-between" alignItems="center" width="100%">
                            <Box textAlign="left">
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">Need help choosing a model?</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">Explore the differences in screen size and battery life.</Text>
                            </Box>
                     </Flex>  
                </Button>

       {/* ............................Modal page..................... */}

            <Modal isOpen={isOpen} onClose={onClose} size="4xl">
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader><Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">Which model is right for you?</Text></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                           <Flex>
                           <Box boxSize={{ base: '0px', md: '300px', xl: '450px' }} mt = "0">
                    <Image src='https://i-smart.by/image/catalog/iphone14/2d07bad4078a55691c31650d909ab24f.jpeg' alt='Dan Abramov' 
                    height= "19rem" width= "100rem" /><Center>
                        <Text fontSize="2xl" color="black" fontWeight="bold" >iPhone 14</Text>
                    </Center>
                    </Box>

                    <Box boxSize={{ base: '0px', md: '300px', xl: '450px' }} mt = "8">
                    <Image src='https://cdn.dxomark.com/wp-content/uploads/medias/post-132367/Apple-iPhone-14_Plus_FINAL_featured-image-packshot-review.jpg' alt='Dan Abramov' 
                    height= "16rem" width= "100rem" /><Center>
                     <Text fontSize="2xl" color="black" fontWeight="bold" mt="1">iPhone 14 Plus</Text>
                  

                    </Center>
                 
                    </Box>
                           </Flex>
                        </ModalBody>
                        <Box mt = "1">
                        
                        <Text fontSize="xl" color="black"  mt="3" textAlign="left" ml = "4" mr = "4">
                           iPhone 14 and iPhone 14 Plus share the same fantastic innovations, like a Pro-level camera, a durable design with Ceramic Shield, 
                           vital safety features, and our lightning-fast A15 Bionic chip with 5-core GPU.
                        </Text>
                        <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml = "4" mr = "4">Here are the key differences:</Text>
                        <Text fontSize="xl" color="black"  mt="3" textAlign="left" ml = "4" mr = "4">
                        iPhone 14 has a 6.1-inch display¹ and gets up to 20 hours video playback.
                       iPhone 14 Plus has a 6.7-inch display¹ and gets up to 26 hours video playback.
                        </Text>
                        </Box>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                            </Button>
                        </ModalFooter>
                        </ModalContent>

                  
            </Modal>

{/* ...............................right side color ...........................  */}
                 <Flex mt = "20">
                    <Text fontSize="4xl" color="black" fontWeight="bold" mr="0" mt="2">   Finish.  </Text>
                    <Text fontSize="4xl" color="gray.500" fontWeight="bold" mr="0" mt="2" ml = "1">  Pick your favorite. </Text>
                </Flex>
                <Text fontSize="2xl" color="black"  mr="2" mt="2"> Color </Text>
                <Flex>
                    <Link><Image borderRadius='full'boxSize='50px' mr = "8" src='https://e0.pxfuel.com/wallpapers/897/983/desktop-wallpaper-beautiful-fall-color-palette-iphone-pastel-blue.jpg'alt='blue'/></Link>
                    <Link><Image borderRadius='full'boxSize='50px' mr = "8" src='https://www.solidbackgrounds.com/images/750x1334/750x1334-light-pastel-purple-solid-color-background.jpg'alt='pirple'/></Link>
                    <Link><Image borderRadius='full'boxSize='50px' mr = "8" src='https://img.freepik.com/premium-photo/yellow-cardboard-background-flat-lay-top-view_164357-2985.jpg?w=360'alt='yelllow'/></Link>
                    <Link><Image borderRadius='full'boxSize='50px' mr = "8" src='https://i.pinimg.com/1200x/37/c8/18/37c818a87f0eba853ee08923941e5354.jpg'alt='black'/></Link>
                    <Link><Image borderRadius='full'boxSize='50px' mr = "8" src='https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg'alt='white'/></Link>
                    <Link><Image borderRadius='full'boxSize='50px' mr = "8" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBoiPHdLN5R7yPPwJStPn9PlYEgtpOLKgis-jgd-N7C7rKPDS8RS3_tIkhVM9x4JcNU0&usqp=CAU'alt='yelllow'/></Link>
                </Flex>

                <Text fontSize="xl"  mr="0" mt="8" ml = "1">Every iPhone 14 (PRODUCT)RED purchase now contributes directly to the Global Fund to combat COVID‑19. footnote </Text>


{/* .......................right side storage ................................ */}

                <Flex mt = "20">
                    <Text fontSize="4xl" color="black" fontWeight="bold" mr="0" mt="2"> Storage. </Text>
                    <Text fontSize="4xl" color="gray.500" fontWeight="bold" mr="0" mt="2" ml = "1"> How much space do you need?</Text>
                </Flex>

                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  >       
                        <Flex justifyContent="space-between" alignItems="center" width="100%">
                            <Box textAlign="left">
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">128GB</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">From $799 or $33.29/mo.per for 24 mo.</Text>
                            </Box>
                     </Flex>  
                </Button>

                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  >       
                        <Flex justifyContent="space-between" alignItems="center" width="100%">
                            <Box textAlign="left">
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">256GB</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">From $899 or $37.45/mo.per for 24 mo.</Text>
                            </Box>
                     </Flex>  
                </Button>

                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  >       
                        <Flex justifyContent="space-between" alignItems="center" width="100%">
                            <Box textAlign="left">
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">512GB</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">From $1099 or $45.79/mo.per  for 24 mo.</Text>
                            </Box>
                     </Flex>  
                </Button>

                </Box>
            </Flex>


            
            <Box>
            <Center><Text fontSize="6xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">What’s in the Box</Text> </Center>
            <Flex justifyContent="center">
                <Center>
                <Box  boxSize={{ base: '0px', md: '300px', xl: '450px' }}>
                        <Image src='https://www.91-img.com/gallery_images_uploads/f/4/f496b29bae72d3fb028dea56319a02edc51a5faa.jpg?tr=h-630,c-at_max,q-80' alt='Dan Abramov' 
                        height= "30rem" width= "70%" />
                        <Center> <Text fontSize="xl"  mr="0" mt="8" ml = "1">iPhone 14 Plus </Text></Center>
                       
                     </Box>

                     <Box  boxSize={{ base: '0px', md: '300px', xl: '450px' }}>
                        <Image src='https://www.mediabridgeproducts.com/wp-content/uploads/30-310-WG_100915-scaled.jpg' alt='Dan Abramov' 
                        height= "30rem" width= "80%" />
                        <Center> <Text fontSize="xl"  mr="0" mt="8" ml = "1">USB-C to Lightning Cable</Text></Center>
                       
                     </Box>
                </Center>
               
            </Flex>
        <Box mt = "40">
                 <Text fontSize="xl"  mr="0" mt="8" ml = "1">As part of our efforts to reach carbon neutrality by 2030, iPhone 14 and iPhone 14 Plus do not include a power adapter or EarPods. 
                        Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports. </Text>
                        <Text fontSize="xl"  mr="0" mt="8" ml = "1">We encourage you to re‑use your current USB‑A to Lightning cables, power adapters, and headphones, which are compatible with these iPhone models.
                        But if you need any new Apple power adapters or headphones, they are available for purchase.</Text>
        </Box>
        
        <Box>
        <Center><Text fontSize="6xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">Which iPhone is right for you?</Text> </Center>
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
                        <Image src='https://media.ldlc.com/r1600/ld/products/00/05/93/86/LD0005938604_1.jpg' alt='Dan Abramov' 
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
           
            
           
            

            </Box>
        </Box>
    );
}

export default Phone14;