import React from 'react'
import { Address } from '../components/Address Page/Address';
import { AddressFooter } from '../components/Address Page/AddressFooter';
import { AddressNavbar } from '../components/Address Page/AddressNavbar';

export const AddressPage = () => {
  return (
    <>
      <AddressNavbar/>
          <Address />
          <AddressFooter />

    </>
  )
}
