import {
  NumberInput, NumberInputField,
  NumberIncrementStepper, NumberInputStepper,
  NumberDecrementStepper, Button, Flex, Badge, useToast
} from '@chakra-ui/react';
import { Fragment, useState } from 'react';
import React  from 'react';
import { CardImage, TitleCard } from '../../Styled';


const Card = (props) =>{

  const {image, name, price } = props

  const [qtdItem, setQtdItem] = useState(0);
  const [finalValue, setFinalValue] = useState(`R$ ${price}`);
  

  const toast = useToast()
  const saveStorage = (fruitName, object) => {

    if (qtdItem > 0) {  localStorage.setItem(fruitName, object)
      toast({
        title: 'Produto Adcionado com Sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
     
      })
    }
    else {
  
      toast({
        title: 'Digite a quantidade por favor!',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
    
  }

 
  return (
    
    <Fragment>

      <CardImage>
      <Flex display={"flex"} justifyContent={"center"} >
  
    <Flex  flexDirection={'column'} alignItems={'center'} border={'5px solid green'} borderRadius='8px' justifyContent={'center'}
            padding={'5px'} margin={'100px'}  width={'300px'} height={'200px'} minWidth='max-content'> 
       
          
          <TitleCard>{name}</TitleCard>
       <Flex flexDirection={'row'}> 
    <Flex margin={'10px'} boxSize='120px'><img src= {image} alt=''/></Flex>
    <Flex flexDirection={'row'} margin={'10px'} gap="0px" alignItems='center'>
          R$={price}/unid.
        
  <NumberInput  onChange={(element) => {setQtdItem(element); setFinalValue(+element *price); }} size="sm" maxW={20} defaultValue={0} min={0} max={20}>

                  <NumberInputField />
                  
                  <NumberInputStepper>
                <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    
            </NumberInputStepper>
                </NumberInput> 
                <Badge variant='solid' colorScheme='blue' margin={'5px'} padding={'7px'} borderRadius={'5px'}>Disponível</Badge>
              </Flex>
            </Flex>
          </Flex>
          </Flex>
        <Flex display={"flex"} alignItems="center" justifyContent={"center"}>
          <Button
            colorScheme='green'
            margin={'-40px'}
           
            height={"40px"}
            width={'300px'}
            size={"48px"}
            border={'2px solid black'}
            onClick={() => saveStorage(name, JSON.stringify({ image, name, price, finalValue, qtdItem }))}>
              Adicionar ao carrinho</Button>
              
        
            </Flex>
             </CardImage>
           </Fragment>
  
  
  
  
  )

}
export default Card;
