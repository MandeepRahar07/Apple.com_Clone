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
import PhoneNavbar from '../Navbar/PhoneNavbar';
import { useContext } from 'react';
import { AuthContext } from '../ContextApi/Context';

const Phone15PreOrder =()=>{

    const images = [
        "https://www.91-cdn.com/hub/wp-content/uploads/2023/08/iphone-14-1.jpg",
        "https://images.macrumors.com/t/TkNh1oQ0-9TnnBjDnLyuz6yLkjE=/1600x0/article-new/2023/09/iPhone-15-General-Feature-Black.jpg",
        "https://www.unbox.id/wp-content/uploads/2023/09/Apple-iPhone-15_1a.webp",
        "https://i1.wp.com/sm.mashable.com/mashable_in/seo/4/45137/45137_sfvk.jpg?resize=1140,570",
        "https://cdn.mos.cms.futurecdn.net/rjuDsZwtiJZXa3WaCiPTgU.png",
        "https://www.t-mobile.com/content/dam/tfb/us/en/assets/background/text-n-image/TFB-Apple-NPI-Apple-Landing-page-2023-ImageText-Large-TwoThirds-840x470-Desktop.png"

      ];
      const [currentIndex, setCurrentIndex] = useState(0); // dispaly image in slider
      const { isOpen, onOpen, onClose } = useDisclosure();
      const [color , setColor] = useState(""); //  select phone according to color 
      const [data , setData] = useState([]);    //  fetch data
      const [buttonClick , setButtonClick] = useState(false); // to choose phn (iphone 14 , iphone 14 plus)
      const [gb , setGb] = useState("");   // select phone according to the storage 
      const [defaultPictureVisible, setDefaultPictureVisible] = useState(true); // to desplay final selected image at the bottom
      const [order, setOrder] = useState(
        'https://www.bigw.com.au/medias/sys_master/images/images/h3b/h1b/45545194848286.jpg'
      ); 
      const [price, setPrice] = useState(37299);

      const {CartData,SetCartData} = useContext(AuthContext)

        // .....................add item into cart .........................

  const addToCart = () => {
    // Create a new item object to add to the cart
    const newItem = {
      image : color,
      name: data.iPhone15Title,
      quantity: 1,
      price: price,
    };
  
    console.log("Adding item to cart:", newItem);
  
    // Update the cartData array with the new item
    SetCartData((prevCartData) => [...prevCartData, newItem]);
  };
  

       // get data from backend ...............................................................................................................................

       const fetchData = () => {
        axios.get('https://troubled-ray-fashion.cyclic.cloud/iphone15/651464bd65f3b49d29b6e747')
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
        }, 2000); // Change slide every 1 second
    
        return () => {
          clearInterval(interval);
        };
      }, []);

      const handlePhone15=()=>{
        setButtonClick((prevButtonClick) => !prevButtonClick)
        setColor(data.iPhone15)
        setGb("")
       }

       
