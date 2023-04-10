import styles from '@/componentes/header/header.module.css'

function Header (){
    return(
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <a href="#">
                    <img className={styles.logo} src="./logo.png" alt="" width={245} height={82}/>
                </a>
            </div>

            <div className={styles.titleContainer}>
                <h1>E-commerce</h1>
            </div>

            <div className={styles.menu}>
                <a className={styles.menuHome} href="#">
                    <h4>Home</h4>
                </a>
                <a className={styles.menuCatalogo} href="#">
                    <h4>Catalogo</h4>
                </a>
            </div>

            <div className={styles.opciones}>        
                <a href="#">
                    <img src="./carrito.png" width={35} height={35} alt="" />
                </a>

                <a href="#" className={styles.createAccount}>
                    <h4>Crear Cuenta</h4>
                </a>

                <a href="#">
                    <h4>Mi cuenta</h4>
                </a>

            </div>

        </div>
    );
};

export default Header;