import React from "react";
import { Link } from "react-router-dom";
import data from "./data";
import styles from './navimg.module.css'

export const NavImg = () => {


    return (
        <div className={styles.cardContainer}>
            { data.map(item => (
                    <Link to={ item.url }>
                <div
 className={styles.card}>

                        <img src={ item.img } alt="" />
                </div>
                    </Link>
            )) }
        </div>
    );
};

