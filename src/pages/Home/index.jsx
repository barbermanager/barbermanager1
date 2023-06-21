import styles from './home.module.css'
import Header from "../../components/header/index.jsx";

const Home = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <p>Pagineta</p>
        </div>
    )
}

export default Home