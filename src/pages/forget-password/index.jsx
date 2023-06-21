import styles from './forget.module.css'
import logo from '/src/assets/img/logo.svg'

const Forget = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageField}>
                <img src='/src/assets/img/logo.svg'/></div>
            <div className={styles.title}>
                <span>RECUPERE SUA SENHA</span>
                <div className={styles.underxx}></div>
            </div>
            <input type='text' className={styles.textField} placeholder='login'/>
            <p className={styles.texto}>Uma nova senha será enviada para o seu email.</p>
            <button className={styles.btn}>ENVIAR</button>

        </div>
    )
}

export default Forget
