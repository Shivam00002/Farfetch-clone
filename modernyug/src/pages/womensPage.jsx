import React from 'react'
import { FooterContainer } from '../components/Footer/containers/footer';
import Navbar from '../components/Navbar/Navbar';
import { OfferNavbar } from '../components/subcomponents/OfferNavbar';
import Women from '../components/Womens Product/womens';

export const WomensPage = () => {
  return (
    <>
      <OfferNavbar />
    <Navbar />
      <Women />
      <FooterContainer />

    </>
  )
}
