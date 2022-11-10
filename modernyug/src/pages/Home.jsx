import react from 'react';
import {Box , Flex , Text} from '@chakra-ui/react'
 
import '../index.css'

function Home(){
    return (

    <Box> 
         <Flex id='flex'>
            <Box id='imgbox'><img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4016468/data/b0fbcd99aac1f3ef2f6552360e3f93cc/1x1_messaging-side/637/data.jpeg" alt="" /></Box>
            <Box id='textbox'>
                <h2>20% OFF YOUR <br/>NEW AWORDROBE</h2>
                <Text id='text'>For a limited time you can shop the world's<br/> most iconic brands with 22% Offer available <br/> on selected full price items </Text>
                <button id='shop_btn'>
                    SHOP NOW
                </button>

            </Box>
         </Flex>
    </Box>    

       
    )
}

export default Home;