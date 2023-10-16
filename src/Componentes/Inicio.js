import Style from '../EstilosComponentes/Inicio.module.css'
import Celular1 from '../Img/celular.png'


function Inicio() {
    return (
        <div className={Style.Back}>
            <div className={Style.Celular1}><img src={Celular1} alt="" /></div>
            <div className={Style.textoInicio}>
                <p className={Style.TextoInicio}>Conectando tecnologia e coração, somos o banco que transforma sua jornada financeira em uma experiência familiar e acolhedora</p>
                <div className={Style.Caixabotoes}>
                    <button className={Style.botaoinicio1}>Registre-se</button>
                    <button className={Style.botaosaibamais1}>Saiba Mais</button>
                </div>
            </div>
        </div>
    )
}

export default Inicio