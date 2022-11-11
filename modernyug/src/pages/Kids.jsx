import react from 'react';
import {useEffect , useState} from 'react';
import '../index.css'
import {Box , Flex , Text , ButtonGroup ,Button ,Stack ,Checkbox ,Input} from '@chakra-ui/react'
import './Kids.css';


  function GetData(){
    return fetch(`https://raw.githubusercontent.com/shaantanu9/AJIO-API/81e32fcf52f528bee7f4847a538ba22ed66f4b21/AJIO.json`).then((res)=>res.json())
  }

function Kids(){
    const [data , SetData] = useState([]);
    const [loading , SetLoading] = useState(false);


     useEffect(()=>{
      GetData().then((res)=>{
     SetData(res.girls)
        console.log(res.girls) 
      })
      .then((err)=>{
        console.log(err)
      })
     },[])


    
    return (
      <> 

<Box> 
         <Flex id='flex'>

         <Box id='textbox'>
                <h2>DRESS FOR THE<br/> OCCASION</h2>
                <Text id='text'>Party Dresses, mini-me suits and cordinating <br/>accessories by Balmain Versace and more </Text>
                            
                <button id='shop_btn'>
                    SHOP NOW
                </button>

            </Box>
            <Box id='imgbox'><img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043736/data/754b1e35814e5bfeb9d4fc05af703173/1x1_messaging-side/637/data.jpeg" alt="" /></Box>

          
         </Flex>
    </Box>    



    <Box> 
         <Flex id='flex'>
            <Box id='imgbox'><img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043654/data/4d1dd317a138e838f0cc51a0e24fc7c2/1x1_two-columns/637/data.jpeg" alt="" /></Box>
            <Box id='textbox'>
                <h5 className='h5'>FRESS FALL LAYERS</h5>
                <Text id='text'><a href='#'>shop monalisha</a> </Text>
           
            </Box>

          
         </Flex>
    </Box>    

   <h1>The best of new in</h1>

      {data.map((el)=>(

      <div className='flexkid'>

        <div>
        <img id='img'  src={el.image} alt="" /><br />
        <button>ram</button>
        <p>shivam</p>
        </div>
       
            
      
      

        </div>
       ))}
  </>
    )
}

   export default Kids