import styles from './sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li>Faturamentos</li>
                <li>Funcionários</li>
                <li>Agendamentos</li>
                <li>Novo Agendamento</li>
                <li>Historicos</li>
                <li>Sair</li>
            </ul>
        </div>
    )
}

export default Sidebar