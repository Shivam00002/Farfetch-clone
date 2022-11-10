import React, { Component } from 'react';
import {Flex , Box , Square , Center , Text} from '@chakra-ui/react';
import "./NavbarStyle.css";

import {Link} from 'react-router-dom';
 class  Navbar extends Component{

    state={clicked : false};

    handleClick=()=>{
        this.setState({clicked : ! this.state.clicked})
    }

    render(){
    return (
        <nav>
            <Link to='/'><div>
    <img id='modern' src="https://i.ibb.co/5kYWdmH/Your-paragraph-text-1.png" alt="" />
   </div></Link>



  <Flex>

   <div>


   <div id="mobile" onClick={ this.handleClick}>
     <i id="bar" className={this.state.clicked ? 'fas fa-times' : "fas fa-bars"}></i>
       </div>
   
    
    <ul id='navbar' className={this.state.clicked ? '#navbar active' : "navbar"}>

       



 
       <Link to='/'><li><a className='active'>Home</a> </li></Link>
       <Link to='/womans'><li><a>Woman</a></li></Link>
       <Link to='/mans'> <li><a>Man</a></li></Link> 
       <Link to='/kids'>  <li><a>Kids</a></li></Link>
      
    </ul>

    


   </div>

   


   <div id='logo'>
    <img style={{width :'24px'}} src="https://cdn-icons-png.flaticon.com/512/197/197419.png" alt="" />
    <img style={{width :'27px'}} src="https://cdn-icons-png.flaticon.com/128/4526/4526817.png" alt="" />
    <img style={{width :'27px'}} src="https://cdn-icons-png.flaticon.com/128/3870/3870922.png" alt="" />
    <img style={{width :'27px'}}  src="https://cdn-icons-png.flaticon.com/128/7712/7712102.png" alt="" />


    


   </div>



   


  </Flex>
 
  


  </nav>
    )
    }
}

export default Navbar;