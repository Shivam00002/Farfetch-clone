import React from 'react';
import './AddressNavbar.css';

import { BsTelephone } from 'react-icons/bs';
import { FiLock } from 'react-icons/fi';

export const AddressNavbar = () => {
  return (
    <div className='Navbox'>

      <div className='Navbox-left'>

        <div>
          <FiLock className='lock' />
          <p>Secure checkout</p>
        </div>

        <div>
          <p>FARFETCH</p>
        </div>

        <div >
          <p><b>Need Help?</b> </p>
          
          <p> <BsTelephone className='tele' /> +1 646 791 3768</p>
        </div>

      </div>
    </div>
  );
};
