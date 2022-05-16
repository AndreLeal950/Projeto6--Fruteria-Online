import React, { Fragment } from 'react'
import {NumberInput, NumberInputField,
    NumberIncrementStepper, NumberInputStepper,
    NumberDecrementStepper, Flex, Button}  from '@chakra-ui/react';
import { CardImage, TitleCardPag} from '../../Styled';

const CartPag = ({ name, image, price, qtdItem, setupDateProd} ) => {
    
    const saveStorage = (name, object) => {localStorage.setItem(name, object)}
      const removeStorage = (key) => localStorage.removeItem(key) 
    const change = (e) => {
        setupDateProd(true);
        saveStorage(name, JSON.stringify({ image, name, price, finalValue: (+qtdItem * price), qtdItem:e }))
    
        console.log(price, +e);
    }
    


    

  return (
      
    <Fragment>
          
        <CardImage >
  
                   
        <Flex  flexDirection={'column'} alignItems={'center'} border={'5px solid green'} borderRadius='8px' justifyContent={'space-around'}
            padding={'10px'} margin={'10px'}  width={'200px'} height={'200px'} minWidth='max-content'> 
              <Flex flexDirection={'row'}> <Flex margin={'10px'} boxSize='120px'><img src= {image} alt=''/></Flex>
                 <Flex flexDirection={'column'} margin={'10px'} gap="6px" alignItems='center'>
       
        <TitleCardPag>{name}</TitleCardPag>  R$={price}/unid.
           
            <NumberInput  onChange={(e) => { 
              change(e) }} defaultValue={qtdItem}  width="80px"  min={1} max={20} >
             
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                      </NumberInput>
                            <Flex flexDirection={'row'}  padding={'5px'} margin={'10px'}  > 
                          </Flex>
                      </Flex>
                    </Flex>
                  <Flex flexDirection={'row'}>
            <Button
              colorScheme='gray'
              margin={'10px'}
              padding={'15px'}
              height={"30px"}
              width={'100px'}
              textsize={"8px"}
              border={'1px solid green'}
              color={'gray'}
              size={"14px"} onClick={()=> { 
              removeStorage (name);
              setupDateProd(true)}}>Excluir Item
                </Button>
                </Flex>
                </Flex>





            </CardImage>
        </Fragment>
  
                  )
}                  

export default CartPag