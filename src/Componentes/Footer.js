import Style from '../EstilosComponentes/Footer.module.css'
import LogoFooter from '../Img/logop.png'
import instagram from '../Img/instagram.png'
import twitter from '../Img/twiter.png'
import Linkedin from '../Img/link.png'

function Footer() {
    return (
        <div className={Style.Footer}>
            <div className={Style.FooterP}>
                <div className={Style.Icones}>
                    <div className={Style.LogoFooter}>
                        <img src={LogoFooter} alt="" />
                    </div>
                    <a href=""><img src={instagram} alt="" /></a>
                    <a href=""><img src={twitter} alt="" /></a>
                    <a href=""><img src={Linkedin} alt="" /></a>
                </div>
                <div className={Style.links1}>
                    <h1 className={Style.TituloLinks1}>Serviços</h1>
                    <a href="#">- Conta Digital</a>
                    <a href="#">- Empréstimo FGTS</a>
                    <a href="#">- Loja Virtual</a>
                </div>

                <div className={Style.links2}>
                    <h1 className={Style.TituloLinks2}>Contato</h1>
                    <a href="#">- E-mail</a>
                    <a href="#">- Telefone</a>
                    <a href="#">- SAC</a>
                </div>

            </div>

            <link rel="stylesheet" href="" />

            <div className={Style.Linha}>
                <h1 className={Style.TextoLinha}>Reinvente, Recrie, Reinvista: Seu banco digital para um futuro financeiro transformador.</h1>
            </div>
        </div>
    )
}

export default Footer