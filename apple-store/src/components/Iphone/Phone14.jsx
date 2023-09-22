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

const Phone14 = () => {
// images for left side slider show .............................................................................................................
    const images = [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1676506021673",
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660689596976",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch_AV3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1677293707305",
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
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-plus-purple-witb-202209?wid=186&hei=392&fmt=jpeg&qlt=95&.v=1660679147102'
      ); // dispaly by default img at the final selected imag place 


    // get data from backend ...............................................................................................................................

      const fetchData = () => {
        axios.get('http://localhost:8080/iphone14/650bf71d420d5b3eb4a7fa23')
          .then((res) => {
            console.log(res.data);
            setData(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      console.log(data);
    

    
      useEffect(() => {
        fetchData();
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000); // Change slide every 1 second
    
        return () => {
          clearInterval(interval);
        };
      }, [currentIndex, images.length]);



    //   .......................................HANDLE PHONE CLICK BUTTON (IPHONE 14 OR IPHONE14 PLUS)...........................................
      const handlePhone14=()=>{
       setButtonClick((prevButtonClick) => !prevButtonClick)
       setColor(data.iPhone14)
       setGb("")
      }


    return (

        // .................................MAIN BOX .......................................
        <Box textAlign="left" ml = "20" mr = "20">
            <Heading as="h1" size="2xl" mr="2">
                Buy iPhone 14
            </Heading>
            <Text fontSize="xl" color="gray.500" mr="0" mt="2">
                From $799 or $33.29/mo. for 24 mo. 
            </Text>


  {/* .....................................................................SECOND MAIN BOX........................................................................ */}
         <Box mr = "0">


 {/* .>............................................................LEFT SIDE IMAGE BOX.............................................................................  */}
            <Flex>
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

 {/* .........................................BOX TO DISPLAY ACTUAL BOOKING AT LEFT SIDE 2ND BOX............................. */}

    <Box width="70%" borderRadius="2xl">
     
        {
            buttonClick ?  <Box height={{ base: '300px', md: '400px', xl: '600px' }}
            width="90%"
            margin="auto"
            mt="50px"
            boxShadow="xl" // Add shadow
            borderRadius="2xl" >
        <img src={color} alt="Dan Abramov" width="100%"
                    height="100%"/>
                    <Box>
                  {
                    gb? <Text>Storage : {gb}</Text> :""
                  }
                        
                    </Box>
                   
        </Box> : ""
        }
     
      </Box>

                </Box>
 {/* ...................................BOX FOR RIGHT SIDE BUTTONS....................................... */}

                <Box width = "30%">
                    <Flex>
                    <Text fontSize="4xl" color="black" fontWeight="bold" mr="0" mt="2">    Model.   </Text>
                    <Text fontSize="4xl" color="gray.500" fontWeight="bold" mr="0" mt="2" ml = "1">  Which is best for you? </Text>
                    </Flex>

 {/* ................................... BUTTON FOR IPHONE 14 ............................................. */}
                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}   >       
                        <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <Box textAlign="left" onClick={handlePhone14}>
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">iPhone 14</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">6.1-inch display</Text>
                            </Box>
                            <Box>
                                <Text fontSize="lg" color="gray.500" textAlign="right">$29.12/mo. for 24 month</Text>
                            </Box>
                     </Flex>  
                </Button>

 {/* ................................... BUTTON FOR IPHONE 14 PLUS ............................................. */}
                   
                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }} >       
                        <Flex justifyContent="space-between" alignItems="center" width="100%">
                            <Box textAlign="left" onClick={handlePhone14}>
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">iPhone 14 Plus</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">6.7-inch display</Text>
                            </Box>
                            <Box>
                                <Text fontSize="lg" color="gray.500" textAlign="right">$33.29/mo. for 24 month</Text>
                            </Box>
                     </Flex>  
                </Button>

 {/* ................................... COMPRESSION BUTTON ............................................. */}

                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  onClick={onOpen} >       
                        <Flex justifyContent="space-between" alignItems="center" width="100%">
                            <Box textAlign="left">
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">Need help choosing a model?</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">Explore the differences in screen size and battery life.</Text>
                            </Box>
                     </Flex>  
                </Button>

 {/* ................................... MODEL ............................................. */}

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

 {/* ................................... BUTTON's FOR CHOOSE COLOR ............................................. */}

                 <Flex mt = "20">
                    <Text fontSize="4xl" color="black" fontWeight="bold" mr="0" mt="2">   Finish.  </Text>
                    <Text fontSize="4xl" color="gray.500" fontWeight="bold" mr="0" mt="2" ml = "1">  Pick your favorite. </Text>
                </Flex>
                <Text fontSize="2xl" color="black"  mr="2" mt="2"> Color </Text>
                <Flex>
                    <Button onClick={()=>setColor(data.iPhone14Blue)}><Image borderRadius='full'boxSize='50px' mr = "8" src='https://www.solidbackgrounds.com/images/950x350/950x350-sea-blue-solid-color-background.jpg'alt='blue'/></Button>
                    <Button onClick={()=>setColor(data.iPhone14Purple)}><Image borderRadius='full'boxSize='50px' mr = "8" src='https://wallpaperset.com/w/full/5/e/0/123056.jpg'alt='pirple'/></Button>
                    <Button onClick={()=>setColor(data.iPhone14Yellow)}><Image borderRadius='full'boxSize='50px' mr = "8" src='https://img.freepik.com/premium-photo/yellow-cardboard-background-flat-lay-top-view_164357-2985.jpg?w=360'alt='yelllow'/></Button>
                    <Button onClick={()=>setColor(data.iPhone14Black)}><Image borderRadius='full'boxSize='50px' mr = "8" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftw-x5JHk9XgBiARCbF0YkfT4iIeLphRTZ-MqT67eAx-5N0wzY9K7VE1YxnPhm3jPog4&usqp=CAU'alt='black'/></Button>
                    <Button onClick={()=>setColor(data.iPhone14White)}><Image borderRadius='full'boxSize='50px' mr = "8" src='https://png.pngtree.com/background/20210714/original/pngtree-off-white-solid-color-background-picture-image_1204491.jpg'alt='white'/></Button>
                    <Button onClick={()=>setColor(data.iPhone14Red)}><Image borderRadius='full'boxSize='50px' mr = "8" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBoiPHdLN5R7yPPwJStPn9PlYEgtpOLKgis-jgd-N7C7rKPDS8RS3_tIkhVM9x4JcNU0&usqp=CAU'alt='yelllow'/></Button>
                </Flex>

                <Text fontSize="xl"  mr="0" mt="8" ml = "1">Every iPhone 14 (PRODUCT)RED purchase now contributes directly to the Global Fund to combat COVID‑19. footnote </Text>

 {/* ................................... STORAGE BUTTON ............................................. */}

                <Flex mt = "20">
                    <Text fontSize="4xl" color="black" fontWeight="bold" mr="0" mt="2"> Storage. </Text>
                    <Text fontSize="4xl" color="gray.500" fontWeight="bold" mr="0" mt="2" ml = "1"> How much space do you need?</Text>
                </Flex>

                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }} onClick={()=>setGb("128GB")}  >       
                        <Flex justifyContent="space-between" alignItems="center" width="100%">
                            <Box textAlign="left">
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">128GB</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">From $799 or $33.29/mo.per for 24 mo.</Text>
                            </Box>
                     </Flex>  
                </Button>

                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  onClick={()=>setGb("256GB")} >       
                        <Flex justifyContent="space-between" alignItems="center" width="100%">
                            <Box textAlign="left">
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">256GB</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">From $899 or $37.45/mo.per for 24 mo.</Text>
                            </Box>
                     </Flex>  
                </Button>

                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }} onClick={()=>setGb("512GB")} disabled ={color===""}  >       
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

 {/* ................................... OREDR BOX BUTTON (CABLE)............................................. */}

            <Center><Text fontSize="6xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">What’s in the Box</Text> </Center>
            <Flex justifyContent="center">
                <Center>

