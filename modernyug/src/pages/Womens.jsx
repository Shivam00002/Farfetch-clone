import react from 'react';
import {useEffect , useState} from 'react';



  function GetData(){
    return fetch(`https://raw.githubusercontent.com/shaantanu9/AJIO-API/81e32fcf52f528bee7f4847a538ba22ed66f4b21/AJIO.json`).then((res)=>res.json())
  }

function Womens(){
    const [data , SetData] = useState([]);
    const [loading , SetLoading] = useState(false);


     useEffect(()=>{
      GetData().then((res)=>{
    // SetData(res.data)
        console.log(res)
      })
      .then((err)=>{
        console.log(err)
      })
     },[])





    return (
        <div>
            womans
        </div>
    )
}

   export default Womens