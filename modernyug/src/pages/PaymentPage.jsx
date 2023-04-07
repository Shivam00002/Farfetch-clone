import React from 'react'
import { AddressNavbar } from '../components/Address Page/AddressNavbar';
import { Payment } from '../components/Payment/Payment';
import { PaymentFooter } from '../components/Payment/PaymentFooter';

export const PaymentPage = () => {
  return (
    <>
      <AddressNavbar />
      <Payment />
      <PaymentFooter />
    </>
  )
}
