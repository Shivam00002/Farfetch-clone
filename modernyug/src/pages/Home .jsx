import React from 'react'
import { NavImg } from '../components/HomePage/NavImg';
import HomePageDrop from '../components/HomePage/HomePageDrop';
import Navbar from '../components/Navbar/Navbar';
import { OfferNavbar } from '../components/subcomponents/OfferNavbar';
import { FooterContainer } from '../components/Footer/containers/footer';

export const Home  = () => {
  const header = { fontSize: "40px" }
  return (
    <>
      <OfferNavbar />
      <Navbar />
      <p style={header}>Choose a department</p>
      <NavImg />
      <HomePageDrop />
      <FooterContainer />
         </>
  )
}
