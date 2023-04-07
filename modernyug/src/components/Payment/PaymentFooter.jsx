import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../css/payments.module.css';
export const PaymentFooter = () => {
  const add = useSelector(state => state.address);

  let data = add[ add.length - 1 ];
 data = data[ data.length - 1 ];
  // console.log("data[0]", x.firstName);

  return (
    <div className={ styles.cardForm }>
      <div className={ styles.billingAddBox }>
        <p>BILLING ADDRESS</p>
        <div className={ styles.billingAddTexts }>
          <p>{ data ? data.firstName : 'Name' }</p>
          <p>{ data ? data.address : 'Address' }</p>
          <p>{ data ? data.country : "Country" }</p>
          <p>Edit</p>
        </div>
      </div>
    </div>
  );
};
