import React from 'react'
import { CartData } from '../components/Cart/Cart';
import { FooterContainer } from '../components/Footer/containers/footer';
import Navbar from '../components/Navbar/Navbar';
import { OfferNavbar } from '../components/subcomponents/OfferNavbar';

export const CartPage = () => {
  return (
    <>
      <OfferNavbar />
          <Navbar />
          <CartData />
      <FooterContainer />

    </>
  )
}
