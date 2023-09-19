import { Heading, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Flex, Select, Center, Text, Button, Alert, AlertIcon , Checkbox,Box } from '@chakra-ui/react';
import {route , routes} from 'react-router-dom'
import Login from './Login';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';



const Signup = ()=>{
    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();


    const [data , setData] = useState({
      Fname :"",
      Lname : "",
      Country :"",
      Birth :"",
      Email :"",
      Pswd : "",
      ConfirmPswd :"",
      NoCode :"",
      Number :""
    })

    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:8080/signup', data)
        .then((res)=>{
            console.log(res.data)
            setData(data);
        });
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };

    return (
       
    <div>
        <form onSubmit={handleSubmit}>
 <Flex justifyContent="space-between" alignItems="center" mr="280px" ml="280px">
          <Heading as="h3" size="lg">
            Apple ID
          </Heading>
          <Flex justifyContent="space-between" alignItems="center">
            <Link>
              <Text fontSize="xl" color="gray.500" mr="2rem">
                Sign In
              </Text>
            </Link>
            <Link>
              <Text fontSize="xl" color="gray.500" mr="2rem">
                Create Your Apple ID
              </Text>
            </Link>
            <Link>
              <Text fontSize="xl" color="gray.500">
                FAQ
              </Text>
            </Link>
          </Flex>
        </Flex>
       
<hr></hr>

       <div>
            
            <Heading as='h1' size='xl'>Create Your Apple ID </Heading>
            <br></br>
            <Text fontSize='2xl' > One Apple ID is all you need to access all Apple services. </Text>
            <br></br>
            <Center>
            <Flex whiteSpace={0}>
                <FormControl style={{ marginRight: '1rem' }}>
                    <Input type='text' width='17rem' height="4rem" name = "Fname" onChange={handleChange} placeholder='Enter First Name' sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500' />
                </FormControl>

                <FormControl >
                 <Input type='text' width='17rem' height="4rem" name = "Lname" onChange={handleChange} placeholder='Enter Last Name' sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500' />
                 </FormControl>
             </Flex>
         </Center>
      
        <br></br>
        
        <FormControl>
            
            <Text fontSize='lg' >COUNTRY / REGION</Text>
            <center>
                <Select height="4rem" width='30rem'  sx={{ fontSize: 'xl' }}  name = "country" onChange={handleChange}>
                   <option value="India">India</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="China">China</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Albania">Albania</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Austria">Austria</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Angola">Angola</option>
                    <option value="Greece">Greece</option>
                    <option value="Algeria">Algeria</option>   
                </Select>
            </center>
            </FormControl>
           
            <br></br>
            <FormControl >
            {/* <Text fontSize='xl'color='gray.500'>Date Of Birth</Text> */}
                    <Input type='text' height="4rem" width='30rem' placeholder='Date Of Birth' sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500' name = "birth" onChange={handleChange} />
            </FormControl>
            <br></br>
            <br></br>
       <hr></hr>
            <br></br>
       
                <FormControl style={{ marginRight: '1rem' }}>
                    <Input type='email' width='30rem' height="4rem" placeholder='name@example.com'  sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500'  name = "email" onChange={handleChange}/>
                    <Text color='gray.500' fontSize='xl' >This will be your new Apple ID</Text>
                </FormControl>
                <br></br>
                <FormControl style={{ marginRight: '1rem' }}>
                    <Input type={showPassword ? "text" : "password"} width='30rem' height="4rem" placeholder='Password' sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500' name = "password" onChange={handleChange} />
                </FormControl>
                
                <br></br>
                <FormControl style={{ marginRight: '1rem' }}>
                    <Input type='password' width='30rem' height="4rem" placeholder='Confirm Password' sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500' name = "confirmpassword" onChange={handleChange} />
                </FormControl>
                <br></br>
                <hr></hr>
                <br></br>
                <FormControl>
            <center>
                <Select height="4rem" width='30rem' sx={{ fontSize: 'xl' }}  name = "nocode" onChange={handleChange}>
                    <option value="India">+91 (India)</option>
                    <option value="Bangladesh">+44 (Bangladesh)</option>
                    <option value="Australia">+1 (Australia)</option>
                    <option value="Canada">+22 (Canada)</option>
                    <option value="Germany">+86 (Germany)</option>
                    <option value="France">+1 (France)</option>
                    <option value="China">+45 (China)</option>
                    <option value="Bangladesh">+12 (Bangladesh)</option>
                    <option value="Cambodia">+48 (Cambodia)</option>
                    <option value="Argentina">+2 (Argentina)</option>
                    <option value="Belgium">+89 (Belgium)</option>
                    <option value="Albania">+42 (Albania)</option>
                    <option value="Brazil">+6 (Brazil)</option>
                    <option  value="Colombia">+56 (Colombia)</option>
                    <option value="Austria">+88 (Austria)</option>
                    <option value="Egypt">+9 (Egypt)</option>
                    <option value="Angola">+01 (Angola)</option>
                    <option value="Greece">+08 (Greece)</option>
                    <option  value="Algeria">+33 (Algeria)</option>   
                </Select>
            </center>
            </FormControl>
            <br></br>
            <FormControl style={{ marginRight: '1rem' }}>
                    <Input type='text' width='30rem' height="4rem" placeholder='Phone Number'  sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500' name = "number" onChange={handleChange}/>
                </FormControl>
                <Center>
                <Text  color='gray.500' width='30rem' height="4rem" >Be sure to enter a phone number you can always access. 
                It will be used to verify your identity any time you sign in on a new device or web browser. 
                Messaging or data rates may apply.</Text>
                </Center>
                
       </div>
       <br></br>
       <hr></hr>
       <br></br>
       <Box ml = "0">
       <Checkbox defaultChecked >Annoucements</Checkbox>
       <Center>
       <Text  color='gray.500' width='30rem' height="4rem">Receive Apple emails and communications including announcements, marketing, 
        recommendations and updates about Apple products, services and software.</Text>
       </Center>
        <br></br>
       <Checkbox defaultChecked >Apps, Music, TV and More</Checkbox>
       <Center>
       <Text  color='gray.500' width='30rem' height="4rem">Receive Apple emails and communications including new releases, exclusive content, 
       special offers and marketing, and recommendations for apps, music, movies, TV, books, podcasts, Apple Pay and more.</Text>
       </Center>
      
       </Box>
   

       {showAlert && (
          <Alert status="success">
            <AlertIcon />
            User registered successfully!
          </Alert>
        )}

<br></br><br></br><br></br>

       <Button  h="2rem" size="3xl" colorScheme="blue" type = "submit">Continue</Button>
       </form>
    </div>
    
    )
}

export default Signup;