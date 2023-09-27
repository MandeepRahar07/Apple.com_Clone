
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
import { useEffect , useState } from 'react';
import {Link} from 'react-router-dom'
import PhoneNavbar from '../Navbar/PhoneNavbar';

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
        <PhoneNavbar/>
            
            <Box
        width="100%"
        bgColor="white"
        height={{ base: '125%', md: '250%', xl: '293.75%' }}
        paddingX={{ base: '2', md: '4', xl: '8' }}
        paddingTop='60px'
      >
                <Text color="black" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold" >iPhone 15 </Text>
                {/* <Text color="black" fontSize={{ base: '3xl', md: '4xl', xl: '6xl' }} fontWeight="bold">New camera. New design. Newphoria</Text>
                <Text fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="bold" color="gray.500">Available from 22.09</Text> */}
               <Center>
          <Box boxSize={{ base: '93.75%', md: '187.5%', xl: '250%' }}>
            <Image src='https://static.toiimg.com/thumb/msid-103708487,width-1280,height-720,resizemode-4/.jpg' alt='Dan Abramov' height="28rem" width="120rem" />
          </Box>
        </Center>
            
            <Link to = "/iphone15preorder">
            <Button  width={{ base: '100%', md: 'auto' }}
            colorScheme="blue"
            type="submit"
            fontSize={{ base: 'lg', md: '2xl' }}>Pre-Order</Button>
            </Link>

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
                    <Box   height={{ base: '100px', md: '300px', xl: '500px' }}
        width="60%"
        margin="auto"
        boxShadow="xl"
        borderRadius="2xl">
                    <Image src='https://www.apple.com/v/iphone-15/a/images/overview/closer-look/all_colors__d4w03v51nwcy_large.jpg' alt='phone 15' />
                    </Box>
                </Center>
        </Box>



        <Box  display={{ base: 'none', md: 'block' }}>

  
        <Center><Text fontSize="2xl" color="black" fontWeight="bold" mt={{base : "20px", md : "30px", lg: "40px"}} ml="0"  textAlign="left" >Keep exploring iPhone. </Text> </Center>

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


    </Box>
    )
}

export default Phone15;