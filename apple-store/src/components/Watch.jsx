import { Box ,Center,Flex, Image , Text , Button} from "@chakra-ui/react"
import axios from 'axios';
import { useState , useEffect, useContext} from 'react';
import PhoneNavbar from "./Navbar/PhoneNavbar";
import { AuthContext } from "./ContextApi/Context";


const Watch =()=>{
    const [data , setData] = useState([]);
  const {SetCartData} = useContext(AuthContext);


    useEffect(()=>{
        fetchData();
    } , [])

    const fetchData=()=>{
        axios.get("https://troubled-ray-fashion.cyclic.cloud/watch").then((res)=>{
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
{/* ...................................image 1 ........................... */}


<Box
        width="100%"
        bgColor="black"
        height={{ base: '125%', md: '250%', xl: '293.75%' }}
        paddingX={{ base: '2', md: '4', xl: '8' }}
      >
        <Center>
          <Flex align="center">
            <Box boxSize='312.5%' marginRight="1rem">
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7iWFdAkhhuTzcBZoulLi1HBkXWj_47DP0xuUC2PY&s' alt='Dan Abramov' height="5rem" width="5rem" />
            </Box>
            <Text color="white" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold">Watch</Text>
          </Flex>
        </Center>

        <Text color="red" fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }} fontWeight="bold">SERIES 9</Text>
        <Text color="gray.500"fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}  fontWeight="bold">Smarter. Brighter. Mightier</Text>
        <Center>
          <Box boxSize={{ base: '60%', md: '187.5%', xl: '281.25%' }}>
            <Image src='https://obs.line-scdn.net/0h5uT_4tNtalppJn0I_SkVDVFwZitaQHBTS0MhORguN2tHCi8PVhI5OU1zZ3ZMFisNSUMgP0VzYzgUFClcUA/w644' alt='Dan Abramov' height="40rem" width="120rem" />
          </Box>
        </Center>
      </Box>

      {/* .............................................image 2....................................... */}
      <Flex flexDirection={{base : 'column' , md: 'row' }}>
         {/* .........................................DESCRIPTION BOX................................................ */}
        <Box width= "100%" bgColor="white" height={{ base: '20rem', md: '40rem', xl: '47rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }}  >
            <Center marginTop="30px">
                    <Flex  align="center">
                    <Box boxSize='5rem' marginRight="1rem">
                        <Image src='https://pngimg.com/d/apple_logo_PNG19674.png' alt='Dan Abramov' 
                        height= "5rem" width= "15rem" />
                        </Box>
                    <Text color="black"fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold" >Watch</Text>
                    </Flex>
                </Center>
                 
                 {/* <Text color="black"fontSize="6xl" fontWeight="bold" >Watch</Text> */}
                 <Text color="orange"fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}  fontWeight="bold" >Se</Text>
                 <Text color="black" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold">A great deal to love.</Text>
                 <Text fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="bold" color="gray.500">From ₹ 21,165</Text>
                 <Center>
             <Button mt={10}
            width={{ base: '100%', md: 'auto' }}
            colorScheme="blue"
            type="submit"
            fontSize={{ base: 'lg', md: 'xl' }}
          >
           Buy
          </Button>
        </Center>

        </Box>
        {/* ....................................IMAGE BOX............................................. */}
        <Box width= "80%" bgColor="white" height={{ base: '20rem', md: '40rem', xl: '47rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }} >
        <Center>
                     <Box boxSize={{ base: '100%', md: '350px', xl: '900px' }}>
                     <Image src='https://www.apple.com/v/apple-watch-se/k/images/meta/gps__dt6xcl4fwymq_og.png' alt='Dan Abramov' 
                     height= "28rem" width= "120rem" />
                     </Box>
                 </Center>
        </Box>

    
      </Flex>
     
      
        {/* ........................................3 image............................................ */}

        <Flex flexDirection={{base : 'column' , md: 'row' }}>
         {/* .........................................DESCRIPTION BOX................................................ */}
        <Box width= "100%" bgColor="white" height={{ base: '20rem', md: '40rem', xl: '30rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }}  >
            <Center marginTop="30px">
            <Flex  align="center" >
                    <Box boxSize='5rem' marginRight="1rem">
                        <Image src='https://i.pinimg.com/1200x/97/10/1e/97101e14164bf3f0364a2da050f9837c.jpg' alt='Dan Abramov' 
                        height= "5rem" width= "5rem" />
                        </Box>
                    <Text color="black"fontSize={{ base: '2xl', md: '3xl', xl: '5xl' }}  fontWeight="bold" >Carbon Neutral</Text>
                    </Flex>
                </Center>
                 
                 {/* <Text color="black"fontSize="6xl" fontWeight="bold" >Watch</Text> */}
                 <Text color="green"fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold" >A first for Apple Watch</Text>
                 <Text color="black" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold">And Apple.</Text>
                 <br></br><br></br>
                 <Center>
             <Button mt={10}
            width={{ base: '100%', md: 'auto' }}
            colorScheme="blue"
            type="submit"
            fontSize={{ base: 'lg', md: 'xl' }}
          >
           Buy
          </Button>
        </Center>

        </Box>
        {/* ....................................IMAGE BOX............................................. */}
        <Box width= "80%" bgColor="white" height={{ base: '40rem', md: '40rem', xl: '47rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }} >
            <Center>
                <Box boxSize={{ base: '100%', md: '150px', xl: '500px' }}>
                     <Image src='https://media.istockphoto.com/id/498433288/photo/apple-watch-sport-42mm-silver-aluminum-case-with-black-band.jpg?s=612x612&w=0&k=20&c=FCxCLZ2jq3zWlg7zwQEHqsYGUZ_6_yVMhgfE8cqGbNM=' alt='Dan Abramov' 
                     height= "30rem" width= "150rem" />
                </Box>
            </Center>
        </Box>

    
      </Flex>
     
{/* .................................................Which Apple Watch is right for you? .............................................*/}

<Center><Text color="black" fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="bold" mb={20} mt={5}>Which Apple Watch is right for you? </Text> </Center>
      <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
   
  {data.map((e) => (
    <div key={e._id} style={{ flex: '0 0 calc(33.33% - 16px)', padding: '16px' }}>
      <Text
        color="black"
        fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }}
        fontWeight="bold"
      >
        {e.name}
      </Text>
      <Text fontSize={{ base: '0', md: 'lg', xl: 'xl' }} color="gray.500">
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
     
        <Box>
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
         
      
    </div>
  ))}
</Box>



        </Box>
    )
}

export default Watch;