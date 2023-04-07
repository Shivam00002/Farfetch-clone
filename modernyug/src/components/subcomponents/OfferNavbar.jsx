import React from "react";
import "./OfferNavbar.css";

export const OfferNavbar = () => {
  return (
    <div className="Navcontainer">
      <div className="changecontent">
        <div className=" box b1">
          <p>
            Incoming <p2>|</p2> <p1>Shop the latest arrivals here</p1>{ " " }
          </p>
        </div>
        <div className="box b2">
          <p>
            Exclusive student offer <p2>|</p2> 10% off orders over $200{ " " }
            <p2>|</p2> <p1> Shop now</p1>
          </p>
        </div>

        <div className="box b3">
          <p>
            Free shipping on selected full-price items <p2>|</p2> Limited time
            only <p2>|</p2> <p1>T&Cs</p1>
          </p>
        </div>
      </div>
    </div>
  );
};
