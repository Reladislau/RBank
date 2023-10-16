import Style from '../EstilosComponentes/TerceiraSecao.module.css'
import Celular2 from '../Img/celular2.png'
function TerceiraSecao(){
    return(
        <div className={Style.TerceiraSecao}>
            <p className={Style.TextoTerceiraSecao}>Desbloqueie o <span className={Style.Diferente1}> poder </span> da <span className={Style.Diferente1}> tecnologia </span> no seu pulso e no seu <span className={Style.Diferente1}> bolso </span> com nosso banco digital!</p>
            <div className={Style.Celular2}>
                <img src={Celular2} alt="" />
            </div>
        </div>
    )
}

export default TerceiraSecao