// ......................add item into Cartpage................. 

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
        <div> 
          <PhoneNavbar/>
        <div>
      <Box  textAlign="left" ml = "10" mr = "10" >
      <Heading size="2xl" style={{ lineHeight: '1.2', fontWeight: '600' }}>
      Pre-order iPhone 15.
      </Heading>
    
      <Text fontSize="l" color="gray.500" mt={{ base: '6', md: '2' }}>
      Delivery details for your area will be shown in Checkout. 
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
    
              
              
     {/* .........................................BOX TO DISPLAY ACTUAL BOOKING AT LEFT SIDE 2ND BOX............................. */}
    
    
              {/* <Box direction={{ base: 'column', md: 'row', lg: 'row' }}    >
          {buttonClick ? (
            <Box
            height={{ base: 'auto', md: '400px', xl: '600px' }}
            width="100%"
            margin={{ base: 'auto', md: '10px', lg: '20px' }} // Add margin for larger screens
            mt="50px"
            boxShadow="xl"
            borderRadius="2xl"
            overflow="hidden"
            >
              <img src={color} alt="Dan Abramov"    width="100%"
                  height="100%"
                  objectFit="cover"
                  fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }} />
              <Box>
                {gb ? <Text>Storage: {gb}</Text> : ''}
              </Box>
            </Box>
          ) : (
            ''
          )}
        </Box> */}
    
    {/* .......................................................................................... */}
    <Box ml="10px" mt="8px">
    <Button height="80px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  onClick={handlePhone15} >       
                            <Flex justifyContent="space-around" alignItems="center" width="100%">
                            <Box textAlign="left" >
                                    <Text fontSize="xl" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">iPhone 15</Text>
                                    <Text fontSize="l" color="gray.600" fontWeight={400} mt="1" ml="0" textAlign="left">6.1-inch display</Text>
                            </Box>
                             <Box>
                             <Text fontSize="sm" color="gray.800" fontWeight={400} textAlign="right" mt="-5">₹2805/mo. for 24 months</Text>
    
                             </Box>
                         </Flex>  
    </Button>
    
    <Button height="80px" width= "100%" mt = "8px"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }} onClick={handlePhone15}   >       
                            <Flex justifyContent="space-around" alignItems="center" width="100%">
                            <Box textAlign="left" >
                                    <Text fontSize="xl" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">iPhone 15 Plus</Text>
                                    <Text fontSize="l" color="gray.600" fontWeight={400} mt="1" ml="0" textAlign="left">6.7-inch display</Text>
                            </Box>
                             <Box>
                             <Text fontSize="sm" color="gray.800" fontWeight={400} textAlign="right" mt="-5">₹3145/mo. for 24 months</Text>
    
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
                src="https://www.noelleeming.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-nlg-master-catalog/default/dw64f47c10/images/hi-res/7F/B2/N220892_0.jpg?sw=765&sh=765"
                alt="iPhone 15"
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
                src="https://static.comet.it/b2c/public/products/APL03258X/638e742125386d0e5e5a01264e63baaa-6501dda88bc999.54599498-ImageHttpHandler.jpg"
                alt="iPhone 15 Plus"
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
            iPhone 15 and iPhone 15 Plus share the same powerful innovations, like Dynamic Island. An all‑new 48MP Main camera enables super‑high‑resolution photos and 2x Telephoto. 
                     Durable color‑infused back glass and aluminum design. USB‑C to conveniently connect and charge. And the powerhouse A16 Bionic chip.
            </Text>
            <Text fontSize="2xl" color="black" fontWeight="bold" mt="3" textAlign="left">
              Here are the key differences:
            </Text>
            <Text fontSize="xl" color="black" mt="3" textAlign="left">
            iPhone 15 has a 6.1-inch display Footnote ¹ and gets up to 20 hours video playback. Footnote 
