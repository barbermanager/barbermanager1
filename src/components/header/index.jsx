import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <img src='/src/assets/img/logo.svg' className={styles.logo}/>
            <span className={styles.welcome}>Bem vindo</span>
        </div>
    )
}

export default Header