{/* ...................................................... CONDITIONAL RENDERING TO DISPALY THE FINAL ORDER ........................................... */}
                <Box width="70%" borderRadius="2xl">
                    {buttonClick ? (
                        // When buttonClick is true, render the Box with the image
                                <Box
                                height={{ base: '300px', md: '400px', xl: '600px' }}
                                width="90%"
                                margin="auto"
                                mt="50px"
                                boxShadow="xl"
                                borderRadius="2xl"
                                >
                                <img src={color} alt="Dan Abramov" width="100%" height="100%" />
                                <Box>{gb ? <Text>Storage : {gb}</Text> : ""}</Box>
                                </Box>
                                ) : (
                                    // When buttonClick is false, render the default picture
                                    defaultPictureVisible && (
                                    <img
                                        src={order}
                                        alt="Dan Abramov"
                                        width="100%"
                                        height="100%"
                                    />
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

 {/* ................................... LINK FOR OTHER IPHONE MODELS ............................................. */}
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
{/* ............................................... BOX FOR QUS AND ANS .............................................................. */}
            <Box mt= "200">
              
                 <Accordion defaultIndex={[0]} allowMultiple>

                        <AccordionItem>
                            <h1>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                Frequently Asked Questions
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h1>
                            <AccordionPanel pb={4}>
                         
                            <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            What is eSIM?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        An eSIM is an industry-standard digital SIM that allows you to activate a mobile data plan from your network provider without having to use a physical SIM.
                         You can install eight or more eSIMs on an iPhone and use two phone numbers at the same time.eSIM is better than a physical SIM card because it has so many more benefits: – eSIM is small: This not only allows extra room for other components, or perhaps a larger battery,
                          it also enables manufacturers to rejig the internal layout of their devices.There are no fees to activate an iPhone with an eSIM. New activations may be completed outside of the US, but the device must register on the T-Mobile network to begin using the service. 
                          To activate your iPhone eSIM on another wireless provider or manage eSIM settings, check out our Tutorials.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Can i activate an iPhone 14 outside of the United States?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        You can activate an unlocked iPhone 14 model that was purchased in the United States with over 400 network providers in 100 countries all over the world that support eSIM on iPhone. Contact your network provider to confirm they support eSIM on your mobile data plan.
                        There is a significant factor to keep in mind, though. Only US models of the iPhone 14, iPhone 14 Plus, iPhone 14 Pro, and iPhone 14 Pro Max, get the physical SIM card slot removed. Models sold in other countries come with a physical SIM card slot, as well as two eSIMs
                        Buying an iPhone from the US may be cheaper, but it may not be compatible with Indian carriers. On the other hand, buying an iPhone from India may be more expensive, but it will likely be compatible with Indian carriers.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Will my new iPhone be unlocked?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Every iPhone you buy from us is unlocked. Your new iPhone will work with your network provider, so you won't have to change your plan or phone number. 
                        Once your new iPhone is activated, it remains unlocked, which means that at any time you can decide to switch to any network that provides service for iPhone.
                        Any iPhone purchased directly from Apple will be unlocked, unless it is financed through a carrier. If it is not financed through the carrier Apple can set it up with any carrier and it will still be unlocked.
                        <br></br> <br></br>The carrier will process your request. You might have to wait a few days to a couple of weeks for it to unlock your device. Complete the unlocking process. The carrier will provide you with instructions that you will have to follow to finish the process of unlocking your iPhone.
                        You can carry the new iPhone in your pocket but custom duty is required to be paid if the total value is greater than 10,000 Indian rupees. You can carry mobile but if you do not declare it on the customs form, you may have to pay a penalty if you are caught.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            what are connectivity discounts?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        The Affordable Connectivity Program (ACP) gives a discount on your household's monthly broadband internet service, if you are eligible. Participating broadband providers will apply this discount to your broadband plan.
                        A discount of up to $30/month for internet service (or a discount up to $75/month for households on qualifying Tribal lands); and. A one-time discount of up to $100 for a laptop, desktop computer, or tablet purchased through a participating provider.
                        The Affordable Connectivity Program is limited to one monthly service discount and one device discount per household. Who Is Eligible? Check out fcc.gov/ACP for a Consumer FAQ and other program resources.
                        Connectivity Service means the service that allows Dedicated Equipment to connect to the internet.The Affordable Connectivity Program is an FCC benefit program that helps ensure that households can afford the broadband they need for work, school, healthcare and more.

                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Will my iphone work worldwide?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Remember that you can use your iPhone abroad if it is already unlocked by the time that you leave home. Thus, you won't end up having any issues or ending up with a headache on your trip and no problems when using a SIM from another country.
                        You can find out if your iPhone is locked by going to Settings  General  About. If "No SIM restrictions" appears next to Carrier Lock, your iPhone is unlocked. If you don't want to switch carriers and your device is locked because you forgot the passcode, you don't need to use the steps in this article.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Can i return my iPhone?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        For iPhone returns, you may return your undamaged iPhone with its included accessories within 14 days of purchase for a full refund.Return Fees When Returning a Device Bought from Apple

                        With purchases of an iPhone or iPad, you will not get a full refund for returning the device. If you opened the box and the device is no longer sealed, a 25% fee may be applied to your refund. Even if you did not open the box, a 15% restocking fee may be applied.
                        Returns are subject to Apple's Sales and Refunds Policy. If you change your mind, you can return your Standard hardware to us within 14 calendar days of delivery. Software returns are also accepted within this period, but only if the software was not unsealed
                        For iPhone returns, you may return your undamaged iPhone with its included accessories within 14 days of purchase for a full refund.
                        </AccordionPanel>
                    </AccordionItem>

                            </AccordionPanel>
                        </AccordionItem>




                  
                    </Accordion>
            </Box>
        </Box>
    );
}

export default Phone14;