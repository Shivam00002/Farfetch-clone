import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import styles from "../../css/address.module.css"
export const AddressFooter = () => {
  return (
      <div className={ styles.checkoutFooter }>
          <div>
              <a href="">Not Shivam Dubey ? Sign out</a>
          </div>
          <div className={ styles.rightText }>
              <h4>IN / USD ($)</h4>
              <a href="#">Need Help?</a>
              <a href="#"> <FiPhoneCall /> (+44(0)20 3510 0670)</a>
          </div>
      </div>
  )
}
