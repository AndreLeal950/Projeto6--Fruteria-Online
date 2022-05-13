import React from 'react'
import {NumberInput, NumberInputField,
    NumberIncrementStepper, NumberInputStepper,
    NumberDecrementStepper, Button}  from '@chakra-ui/react';

const CartPag = ({ name, image, price, quantity} ) => {
    
    const saveStorage = (name, object) => {console.log(name);
        localStorage.setItem(name, object)
    }
    const change = (element) => {
        saveStorage(name, JSON.stringify({image, name, price, value:(+element*price), quantity:(element) }))
    }

    const removeStorage = (key) => {
        localStorage.removeItem(key)
    }


  return (
      
    <div>
    <img src={image} alt=""/>
    <p>{name}</p>
    <p>{price}</p>
  
          <NumberInput onChange={(element) => { change(element) }} defaultValue={quantity} size="md" maxW={20}  min={0} max={20}>
          <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
         </NumberInput>
          <Button onClick={() => { removeStorage(name) }}colorScheme='blue' >
           Deletar Item </Button>
  

    </div>
  
      
  )
}

export default CartPag