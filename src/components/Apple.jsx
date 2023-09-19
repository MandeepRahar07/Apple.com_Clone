import { Heading, Text, Image, Box, Center , Flex, UnorderedList, ListItem} from '@chakra-ui/react';
import { useEffect , useState } from 'react';
const Apple =()=>{

    const images = [
        "https://www.apple.com/tv-pr/shows-and-films/s/sharper/images/show-home-graphic-header/key-art-02/ATV_Sharper_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1676046067551",
      "https://www.lifewire.com/thmb/ZCRzmtRt0uQZ5UpaNn37jT8EJvg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/001_best-movies-on-apple-tv-plus-5087222-7b23f5ef2b3640baa0950181297b3b2d.jpg",
      "https://www.apple.com/tv-pr/articles/2023/01/apple-tv-sets-robust-slate-of-new-and-returning-premium-original-series-premiering-globally-through-spring-2023/images/big-image/big-image-03/011823_ATV_Sets_Spring_Slate_Original_Series_Big_Image_03_big_image_post.jpg.large.jpg",
      "https://www.apple.com/tv-pr/articles/2023/05/apples-upcoming-thriller-hijack-starring-and-executive-produced-by-idris-elba-debuts-trailer/images/big-image/big-image-01/052423_Hijack_New_Trailer_Post_Big_Image_01_big_image_post.jpg.og.jpg",
        "https://fullhdfilmizle5.org/uploads/filmler/2023-04/ghosted-2023-izle.webp",
        "https://i.ytimg.com/vi/wafyhTpWpUs/maxresdefault.jpg"
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
     
           <Box >
            <Box width="100%" bgColor="black"  height={{ base: '20rem', md: '40rem', xl: '47rem' }}     paddingX={{ base: '2', md: '4', xl: '8' }} >
                <Text color="white" fontSize={{ base: '4xl', md: '6xl', xl: '8xl' }} fontWeight="bold" >iPhone 15 Pro</Text>
                <Text color="white" fontSize={{ base: '3xl', md: '4xl', xl: '6xl' }}fontWeight="bold">Titanium. So strong. So light. So Pro.</Text>
                <Text fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="bold" color="gray.500">Available from 22.09</Text>
                <Center>
                <Box boxSize={{ base: '150px', md: '300px', xl: '450px' }}>
                    <Image src='https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg' alt='Dan Abramov' 
                    height= "28rem" width= "120rem" />
                    </Box>
                </Center>
            </Box>

            <Box width="100%" bgColor="white"  height={{ base: '20rem', md: '40rem', xl: '47rem' }} paddingX={{ base: '2', md: '4', xl: '8' }}>
                <Text color="black" fontSize={{ base: '4xl', md: '6xl', xl: '8xl' }} fontWeight="bold" >iPhone 15 Pro</Text>
                <Text color="black" fontSize={{ base: '3xl', md: '4xl', xl: '6xl' }} fontWeight="bold">New camera. New design. Newphoria</Text>
                <Text fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="bold" color="gray.500">Available from 22.09</Text>
                <Center>
                    <Box boxSize={{ base: '150px', md: '300px', xl: '400px' }}>
                    <Image src='https://static.toiimg.com/thumb/msid-103708487,width-1280,height-720,resizemode-4/.jpg' alt='Dan Abramov' 
                    height= "28rem" width= "120rem" />
                    </Box>
                </Center>
            </Box>

          

            <Box width="100%" bgColor="black"  height={{ base: '20rem', md: '40rem', xl: '47rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }}  >
                <Center>
                    <Flex  align="center">
                    <Box boxSize='5rem' marginRight="1rem">
                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7iWFdAkhhuTzcBZoulLi1HBkXWj_47DP0xuUC2PY&s' alt='Dan Abramov' 
                        height= "5rem" width= "5rem" />
                        </Box>
                    <Text color="white"fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold" >Watch</Text>
                    </Flex>
                </Center>
               
                <Text color="red" fontSize={{ base: '3xl', md: '4xl', xl: '6xl' }} fontWeight="bold">SERIES 9</Text>
                <Text color="gray.500" fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}fontWeight="bold" >Smarter. Brighter. Mightier</Text>
                <Center>
                    <Box boxSize={{ base: '150px', md: '300px', xl: '450px' }}>
                    <Image src='https://obs.line-scdn.net/0h5uT_4tNtalppJn0I_SkVDVFwZitaQHBTS0MhORguN2tHCi8PVhI5OU1zZ3ZMFisNSUMgP0VzYzgUFClcUA/w644' alt='Dan Abramov' 
                    height= "40rem" width= "120rem" />
                    </Box>
                </Center>
            </Box>

        <Flex     direction={{ base: 'column', md: 'row' }} width="100%"   bgColor="white">
            <Box width= "100%" bgColor="white" height={{ base: '20rem', md: '40rem', xl: '47rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }}  >
            <Center>
                    <Flex  align="center">
                    <Box boxSize='5rem' marginRight="1rem">
                        <Image src='https://pngimg.com/d/apple_logo_PNG19674.png' alt='Dan Abramov' 
                        height= "5rem" width= "15rem" />
                        </Box>
                    <Text color="black"fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold" >Watch</Text>
                    </Flex>
                </Center>
                 
                 {/* <Text color="black"fontSize="6xl" fontWeight="bold" >Watch</Text> */}
                 <Text color="orange"fontSize={{ base: '0.5xl', md: '1xl', xl: '2xl' }}  fontWeight="bold" >ULTRA 2</Text>
                 <Text color="black" fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="bold">Next-level adventure</Text>
                 {/* <Text fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="bold" color="gray.500">Available from 22.09</Text> */}
                 <br></br>
                 <Center>
                     <Box boxSize={{ base: '50px', md: '150px', xl: '250px' }}>
                     <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZalqO07hVp0LrgAD7YYfTcPP2Bi4xDkwGXEozij-yfmZy_qbUmE60ZiPaPQuuFa1nEg&usqp=CAU' alt='Dan Abramov' 
                     height= "28rem" width= "120rem" />
                     </Box>
                 </Center>
             </Box>

             <Box width= "100%" bgColor="white" height={{ base: '20rem', md: '40rem', xl: '47rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }} >
             <Center>
                    <Flex  align="center">
                    <Box boxSize='5rem' marginRight="1rem">
                        <Image src='https://i.pinimg.com/1200x/97/10/1e/97101e14164bf3f0364a2da050f9837c.jpg' alt='Dan Abramov' 
                        height= "5rem" width= "5rem" />
                        </Box>
                    <Text color="black"fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }}  fontWeight="bold" >Carbon Neutral</Text>
                    </Flex>
                </Center>
                 {/* <Text color="black"fontSize="6xl" fontWeight="bold" >Carbon Neutral</Text> */}
                 <Text color="green"fontSize={{ base: '0.5xl', md: '1xl', xl: '2xl' }} fontWeight="bold" >A first for Apple Watch</Text>
                 <Text color="black" fontSize={{ base: '1xl', md: '2xl', xl: '3xl' }} fontWeight="bold">And Apple.</Text>
                 <br></br><br></br>
                 <Center>
                     <Box boxSize={{ base: '50px', md: '150px', xl: '250px' }}>
                     <Image src='https://rukminim1.flixcart.com/image/450/500/xif0q/smartwatch/t/e/y/-original-imagtcnuq6xsnhhe.jpeg?q=90&crop=false' alt='Dan Abramov' 
                     height= "30rem" width= "150rem" />
                     </Box>
                 </Center>

         </Box>
    </Flex>
           <br></br>
           <br></br><br></br>

    <Flex  direction={{ base: 'column', md: 'row' }} width="100%"   bgColor="white">
            <Box width= "100%" bgColor="white" >
            <Center>
                    <Flex  align="center">
                    <Box boxSize='5rem' marginRight="1rem">
                        <Image src='https://pngimg.com/d/apple_logo_PNG19674.png' alt='Dan Abramov' 
                        height= "5rem" width= "15rem" />
                        </Box>
                    <Text color="black"fontSize="6xl" fontWeight="bold" >Watch</Text>
                    </Flex>
                </Center>
                 
                 {/* <Text color="black"fontSize="6xl" fontWeight="bold" >Watch</Text> */}
                 <Text color="red"fontSize="2xl" fontWeight="bold" >SE</Text>
                 <Text color="black" fontSize="3xl" fontWeight="bold">A great deal to love.</Text>
                 <Text fontSize="3xl" fontWeight="bold" color="gray.500">Available from 22.09</Text>
                 <br></br>
                 <Center>
                     <Box boxSize='sm'>
                     <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKG83_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1631655988000' alt='Dan Abramov' 
                     height= "37rem" width= "150rem" />
                     </Box>
                 </Center>
             </Box>

             <Box width= "100%" bgColor="gray.180" height = "50%" >
                 <Text color="black"fontSize="5xl" fontWeight="bold" >Save on Mac or iPad</Text>
                 <Text color="black"fontSize="5xl" fontWeight="bold" >for uni.</Text>
                 <Text color="black"fontSize="2xl"  >Plus get a gift card up to €130.</Text>
                 <Text color="gray.500" fontSize="3xl" fontWeight="bold">Shop now</Text>
                 <br></br><br></br>
                 <Center>
                     <Box boxSize='sm'>
                     <Image src='https://i.makeagif.com/media/4-24-2016/_ZvEfu.gif' alt='Dan Abramov' 
                     height= "30rem" width= "150rem" />
                     </Box>
                 </Center>

         </Box>
    </Flex>

        <br></br><br></br><br></br>


        <Box   height={{ base: '300px', md: '400px', xl: '600px' }}
        width="90%"
        margin="auto"
        mt="50px">
  <Image
    src={images[currentIndex]}
    alt={`Slide ${currentIndex}`}
    width="100%"
    height="100%"
    fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }}
  />
</Box>

      <Box position="relative" width="90%" margin="auto" fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }}>
      <Text color="gray.500" fontSize="xl">1.Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying Location.
         Only one Promotion Product per eligible Mac or eligible iPad per Qualified Purchaser. Offer subject to availability. While stocks last.</Text>
         <Text color="gray.500" fontSize="xl" >2.Trade-in values will vary based on the condition, year and configuration of your eligible trade-in device. Not all devices are eligible for credit.
             You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied towards qualifying new device purchase or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. In-store trade-in requires presentation of a valid photo ID. Offer may not be available in all stores, and may vary between in-store and online trade-in. Desktop computer trade-in is currently only available online and some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices.
             Restrictions and limitations may apply.</Text>
         <Text color="gray.500" fontSize="xl"  >A subscription is required for Apple TV+.</Text>
      </Box>
      

   </Box>
     
    )
}

export default Apple;