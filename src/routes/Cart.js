import CartPag from "../components/CartPag/CartPag.js";
import { Fragment, useEffect, useState } from 'react'
import { ContainerImage, Paragraf, TitleSecond } from "../Styled";
import { Button, Modal, useDisclosure, ModalOverlay ,
  ModalHeader , ModalRodapé ,  ModalBody ,
  ModalCloseButton, ModalContent }  from '@chakra-ui/react';




function Cart(name) {

  const [fruitList, setFruitList] = useState([])
  const [finalPag, setFinalPag] = useState(0)
  const [upDateProd, setupDateProd] = useState(false)
  const {isOpen, onOpen, onClose } = useDisclosure()

  const clearStorage =(key) => { 
    localStorage.clear(key) 
    
  }

  useEffect(() => {
    const createList = () => {
      const selectCart = (key) => JSON.parse(localStorage.getItem(key))
      const keys = Object.keys(localStorage)
      setFruitList(keys.map((e) => selectCart(e)));
      setupDateProd(false);
      setFinalPag(fruitList.reduce((acc, e) => { acc += e.finalValue
         return acc }, 0 ))
    }
    createList();
  }, [fruitList])
  
  useEffect(() => {
    const createPag = () => {
      setFinalPag(fruitList.reduce((acc, e) => {
        acc += e.finalValue
        return acc
      }, 0))
      
    }
    createPag()
  }, [finalPag])
  
  return (
    <Fragment>


      
      <TitleSecond position={'fixed'} pt="60px" fontsize="30px">O valor de sua compra até o momento é de R$ {finalPag} </TitleSecond>
     
         
      <Paragraf  position={'fixed'}>Confira os itens adicionados antes de finalizar o seu pedido: </Paragraf>
      <br></br>
         < ContainerImage>

      {fruitList.map((e) => <CartPag
        image={e.image}
        name={e.name}
        price={e.price}
        qtdItem={e.qtdItem}
        finalValue={e.finalValue}
        setupDateProd={setupDateProd} />)}<br></br>
       
        <Button colorScheme={"green"}
          width={'200px'}
          margin={'-10px'}
          onClick={() => {
          onOpen()
          clearStorage(name)
            
          }}  
        >Concluir a Compra
        </Button>
        
         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader textColor={'blue.400'}>OBRIGADO PELA SUA COMPRA!<br></br>
                       
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody textColor={'blue.400'}>
              VOLTE SEMPRE!
              </ModalBody>
          </ModalContent>
          </Modal>
        </ ContainerImage>

    
     
</Fragment>
  )
}

export default Cart;
