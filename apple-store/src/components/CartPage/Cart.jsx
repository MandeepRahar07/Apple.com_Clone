// import React, { useContext } from 'react';
// import { AuthContext } from '../ContextApi/Context';
// import { Button, Box } from '@chakra-ui/react';
// import { FaTrash } from 'react-icons/fa'; // Import the FontAwesome delete icon

// function Cartpage() {
//   const { CartData } = useContext(AuthContext);

//   console.log("HEloo")
//   return (
//     <div>
//         heloo
//       <div>
//         {CartData.map((item) => (
//           <Box key={item.id} display="flex" alignItems="center" justifyContent="space-between" p={4}>
//             <Box>
//               <img src={item.imageSrc} alt={item.name} width="100" />
//               <h3>{item.name}</h3>
//             </Box>

//             <Box display="flex" alignItems="center">
//               <Button>-</Button>
//               <h2>{item.quantity}</h2>
//               <Button>+</Button>
//               <Box>
//                 {/* Use the FontAwesome delete icon */}
//                 <FaTrash />
//               </Box>
//             </Box>
//           </Box>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cartpage;
