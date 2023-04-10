import styles from '@/componentes/imagen/imagen.module.css'

function Imagen(){
    return(
        <div className={styles.imagenContainer}>
            <img src="./image.png" alt="" className={styles.image}/>
        </div>
    );
}

export default Imagen;