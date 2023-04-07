import React from 'react'
import { FooterContainer } from '../components/Footer/containers/footer';
import Men from '../components/Mens Products/Mens';
import Navbar from '../components/Navbar/Navbar';
import { OfferNavbar } from '../components/subcomponents/OfferNavbar';

export const MensPage = () => {
  return (
    <>
      <OfferNavbar />
    <Navbar />
    <Men />
      <FooterContainer />

    </>
  )
}
