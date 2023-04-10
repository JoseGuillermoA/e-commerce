import React from "react";
import styles from '@/componentes/categorias/categorias.module.css'
import { categoriesProps } from '@/interfaces/categories'

const Categorias: React.FC<categoriesProps> = ({ imageSrc, title }) => {
    return(
                <div className={styles.card}>
                    <img className={styles.imagen} src={imageSrc} alt="" />
                    <h4 className={styles.title}>{title}</h4>
                </div>
    );

};

export default Categorias