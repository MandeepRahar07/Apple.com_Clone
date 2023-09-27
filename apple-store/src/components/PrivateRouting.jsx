import React from 'react'
import { useContext,  } from 'react'

import { Navigate,Outlet} from 'react-router-dom';
import { AuthContext } from './ContextApi/Context';
import { useToast } from '@chakra-ui/react';

function PrivatRoute() {
    const {auth,setIsauth} = useContext(AuthContext);
    const toast = useToast()

  return (
    <div>
        <div>
      {auth ? (
        <Outlet />
      ) : (
        <>
           { toast({
            position : "top",
            title: 'Login First.',
            description: "To view more detail you need to Login first...!",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })}
          <Navigate to="/login" />
        </>
      )}
    </div>
    </div>
  )
}

export default PrivatRoute