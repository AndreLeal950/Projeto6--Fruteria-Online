import { Button, Box, Stack, ListItem, Flex } from "@chakra-ui/react";
import React, {Fragment} from "react";
import { Outlet } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";
import Logo from '../../image/Logo.png'







function Layout() {
  return (
    <Fragment>
      <Stack direction={['column', 'row']} spacing='24px'>
  
 
            
        <Flex position={'relative'} display={'flex'} justifyContent={'space-around'} width={"100%"} padding={'5px'} h={'90px'} pb='5px' bgSize='cover' bg='green.50'> 
           <Button as={ReachLink} to="/" colorScheme='green' variant={'solid'} height={'fit-content'} padding={1} margin={'20px'} >Home</Button>
           <img src= {Logo} alt=''/>  
          <Button as={ReachLink} to="/cart" colorScheme='green' variant={'solid'} height={'fit-content'} padding={1} margin={'20px'} >Carrinho</Button>
          </Flex>
         
        </Stack>
     
    <Outlet/>
  </Fragment>

  );
}

export default Layout;
