import { NumberInput, NumberInputField, NumberIncrementStepper, NumberInputStepper, NumberDecrementStepper, Button} from '@chakra-ui/react';
import { useState } from 'react';
import React  from 'react';


const Card = (props) =>{

  const {image, name, price} = props

  const [quantity, setQuantity] = useState(0);
  const [value, setValue] = useState(0);
  const saveStorage = (name, object) => {console.log(name);
    localStorage.setItem (name, object)
  }

 

  

  return(
    <div>
    <img src={image} alt=""/>
    <p>{name}</p>
    <p>{price}</p>
  
  <NumberInput  onChange={(element) => {setQuantity(element); setValue(+element *price); }} size="md" maxW={20} defaultValue={0} min={0} max={20}>
          <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
         </NumberInput>
         <Button onClick={() => { saveStorage(name, JSON.stringify({image, name, price, value, quantity}))}}colorScheme='blue' >
           Adicionar ao Carrinho </Button>
  

    </div>
  
  
  
  
  )

}
export default Card;
