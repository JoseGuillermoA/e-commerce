import styles from '@/componentes/footer/footer.module.css'

function Footer(){
    return(
        <div className={styles.footerContainer}>

            <div className={styles.socialMedia}>
                <a href="#">
                    <img src="./facebookIcon.png" alt="" className={styles.facebookIcon}/>
                </a>
                
                <a href="#">
                    <img src="./whatsIcon.png" alt="" />
                </a>
            </div>

            <div className={styles.footerTitle}>
                <h4>Terminos y condiciones | Avisos de Privacidad</h4>
                <h4>Copyright &copy; 1999-2023</h4>
            </div>

        </div>
    );
}

export default Footer;