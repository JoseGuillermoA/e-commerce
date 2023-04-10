import styles from "@/componentes/banner/banner.module.css"

function Banner (){
    return(
        <div className={styles.bannerContainer}>

            <div className={styles.banner}>
                <div className={styles.phrase}>
                    <h3 className={styles.firstChild}>Los Mejores Productos</h3>
                    <h3>en todas las categorias</h3>
                </div>
            </div>

            <div className={styles.vectorContainer}>
                <img src="./groupOne.png" width={122.45} height={358.37} alt="" />
                <img src="./groupTwo.png" width={129.77} height={383.77} alt="" />
            </div>

            <div className={styles.browserContainer}>
                <label className={styles.browser}>
                    <img src="./browser.png" alt="" width={33.24} height={33.24} className={styles.vector}/>
                </label>
                    <input className={styles.searchProduct} type="text" placeholder="Buscar Producto" />
            </div>


        </div>
    );
};

export default Banner;