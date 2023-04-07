import React, { useState, useEffect } from "react";
import "../../css/men.css";
import { useDispatch, useSelector } from 'react-redux';
import { mensitems } from "./mensitems";
import { mensData } from "../../Redux/action";
import Collection from "../All_Products/collection";
import Sidebar from "../All_Products/sidebar";




const Men = () => {
    const dispatch = useDispatch();

    const menProducts = useSelector(state => state.menProducts);
    console.log('menProducts', menProducts);

    const storingData = useSelector(state => state.storingData);
    console.log('storingData', storingData);

    const getProduct = async () => {
        const response = await fetch(
            "https://farfetch-backend.vercel.app/mens"
        );
        const data = await response.json();
        dispatch(mensData(data));
    };
    useEffect(() => {
        getProduct();
    }, []);



    return (
        <div className="men">
            <div className="page-news">
                <h6>DESIGNER CLOTHING FOR MEN</h6>
                <p>
                    Shop the best global brands and curate your wardrobe with our
                    selection of designer clothing for men.
                </p>
            </div>
            <div className="men-page">
                <div className="sidebar">
                    <Sidebar items={ mensitems } />
                </div>
                <div className="collection" >
                    { menProducts.map(product => (
                        <Collection
                            products={ "products" }
                            key={ product._id }
                            id={ product._id }
                            image={ product.img_url }
                            title={ product.title }
                            Category={ product.category }
                            description={ product.detail }
                            price={ product.price }
                        />
                    )) }
                </div>
            </div>
        </div>
    );
};

export default Men;
