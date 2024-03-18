import React, { useState } from "react";
import styles from "../../css/cart.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeDataFromCart } from "../../Redux/action";

export const CartData = () => {
    const navigate = useNavigate();

    const cartItems = useSelector(state => state.cart);
    console.log("cart", cartItems);

    const dispatch = useDispatch();


    const handleDel = (id) => {
        console.log("id", id);
        dispatch(removeDataFromCart(id));
    };


    const handleCheckoutCart = () => {
        if(cartItems.length === 0){
            alert("Please Add to Bag First");
            return navigate("/");
        }
        navigate("/cart/address");
    };

    const handleContinueShopping = () => {
        navigate("/products");
    };
// const total_price = 0
    //total price
    const total_price = cartItems.reduce((acc, current) => {
        return acc + current.price;
    }, 24);
    console.log("total", total_price);

    return (
        <div>
            <div className={ styles.header }>
                <div className={ styles.headerDivs }>
                    <h2>SHOPPING BAG</h2>
                    <div onClick={ handleContinueShopping }>Continue Shopping</div>
                </div>
            </div>

            <div className={ styles.cartContainer }>
                <div>
                    { cartItems.map((data,index) => {
                        return (
                            <div key={ data._id } className={ styles.cartProd }>
                                <div className={ styles.imageDiv }>
                                    <img src={ data.img_url } alt="" />
                                </div>
                                <div className={ styles.titleDesc }>
                                    <h3 className={ styles }>{ data.category }</h3>
                                    <div className={ styles }>{ data.title }</div>
                                    <div className={ styles }>{ `FARFETCH ID: ${data._id}` }</div>
                                    <div>Exclusive</div>
                                </div>

                                <div>
                                    <h3 className={ styles }>$ { data.price }</h3>
                                    <div>(Import duties included)</div>
                                </div>
                                <div>
                                    Size
                                    <p className={ styles }>{ 'M' }</p>
                                    <div>
                                        Quantity
                                        <div className={ styles.quantity }>
                                            <select>
                                                <option value={ 1 }>1</option>
                                                <option value={ 2 }>2</option>
                                                <option value={ 3 }>3</option>
                                                <option value={ 4 }>4</option>
                                                <option value={ 5 }>5</option>
                                                <option value={ 6 }>6</option>
                                            </select>
                                        </div>
                                        <br />
                                        <a className={ styles.wishlist } href="#">
                                            <AiOutlineHeart /> Add to wishlist{ " " }
                                        </a>
                                    </div>
                                </div>
                                <div

                                >
                                    <TiDeleteOutline className={ styles.delBtn } onClick={ () => {
                                        handleDel(index);
                                    } } />{ " " }
                                </div>
                            </div>
                        );
                    }) }
                </div>
                <div className={ styles.Summary }>
                    <h3>Summary</h3>
                    <div className={ styles.pymtDiv }>
                        <p>subtotal</p>
                        <p>{ `$ ${total_price - 24}.00` }</p>
                    </div>
                    <div className={ styles.pymtDiv }>
                        <p>Delivery</p>
                        <p>{ total_price !== 24 ? `$24.0` : "00.00" }</p>
                    </div>
                    <hr />
                    <div className={ styles.pymtDiv }>
                        <p>Total</p>
                        <p>
                            USD ${ total_price == 24 ? `00` : total_price }.00
                            <br />
                            Import duties included
                        </p>
                    </div>
                    <button onClick={ handleCheckoutCart } className={ styles.checkoutBtn }>
                        Go To Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};
