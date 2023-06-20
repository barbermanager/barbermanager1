import styles from './login.module.css'

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src='/src/assets/img/logo.svg'/>
                </div>
                <div className={styles.title}>
                    <span>BEM VINDO</span>
                    <div className={styles.underxx}></div>
                </div>
                <div className={styles.formContainer}>
                    <input type='text' className={styles.textInput} placeHolder='Login'/>
                    <input type='text' className={styles.textInput} placeHolder='Senha'/>
                    <div className={styles.checkContainer}>
                        <input type='checkbox' className={styles.chekk}/>
                        <label for='lembrar' className={styles.checkText}>Lembrar minha senha</label>
                    </div>
                    <button className={styles.btn}>Entrar</button>
                    <span className={styles.forget}>Perdeu sua senha ?</span>
                </div>

            </div>
        </div>
    )
}

export default Login