import React from 'react'
import { Box, Heading, Text , Image, Flex, Button ,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,useDisclosure ,
    ModalCloseButton,
    Center,Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,} from "@chakra-ui/react";
import axios from "axios";
import { useEffect , useState } from 'react';
import {Link} from 'react-router-dom'

function Phone144() {

    const images = [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1676506021673",
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-product-red_AV1_GEO_EMEA_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=1661027418459",
        "https://www.apple.com/v/iphone-14/i/images/meta/iphone-14_specs__cjecw6jct1py_og.png?202309071830",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671474798353",
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1676930655577",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_AV2_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671474739477",
      ];

      const [currentIndex, setCurrentIndex] = useState(0); // dispaly image in slider
      const { isOpen, onOpen, onClose } = useDisclosure();
      const [color , setColor] = useState(""); //  select phone according to color 
      const [data , setData] = useState([]);    //  fetch data
      const [buttonClick , setButtonClick] = useState(false); // to choose phn (iphone 14 , iphone 14 plus)
      const [gb , setGb] = useState("");   // select phone according to the storage 
      const [defaultPictureVisible, setDefaultPictureVisible] = useState(true); // to desplay final selected image at the bottom
      const [order, setOrder] = useState(
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-storage-select-202209-6-1inch-product-red?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660691573456'
      ); 

       // get data from backend ...............................................................................................................................

       const fetchData = () => {
        axios.get('http://localhost:8080/iphone14/650da0f210e21fd13d4c896b')
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          })
          .catch((err) => {
            console.error("Error fetching data:", err);
          });
      };
      


      useEffect(() => {
        fetchData(); // Assuming this function fetches some data
      
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000);
      
        // Cleanup function: Clear the interval when the component unmounts
        return () => {
          clearInterval(interval);
        };
      }, []); // Empty dependency array means the effect runs only once, like componentDidMount
      


  return (
    <div>Phone144
    <div>
  <Box  textAlign="left" ml = "10" mr = "10">
  <Heading size="2xl" style={{ lineHeight: '1.2', fontWeight: '600' }}>
    Buy iPhone 14
  </Heading>

  <Text fontSize="l" color="gray.500" mt={{ base: '6', md: '2' }}>
    Get ₹2000.00-₹67800.00 for your trade-in.Footnote*
  </Text>
</Box>

{/*............................LEFT SIDE IMAGE BOX.............................................................................  */}
  
<Flex direction={{ base: 'column', md: 'row', lg: 'row' }}>

          <Box
            height={{ base: 'auto', md: '400px', xl: '600px' }}
            width="100%"
            margin={{ base: 'auto', md: '10px', lg: '20px' }} // Add margin for larger screens
            mt="50px"
            boxShadow="xl"
            borderRadius="2xl"
            overflow="hidden"
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              width="100%"
              height="100%"
              objectFit="cover"
              fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }}
            />
          </Box>

<Box ml="10px" mt="8px">
<Button height="80px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}   >       
                        <Flex justifyContent="space-around" alignItems="center" width="100%">
                        <Box textAlign="left" >
                                <Text fontSize="xl" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">iPhone 14</Text>
                                <Text fontSize="l" color="gray.600" fontWeight={400} mt="1" ml="0" textAlign="left">6.1-inch display</Text>
                        </Box>
                         <Box>
                         <Text fontSize="sm" color="gray.800" fontWeight={400} textAlign="right" mt="-5">$29.12/mo. for 24 months</Text>

                         </Box>
                     </Flex>  
</Button>

<Button height="80px" width= "100%" mt = "8px"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}   >       
                        <Flex justifyContent="space-around" alignItems="center" width="100%">
                        <Box textAlign="left" >
                                <Text fontSize="xl" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">iPhone 14 Plus</Text>
                                <Text fontSize="l" color="gray.600" fontWeight={400} mt="1" ml="0" textAlign="left">6.7-inch display</Text>
                        </Box>
                         <Box>
                         <Text fontSize="sm" color="gray.800" fontWeight={400} textAlign="right" mt="-5">$23.29/mo. for 24 months</Text>

                         </Box>
                     </Flex>  
</Button>

{/* .................Model button ................. */}

<Button height="80px" width= "100%" mt = "8px"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  onClick={onOpen}  >       
                        <Flex justifyContent="space-around" alignItems="center" width="100%">
                        <Box textAlign="left" >
                                <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">Need help choosing a model?</Text>
                                <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">Explore the differences in screen size </Text>
                        </Box>
                     </Flex>  
</Button>

{/* ............................Model............... */}

