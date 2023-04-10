import React from "react";
import Styles from "@/componentes/destacados/destacados.module.css"
import { featuredProps } from "@/interfaces/featured"

const Destacados: React.FC<featuredProps> = ({ product, title, price, icon }) => {
    return(
        <div className={Styles.card}>
            <img className={Styles.productImage} src={product} alt="" />
            <div className={Styles.productDetails}>
                <h3 className={Styles.productName}>{title}</h3>
                <h4 className={Styles.productPrice}>{price}</h4>
            </div>
            <a href="#">
                <img className={Styles.iconBasket} src={icon} alt="" />
            </a>
            
        </div>
    );
};

export default Destacados

