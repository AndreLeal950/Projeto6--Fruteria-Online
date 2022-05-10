import React from 'react'
import { Link } from "react-router-dom"
import { Flex, Spacer, Box, Text, Grid, HStack, Container, Circle } from '@chakra-ui/react'

const Cart = (props) => {
    const {nome, price, url, type} = props
  return (
    <Container>
      <Flex flexDirection={'column'} alignItems='center'>
        <Circle as={Image}/>
          <Flex>
            <Box w='400px' h='60' bg='red.800' >Bem Vindo as Compras!</Box>
          </Flex>
          <Text><Link to="/">Carrinho de Compras</Link></Text>
      </Flex>
    </Container>
  )
};
        
      
    
export default Cart;