<Modal isOpen={isOpen} onClose={onClose} size="4xl">
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>
      <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">
        Which model is right for you?
      </Text>
    </ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Flex flexWrap="wrap" justifyContent="center">
        <Box
          boxSize={{ base: '100%', md: '50%', lg: '30%' }}
          p="4"
          mt="4"
          textAlign="center"
        >
          <Image
            src="https://i-smart.by/image/catalog/iphone14/2d07bad4078a55691c31650d909ab24f.jpeg"
            alt="iPhone 14"
            height="auto"
            width="100%"
            maxH="300px"
          />
          <Text fontSize="2xl" color="black" fontWeight="bold" mt="2">
            iPhone 14
          </Text>
        </Box>

        <Box
          boxSize={{ base: '100%', md: '50%', lg: '30%' }}
          p="4"
          mt="4"
          textAlign="center"
        >
          <Image
            src="https://cdn.dxomark.com/wp-content/uploads/medias/post-132367/Apple-iPhone-14_Plus_FINAL_featured-image-packshot-review.jpg"
            alt="iPhone 14 Plus"
            height="auto"
            width="100%"
            maxH="300px"
          />
          <Text fontSize="2xl" color="black" fontWeight="bold" mt="2">
            iPhone 14 Plus
          </Text>
        </Box>
      </Flex>

      <Box mt="4" p="4">
        <Text fontSize="xl" color="black" mt="3" textAlign="left">
          iPhone 14 and iPhone 14 Plus share the same fantastic innovations, like a Pro-level camera, a durable design with Ceramic Shield, vital safety features, and our lightning-fast A15 Bionic chip with 5-core GPU.
        </Text>
        <Text fontSize="2xl" color="black" fontWeight="bold" mt="3" textAlign="left">
          Here are the key differences:
        </Text>
        <Text fontSize="xl" color="black" mt="3" textAlign="left">
          iPhone 14 has a 6.1-inch display¹ and gets up to 20 hours video playback.
          iPhone 14 Plus has a 6.7-inch display¹ and gets up to 26 hours video playback.
        </Text>
      </Box>
    </ModalBody>
    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>

{/* ................................set colors.......... */}


<Flex flexDirection="column" alignItems="center" mt="5">
  <Text fontSize={['2xl', '4xl']} color="black" fontWeight="bold" mt="2">
    Finish.
  </Text>
  <Text
    fontSize={['2xl', '4xl']}
    color="gray.500"
    fontWeight="bold"
    mt="2"
    ml="1"
  >
    Pick your favorite.
  </Text>
</Flex>

<Text fontSize={['xl', '2xl']} fontWeight="bold" color="black" mr="2" mt="2" >
  Color
</Text>

<Flex flexWrap="wrap" justifyContent="center">
  <Button onClick={() => setColor(data.iPhone14Blue)}>
    <Image
      borderRadius="full"
      boxSize={['40px', '50px']}
      src="https://www.solidbackgrounds.com/images/950x350/950x350-sea-blue-solid-color-background.jpg"
      alt="blue"
    />
  </Button>
  <Button onClick={() => setColor(data.iPhone14Purple)}>
    <Image
      borderRadius="full"
      boxSize={['40px', '50px']}
      src="https://wallpaperset.com/w/full/5/e/0/123056.jpg"
      alt="purple"
    />
  </Button>
  <Button onClick={() => setColor(data.iPhone14Yellow)}>
    <Image
      borderRadius="full"
      boxSize={['40px', '50px']}
      src="https://img.freepik.com/premium-photo/yellow-cardboard-background-flat-lay-top-view_164357-2985.jpg?w=360"
      alt="yellow"
    />
  </Button>
  <Button onClick={() => setColor(data.iPhone14Black)}>
    <Image
      borderRadius="full"
      boxSize={['40px', '50px']}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftw-x5JHk9XgBiARCbF0YkfT4iIeLphRTZ-MqT67eAx-5N0wzY9K7VE1YxnPhm3jPog4&usqp=CAU"
      alt="black"
    />
  </Button>
  <Button onClick={() => setColor(data.iPhone14White)}>
    <Image
      borderRadius="full"
      boxSize={['40px', '50px']}
      src="https://png.pngtree.com/background/20210714/original/pngtree-off-white-solid-color-background-picture-image_1204491.jpg"
      alt="white"
    />
  </Button>
</Flex>


<Button height="80px" width= "100%" mt = "20px"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}   >       
                        <Flex justifyContent="space-around" alignItems="center" width="100%">
                        <Box textAlign="left" >
                                <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">128GB</Text>
                                <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">From $799 or $33.29/mo.per for 24 mo. </Text>
                        </Box>
                     </Flex>  
</Button>

<Button height="80px" width= "100%" mt = "20px"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}    >       
                        <Flex justifyContent="space-around" alignItems="center" width="100%">
                        <Box textAlign="left" >
                                <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">256GB</Text>
                                <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">From $899 or $37.45/mo.per for 24 mo.</Text>
                        </Box>
                     </Flex>  
</Button>

<Button height="80px" width= "100%" mt = "20px"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}   >       
                        <Flex justifyContent="space-around" alignItems="center" width="100%">
                        <Box textAlign="left" >
                                <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">512GB</Text>
                                <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">From $1099 or $45.79/mo.per  for 24 mo.</Text>
                        </Box>
                     </Flex>  
