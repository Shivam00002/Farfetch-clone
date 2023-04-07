import React, { useEffect } from "react";
import Collection from "../All_Products/collection";
import "../../css/women.css";

import { useDispatch, useSelector } from "react-redux";
import { womensData } from "../../Redux/action";
import Sidebar from "../All_Products/sidebar";
import {items} from './womensItems'

const Women = () => {
    const dispatch = useDispatch();
    const womenProducts = useSelector((state) => state.womenProducts);
    console.log("womenProducts", womenProducts);

    const storingData = useSelector((state) => state.storingData);
    console.log("storingData", storingData);

    const getProduct = async () => {
        const response = await fetch(
            "https://farfetch-backend.vercel.app/womens"
        );
        const data = await response.json();
        dispatch(womensData(data));
    };
    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="women">
            {/* <News /> */ }
            <div className="page-news">
                <h6>DESIGNER CLOTHING FOR WOMEN</h6>
                <p>
                    Shop the best global brands and curate your wardrobe with our
                    selection of designer clothing for women.
                </p>
            </div>
            <div className="women-page">
                <div className="sidebar">
                    <Sidebar items={ items } />
                </div>
                <div className="collection">
                    { womenProducts.map((product) => (
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

export default Women;
