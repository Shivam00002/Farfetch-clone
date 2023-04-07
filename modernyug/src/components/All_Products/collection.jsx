import { Category } from "@material-ui/icons";
import React from "react";
import { useDispatch } from  "react-redux";
import { Link } from "react-router-dom";
import "../../css/collection.css";
import { handleSingleData } from "../../Redux/action";

const Collection = ({ products, image, title,Category, description, price, id }) => {
  const passSingleData = () => {
    dispatch(handleSingleData(id))
  }
  const dispatch = useDispatch()
  return (
    <div className="product" onClick={ passSingleData }>
      <Link to={ `/${products}/${id}`}>
        <div className="item">
          <img src={image} />
          <p>{title}</p>
          <h4>{Category}</h4>
          <p>{description}</p>
          <p>HK${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Collection;
