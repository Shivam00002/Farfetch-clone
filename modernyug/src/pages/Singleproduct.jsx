import React from 'react';
import { FooterContainer } from '../components/Footer/containers/footer';
import Navbar from '../components/Navbar/Navbar';
import { ProductDetails } from '../components/ProductDetails/ProductDetails';
import { OfferNavbar } from '../components/subcomponents/OfferNavbar';

export const Singleproduct = () => {
  return (
    <>
      <OfferNavbar/>
      <Navbar />
      <ProductDetails />
      <FooterContainer />

    </>
  );
};
