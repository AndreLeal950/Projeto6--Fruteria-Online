import React, { Fragment } from 'react'
import fruits from '../constants/fruits';
import Card from '../components/Cards/Card';






const Home = () => {
  
  
  return (
    <Fragment>
    
             {fruits.map((e) => <Card image={e.image} name={e.name} price={e.price}/>)}
        
  
      </Fragment>
      
     
   
    
  )
  
}

export default Home;