//          iPhone 15 Plus has a 6.7-inch display Footnote ¹ and gets up to 26 hours video playback..
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
      <Button onClick={() => setColor(data.iPhone15Blue)}>
        <Image
          borderRadius="full"
          boxSize={['40px', '50px']}
          src="https://www.solidbackgrounds.com/images/950x350/950x350-sea-blue-solid-color-background.jpg"
          alt="blue"
        />
      </Button>
      <Button onClick={() => setColor(data.iPhone15Purple)}>
        <Image
          borderRadius="full"
          boxSize={['40px', '50px']}
          src="https://wallpaperset.com/w/full/5/e/0/123056.jpg"
          alt="purple"
        />
      </Button>
      <Button onClick={() => setColor(data.iPhone15Yellow)}>
        <Image
          borderRadius="full"
          boxSize={['40px', '50px']}
          src="https://img.freepik.com/premium-photo/yellow-cardboard-background-flat-lay-top-view_164357-2985.jpg?w=360"
          alt="yellow"
        />
      </Button>
      <Button onClick={() => setColor(data.iPhone15Black)}>
        <Image
          borderRadius="full"
          boxSize={['40px', '50px']}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftw-x5JHk9XgBiARCbF0YkfT4iIeLphRTZ-MqT67eAx-5N0wzY9K7VE1YxnPhm3jPog4&usqp=CAU"
          alt="black"
        />
      </Button>
      <Button onClick={() => setColor(data.iPhone15White)}>
        <Image
          borderRadius="full"
          boxSize={['40px', '50px']}
          src="https://png.pngtree.com/background/20210714/original/pngtree-off-white-solid-color-background-picture-image_1204491.jpg"
          alt="white"
        />
      </Button>
    </Flex>
    
    
    <Button height="80px" width= "100%" mt = "20px"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)"}} onClick={()=>{setGb("128GB"); setPrice(97915)}}  >       
                            <Flex justifyContent="space-around" alignItems="center" width="100%">
                            <Box textAlign="left" >
                                    <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">128GB</Text>
                                    <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">From ₹97915 or ₹2805/mo.per for 24 mo. </Text>
                            </Box>
                         </Flex>  
    </Button>
    
    <Button height="80px" width= "100%" mt = "20px"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  onClick={() => {
  setGb("256GB");
  setPrice(116415);
}} >       
                            <Flex justifyContent="space-around" alignItems="center" width="100%">
                            <Box textAlign="left" >
                                    <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">256GB</Text>
                                    <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">From ₹116415 or ₹2805/mo.per for 24 mo.</Text>
                            </Box>
                         </Flex>  
    </Button>
    
    <Button height="80px" width= "100%" mt = "20px"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  onClick={()=>{
 setGb("512GB");
 setPrice(193415)}}>       
                            <Flex justifyContent="space-around" alignItems="center" width="100%">
                            <Box textAlign="left" >
                                    <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">512GB</Text>
                                    <Text fontSize="l" color="black" fontWeight={600} mt="1" ml="0" textAlign="left">From ₹193415 or ₹3825/mo.per  for 24 mo.</Text>
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
            <img src={color} alt="Dan Abramov" width="65%" height="65%" />
            {gb ? <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">Storage : {gb}</Text> : ""}
            {gb ? <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">Price : ₹{price}</Text> : ""}
    
          </Box>
        ) : (
          defaultPictureVisible && (
            <img src={order} alt="Dan Abramov" width="65%" height="65%" />
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
          src="https://www.cultofmac.com/wp-content/uploads/2023/04/Made-for-iPhone-USB-C-cable.jpg"
          alt="Dan Abramov"
          width="80%"
          height={{ base: '300px', md: '180px', xl: '300px' }}
        />
        <Text fontSize="xl" mt="8">
          USB-C to Lightning Cable
        </Text>
      </Box>
    </Box>
    
    </Box>
    <Box>
    <Center mt="1rem">
          <Button
            width={{ base: '100%', md: 'auto' }}
            colorScheme="blue"
            type="submit"
            fontSize={{ base: 'lg', md: '2xl' }}
            onClick={addToCart}
          >
            Add to Cart
          </Button>
        </Center>
    </Box>
    
    
    <Center><Text fontSize="xl" color="gray.500" fontWeight={600} mt="1" ml="0" textAlign="left">Our environmental goals.</Text> </Center>
    
    <Box mt = "10">
                     <Text fontSize="sm"  mr="0" mt="8" ml = "1">As part of our efforts to reach carbon neutrality by 2030, iPhone 15 and iPhone 15 Plus do not include a power adapter or EarPods. 
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
<Link to = "/iphone15preorder">
        <Box  boxSize={{ base: '200px', md: '200px', xl: '200px' }}>
                <Image src='https://img.freepik.com/premium-photo/smart-phone-isolated-white-screen-with-empty-background-mockup_752648-43.jpg' alt='iPhone 15' 
                height= "200px" width= "100%" />
                <Center> <Text fontSize="xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone 15</Text></Center>
                <Center> <Text fontSize="xl" >The ultimate iPhone.</Text></Center>
               
             </Box>
  </Link>

       <Link to = "/iphone14">
        <Box  boxSize={{ base: '200px', md: '200px', xl: '200px' }}>
                <Image src='https://cdn.dxomark.com/wp-content/uploads/medias/post-125428/Apple-iPhone-14-Pro-Max_FINAL_featured-image-packshot-review-1.jpg' alt='iPhone 14' 
               height= "200px" width= "100%" />
                <Center> <Text fontSize="xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone 14</Text></Center>
                <Center> <Text fontSize="xl" >As amazing as ever.</Text></Center>
               
             </Box>
        </Link>

        <Link to = "/iphone13">
        <Box  boxSize={{ base: '200px', md: '200px', xl: '200px' }}>
                <Image src='https://media.ldlc.com/r1600/ld/products/00/05/93/86/LD0005938604_1.jpg' alt='Dan Abramov' 
                height= "200px" width= "80%" />
               <Center> <Text fontSize="xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone 13</Text></Center>
                <Center> <Text fontSize="xl">A total powerhouse.</Text></Center>
               
             </Box>
        </Link>

        <Link to = "/iphone10">
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
                         A discount of up to ₹3250/month for internet service (or a discount up to ₹7500/month for households on qualifying Tribal lands); and. A one-time discount of up to ₹1236 for a laptop, desktop computer, or tablet purchased through a participating provider.
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

export default Phone15PreOrder;