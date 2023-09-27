import {Grid, Heading, Text, Image, Box, Center, Flex, UnorderedList, ListItem , Button , Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon} from '@chakra-ui/react';
  import axios from 'axios';
  import { useState , useEffect,useContext} from 'react';
  import PhoneNavbar from './Navbar/PhoneNavbar';
import { AuthContext } from './ContextApi/Context';
  
  
  const Airpods =()=>{
  
    const{SetCartData}= useContext(AuthContext)
      const [data , setData] = useState([]);
  
      useEffect(()=>{
          fetchData();
      } , [])
  
      const fetchData=()=>{
          axios.get("https://troubled-ray-fashion.cyclic.cloud/airpods").then((res)=>{
              setData(res.data)
              console.log(res);
          }).catch((err)=>{
              console.log(err);
          })
      }
      console.log(data)
  
      
    const addToCart = (id, item) => {
      // Create a new item object to add to the cart
      const newItem = {
        image: item.image,
        name: item.name,
        quantity: 1,
        price: item.price,
        id: id,
      };
    
      console.log("Adding item to cart:", newItem);
    
      // Update the cartData array with the new item
      SetCartData((prevCartData) => [...prevCartData, newItem]);
    };
    
  
      return (
          <Box>
            <PhoneNavbar/>
              {/* ........................................image box 1.......................... */}
              <Box
          width="100%"
          bgColor="black"
          height={{ base: '100%', md: '210%', xl: '280%' }}
          paddingX={{ base: '2', md: '4', xl: '8' }}
          paddingTop='60px'
        >
  
          <Text color="white"  fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold" >Airpods </Text>
          <Text color="white" fontSize={{ base: '1xl', md: '2xl', xl: '4xl' }} fontWeight="bold">A magical connection to your devices.</Text>
          {/* <Text fontSize={{ base: '0.5xl', md: '1xl', xl: '2xl' }} fontWeight="bold" color="gray.500">$249</Text> */}
          <Center>
            <Box
             display={{ base: 'none', md: 'block', lg: 'block' }}
            
            boxSize={{ base: '70%', md: '187%', xl: '250%' }}>
              <Image src='https://9to5mac.com/wp-content/uploads/sites/6/2022/09/airpods-pro-2-vs-airpods-pro-airpods-3-wrap-up.jpg?quality=82&strip=all&w=1600' alt='Dan Abramov' height="28rem" width="120rem" />
            </Box>
  
            <Box 
            display={{ base: 'block', md: 'none', lg: 'none' }}
            boxSize={{ base: '100%', md: '187%', xl: '281%' }}>
              <Image src='https://9to5mac.com/wp-content/uploads/sites/6/2022/09/airpods-pro-2-vs-airpods-pro-airpods-3-wrap-up.jpg?quality=82&strip=all&w=1600' alt='Dan Abramov' height="28rem" width="120rem" />
            </Box>
          </Center>
        </Box>
  
  {/* ................................img box 2 ............................................. */}
        <Box
          width="100%"
          bgColor="white"
          height={{ base: '125%', md: '250%', xl: '300%' }}
          paddingX={{ base: '2', md: '4', xl: '8' }}
          paddingTop='60px'
        >
          <Text color="black" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold">Airpods </Text>
          <Text color="black" fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }} fontWeight="bold">3rd generation</Text>
          <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} color="gray.500">From ₹14,365</Text>
          <Center>
            <Box boxSize={{ base: '93.75%', md: '187.5%', xl: '250%' }}>
              <Image src='https://support.apple.com/library/content/dam/edam/applecare/images/en_US/airpods/replace-airpods-pro-tip.gif' alt='Dan Abramov' height="28rem" width="120rem" />
            </Box>
          </Center>
        </Box>
  
  
  {/* ................................img box 3 ............................................. */}
  <Box
          width="100%"
          bgColor="white"
          height={{ base: '125%', md: '250%', xl: '300%' }}
          paddingX={{ base: '2', md: '4', xl: '8' }}
          paddingTop='60px'
        >
          <Text color="black" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold">Airpods Max </Text>
          <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} color="gray.500">From ₹46,668</Text>
          <Center>
            <Box boxSize={{ base: '50%', md: '187.5%', xl: '250%' }}>
              <Image src='https://images.expertreviews.co.uk/wp-content/uploads/2021/01/apple_airpods_max_review_4.jpeg' alt='Dan Abramov' height="28rem" width="120rem" />
            </Box>
          </Center>
        </Box>
  
  
        {/* ............................................. Airpods Maping........................................... */}
        <Center><Text color="black" fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="bold" mb={20} mt={20}>Which Airpods  is right for you? </Text> </Center>
        <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
      
     
    {data.map((e) => (
      <div key={e._id} style={{ flex: '0 0 25%', padding: '16px' }}>
          <Box mb={5}>
          <Center mt="1rem">
          <Button
              width={{ base: '100%', md: 'auto' }}
              colorScheme="blue"
              type="submit"
              fontSize={{ base: 'lg', md: '2xl' }}
              onClick={() => addToCart(e._id, e)}
            >
              Add to Cart
            </Button>
          </Center>
          </Box>
        <Text
          color="black"
          fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }}
          fontWeight="bold"
        >
          {e.name}
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} color="gray.500">
          {e.title}
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} color="gray.500">
          ₹{e.price}
        </Text>
        <Center>
        <Box   width="100%"  height={{ base: '100%', md: '150%', xl: '200%' }}>
        <img
          src={e.image}
          alt={e.image}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        </Box>
        </Center>
       
         
           
        
      </div>
    ))}
  </Box>
  {/* ..........................................QUESTION ANSWERS............................................... */}
  
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
                           What is the warranty period for Apple products, and what does it cover?
                           </Box>
                           <AccordionIcon />
                       </AccordionButton>
                       </h2>
                       <AccordionPanel pb={4}>
                       Apple offers a limited one-year warranty for most of its products. 
                       This warranty covers manufacturing defects and hardware failures. Additionally, Apple provides the option to purchase AppleCare for extended coverage and support.
                       </AccordionPanel>
                   </AccordionItem>
  
                   <AccordionItem>
                       <h2>
                       <AccordionButton>
                           <Box as="span" flex='1' textAlign='left'>
                           How can customers initiate a warranty claim or request a repair for a faulty product?
                           </Box>
                           <AccordionIcon />
                       </AccordionButton>
                       </h2>
                       <AccordionPanel pb={4}>
                       To initiate a warranty claim or request a repair, visit our "Support" section and follow the prompts to schedule a repair appointment at an Apple Store or an authorized service provider.
                        You can also start a service request online or contact Apple Support directly.
                       </AccordionPanel>
                   </AccordionItem>
                   <AccordionItem>
                       <h2>
                       <AccordionButton>
                           <Box as="span" flex='1' textAlign='left'>
                           Is there an option for customers to purchase extended warranty coverage?
                           </Box>
                           <AccordionIcon />
                       </AccordionButton>
                       </h2>
                       <AccordionPanel pb={4}>
                       Yes, customers can purchase AppleCare to extend warranty coverage beyond the standard one-year warranty. AppleCare provides additional support and coverage for up to two or three years, depending on the product.
                       </AccordionPanel>
                   </AccordionItem>
  
                   <AccordionItem>
                       <h2>
                       <AccordionButton>
                           <Box as="span" flex='1' textAlign='left'>
                           What is the return policy for Apple products, and what are the steps to return an item?
                           </Box>
                           <AccordionIcon />
                       </AccordionButton>
                       </h2>
                       <AccordionPanel pb={4}>
                       Our return policy allows customers to return products within 14 days of purchase. To initiate a return, visit the "Order Status" page, locate your order, and select "Return Items." Follow the instructions to complete the return process.
                        Note that certain products may have different return policies.
  
                       </AccordionPanel>
                   </AccordionItem>
                   <AccordionItem>
                       <h2>
                       <AccordionButton>
                           <Box as="span" flex='1' textAlign='left'>
                           Are there any restocking fees associated with returns or exchanges?
                           </Box>
                           <AccordionIcon />
                       </AccordionButton>
                       </h2>
                       <AccordionPanel pb={4}>
                       In most cases, there are no restocking fees for returns or exchanges. However, some products may be subject to a restocking fee if they are not returned in their original condition or packaging. Please review the specific product's return policy for details.
                       </AccordionPanel>
                   </AccordionItem>
  
                   <AccordionItem>
                       <h2>
                       <AccordionButton>
                           <Box as="span" flex='1' textAlign='left'>
                           Can customers check the availability of Apple products at nearby retail stores?
                           </Box>
                           <AccordionIcon />
                       </AccordionButton>
                       </h2>
                       <AccordionPanel pb={4}>
                       Yes, customers can check product availability at Apple retail stores and authorized resellers using the "Check Availability"
                        feature on our website. Simply enter your location or choose a store to view product availability.
                       </AccordionPanel>
                   </AccordionItem>
  
                           </AccordionPanel>
                       </AccordionItem>
  
  
  
  
                 
                   </Accordion>
           </Box>
  
             
  
      </Box>
      )
  }
  
  export default Airpods;