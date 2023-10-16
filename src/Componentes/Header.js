import Style from '../EstilosComponentes/Header.module.css'
import Logo from '../Img/logop.png'

function Header() {
    return (
        <div className={Style.Header}>
            <div className={Style.Logo}><img src={Logo} alt="Logo do banco" /></div>
            <nav className={Style.MenuSuperior}>
                <ul className={Style.Links}>
                    <a href='#'>Inicio</a>
                    <a href='#'>Sobre o RBank</a>
                    <a href='#'>Negócio</a>
                </ul>
            </nav>
            <div className={Style.Botoes}>
                <button className={Style.BotaoAcessar}>Acessar</button>
                <button className={Style.BotaoAbrirConta}>Abrir Conta</button>
            </div>
        </div>
    )
}

export default Header