import Header from "@/componentes/header/header";
import Banner from "@/componentes/banner/banner";
import Categorias from "@/componentes/categorias/categorias";
import Destacados from "@/componentes/destacados/destacados";
import Imagen from  "@/componentes/imagen/imagen";
import Footer from "@/componentes/footer/footer";
import styles from "@/componentes/categorias/categorias.module.css"
import Styles from "@/componentes/destacados/destacados.module.css"


const featuredData = [
    {
        id:1,
        product: './producto.png',
        title: 'Samsung Galaxy S8+ Negro',
        price: '$8,000.00',
        icon: './basket.png'
    },
    {
        id:2,
        product: './producto.png',
        title: 'Samsung Galaxy S8+ Negro',
        price: '$8,000.00',
        icon: './basket.png'
    },
    {
        id:3,
        product: './producto.png',
        title: 'Samsung Galaxy S8+ Negro',
        price: '$8,000.00',
        icon: './basket.png'
    },
    {
        id:4,
        product: './producto.png',
        title: 'Samsung Galaxy S8+ Negro',
        price: '$8,000.00',
        icon: './basket.png'
    }
];



const categoriesData = [
    {
        id: 1,
        title: 'Celulares',
        imageSrc: './celOne.png'
    },
    {
        id: 2,
        title: 'Celulares',
        imageSrc: './celTwo.png'
    },
    {
        id: 3,
        title: 'Celulares',
        imageSrc: './celOne.png'
    },
    {
        id: 4,
        title: 'Celulares',
        imageSrc: './celTwo.png'
    },
    {
        id: 5,
        title: 'Celulares',
        imageSrc: './celOne.png'
    },
    {
        id: 6,
        title: 'Celulares',
        imageSrc: './celTwo.png'
    },
    {
        id: 7,
        title: 'Celulares',
        imageSrc: './celOne.png'
    },
    {
        id: 8,
        title: 'Celulares',
        imageSrc: './celTwo.png'
    },
];


function IndexPage() {
    return (
        <div>
            <header>
                <title>Ecommerce</title>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Roboto&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet"></link>
            </header>
            <Header />
            <Banner />

            <div className={styles.categoriasContainer}>
                <h2 className={styles.categoriesTitle}>Categorias</h2>
                <div className={styles.cardsContainer}>
                    {categoriesData.map((categorie) => (
                        <Categorias
                            key={categorie.id}
                            imageSrc={categorie.imageSrc}
                            title={categorie.title}
                        />
                    ))}
                </div>
            </div>


            <div className={Styles.destacadosContainer}>

                <div className={Styles.titles}>
                    <h2>Productos Destacados</h2>
                    <a href="#">Ver todos los productos</a>
                </div>

                <div className={Styles.cardsContainer}>
                    {featuredData.map((featured) => (
                        <Destacados
                            key={featured.id}
                            product={featured.product}
                            title={featured.title}
                            price={featured.price}
                            icon={featured.icon}
                        />
                    ))}
                </div>
                
                <div className={Styles.cardsContainer}>
                    {featuredData.map((featured) => (
                        <Destacados
                            key={featured.id}
                            product={featured.product}
                            title={featured.title}
                            price={featured.price}
                            icon={featured.icon}
                        />
                    ))}
                </div>
            </div>

            <Imagen/>
            <Footer/>

            

        </div>
    );
}

export default IndexPage;