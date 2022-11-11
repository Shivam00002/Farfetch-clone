import './FooterStyle.css';
import react from 'react';
import {Box , Flex ,Text} from '@chakra-ui/react'
function Footer(){
    return (


        <div id='mainbox'>

   <Box id= 'footmain'>

     <Flex id='footerflex'>
        <Box className='footerbox'>
      <Text className='text'>MODERNYUG APP</Text>
    <Text className='text'>Farfetch App for iOS and Android</Text>

        </Box>

        <Box  className='footerbox'>
            <Text className='text'>DESTINATION/REGION, CURRENCY AND <br /> LANGUAGE</Text>
            <Flex>
            <img className='ind' src="https://cdn-icons-png.flaticon.com/128/4628/4628698.png" alt="" /><p className='text'>India, USD $</p>
            </Flex>

            <Text className='text'>FOLLOW US</Text>
    </Box>


        <Box  className='footerbox'>

  <Flex>

<Box className='footbox'>
    <Text className='text'>CUSTOMER SERVICE</Text>
    <Text className='text'>Contact us</Text>
<Text className='text'>Holiday delivery dates <br /> & returns</Text>
<Text className='text'>Payment & pricing</Text>
<Text className='text'>Cryptocurrency <br /> payments</Text>
<Text className='text'>Returns & refunds</Text>
<Text className='text'>FAQs</Text>
<Text className='text'>Terms & conditions</Text>
<Text className='text'>Promotion terms & <br /> conditions</Text>
<Text className='text'>Privacy policy</Text>
<Text className='text'>Accessibility</Text>
</Box>


<Box className='footbox' ><Text className='text'>ABOUT FARFETCH</Text>

    <Text className='text'>About Us</Text>
<Text className='text'>Investors</Text>
<Text className='text'>Boutique Partners</Text>
<Text className='text'>Affiliate Programme</Text>
<Text className='text'>Student discount <br /> UNiDAYS</Text>
<Text className='text'>Youth discount</Text>
<Text className='text'>Careers</Text>
<Text className='text'>Customer Promise</Text>
<Text className='text'>MODERNYUG App</Text>
<Text className='text'>Sitemap</Text>
<Text className='text'>Positively MODERNYUG</Text>
</Box>

  </Flex>



        </Box>
     </Flex>

<p>'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world. <br />
© Copyright 2022 FARFETCH UK Limited. All rights reserved.</p>

</Box>
        </div>
    )
}
export default Footer;
