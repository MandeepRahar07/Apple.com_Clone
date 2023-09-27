import React, { useContext } from 'react'
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
import { AuthContext } from '../ContextApi/Context';

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
        'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/M/Y/67343_1665419400.jpg'
      ); 


      const {CartData,SetCartData} = useContext(AuthContext)

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
      

      const storeData=(el)=>{
        if(CartData.length!==0){
          let condi=CartData.filter((ele)=>{
            return el.title===ele.title
        })
        console.log(condi)
        if(condi.length>=1){
          alert("item is already in cart")
        }
        else{
          SetCartData([...CartData,el])
        }
    
        }else{
          SetCartData([...CartData,el])
        }
    
       
      }


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
        <img src={color} alt="Dan Abramov" width="70%" height="70%" />
        {gb ? <Text>Storage : {gb}</Text> : ""}
      </Box>
    ) : (
      defaultPictureVisible && (
        <img src={order} alt="Dan Abramov" width="70%" height="70%" />
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


{/* ........................QUESTION AND ANSWER................... */}
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



</div>
    </div>
  )
}

export default Phone144