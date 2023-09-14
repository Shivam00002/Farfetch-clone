import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../components/CartContext";
import "./css/itemdetails.css";

export const AddToCart = ({ image, title, description, price }) => {
  const [cart, setCart] = useContext(CartContext);
  const handleClick = () => {
    const bags = {
      title: title,
      image: image,
      description: description,
      price: price
    };
    setCart(curr => [...curr, bags]);
  };
  console.log(cart);

  return (
    <Button variant="dark" onClick={handleClick}>
      Add to bag
    </Button>
  );
};

const Itemdetails = ({ image, title, description, price, id }) => {
  return (
    <div className="items">
      <div className="itemImage">
        <img src={image} />
      </div>
      <div className="itemInfo">
        <p>New Season</p>
        <h5>{title}</h5>
        <h6>{description}</h6>
        <h4>HK${price}</h4>
        <div className="selectdiv">
          <div className="selected-value">
            <span>Select Size</span>
          </div>
          <label>
            <select>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </label>
        </div>
        <AddToCart
          title={title}
          image={image}
          price={price}
          description={description}
        />

      </div>
    </div>
  );
};

export default Itemdetails;