</Button>


</Box>

</Flex>
 
 {/* ................What in the box................. */}

 <Center><Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">What’s in the Box</Text> </Center>


<Box>
<Box display={{ md: 'flex' }} alignItems="center">
  <Box
    width={{ base: '100%', md: '50%' }}
    borderRadius="2xl"
    textAlign="center"
    p={4}
  >
    {buttonClick ? (
      <Box
        height={{ base: '300px', md: '400px', xl: '600px' }}
        width="90%"
        margin="auto"
        boxShadow="xl"
        borderRadius="2xl"
      >
        <img src={color} alt="Dan Abramov" width="100%" height="100%" />
        {gb ? <Text>Storage : {gb}</Text> : ""}
      </Box>
    ) : (
      defaultPictureVisible && (
        <img src={order} alt="Dan Abramov" width="100%" height="100%" />
      )
    )}

    {!buttonClick && !order && (
      <button
        onClick={() => {
          setButtonClick(true);
          setDefaultPictureVisible(false);
        }}
      >
        Show Box
      </button>
    )}
  </Box>

  <Box
    width={{ base: '100%', md: '50%' }}
    borderRadius="2xl"
    textAlign="center"
    p={4}
  >
    <Image
      src="https://cdn.moglix.com/p/J/0/D/d/MINJ0D1CIGL3O-xxlarge.jpg"
      alt="Dan Abramov"
      width="100%"
      height={{ base: '300px', md: '180px', xl: '300px' }}
    />
    <Text fontSize="xl" mt="8">
      USB-C to Lightning Cable
    </Text>
  </Box>
</Box>

</Box>

<Center><Text fontSize="xl" color="gray.500" fontWeight={600} mt="1" ml="0" textAlign="left">Our environmental goals.</Text> </Center>

<Box mt = "10">
                 <Text fontSize="sm"  mr="0" mt="8" ml = "1">As part of our efforts to reach carbon neutrality by 2030, iPhone 14 and iPhone 14 Plus do not include a power adapter or EarPods. 
                        Included in the box is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports. </Text>
                        <Text fontSize="sm"  mr="0" mt="8" ml = "1">We encourage you to re‑use your current USB‑A to Lightning cables, power adapters, and headphones, which are compatible with these iPhone models.
                        But if you need any new Apple power adapters or headphones, they are available for purchase.</Text>
        </Box>


{/* ................................... LINK FOR OTHER IPHONE MODELS ............................................. */}
    <Box  display={{ base: 'none', md: 'block' }}>

  
        <Center><Text fontSize="2xl" color="black" fontWeight="bold" mt="10" ml="0"  textAlign="left">Which iPhone is right for you?</Text> </Center>

{/* .....................four phone picture ........... */}
<Center mt="10">

<Flex >
        <Link>
                <Box  boxSize={{ base: '200px', md: '200px', xl: '200px' }}>
                        <Image src='https://img.freepik.com/premium-photo/smart-phone-isolated-white-screen-with-empty-background-mockup_752648-43.jpg' alt='iPhone 15' 
                        height= "200px" width= "100%" />
                        <Center> <Text fontSize="xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone 15</Text></Center>
                        <Center> <Text fontSize="xl" >The ultimate iPhone.</Text></Center>
                       
                     </Box>
                </Link>

                <Link>
                <Box  boxSize={{ base: '200px', md: '200px', xl: '200px' }}>
                        <Image src='https://cdn.dxomark.com/wp-content/uploads/medias/post-125428/Apple-iPhone-14-Pro-Max_FINAL_featured-image-packshot-review-1.jpg' alt='iPhone 14' 
                       height= "200px" width= "100%" />
                        <Center> <Text fontSize="xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone 14</Text></Center>
                        <Center> <Text fontSize="xl" >As amazing as ever.</Text></Center>
                       
                     </Box>
                </Link>

                <Link>
                <Box  boxSize={{ base: '200px', md: '200px', xl: '200px' }}>
                        <Image src='https://media.ldlc.com/r1600/ld/products/00/05/93/86/LD0005938604_1.jpg' alt='Dan Abramov' 
                        height= "200px" width= "80%" />
                       <Center> <Text fontSize="xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone 13</Text></Center>
                        <Center> <Text fontSize="xl">A total powerhouse.</Text></Center>
                       
                     </Box>
                </Link>

                <Link>
                <Box  boxSize={{ base: '200px', md: '200px', xl: '200px' }}>
                        <Image src='https://www.refurbished.store/cache/images/iphone-xs-zilver-multiapple_1_600x600_BGresize_16777215-tj.png' alt='Dan Abramov' 
                       height= "200px" width= "100%" />
                              <Center> <Text fontSize="xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone X</Text></Center>
                        <Center> <Text fontSize="xl">Serious power. Serious value.</Text></Center>
                       
                     </Box>
                </Link>
        </Flex>
                       </Center>

                       </Box>



                       
</div>
    </div>
  )
}

export default Phone144