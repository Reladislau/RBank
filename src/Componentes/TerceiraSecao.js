import Style from '../EstilosComponentes/TerceiraSecao.module.css'
import Celular2 from '../Img/celular2.png'
import {React, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TerceiraSecao(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className={Style.TerceiraSecao}>
            <p className={Style.TextoTerceiraSecao} data-aos="zoom-in" data-aos-duration="1000">Desbloqueie o <span className={Style.Diferente1}> poder </span> da <span className={Style.Diferente1}> tecnologia </span> no seu pulso e no seu <span className={Style.Diferente1}> bolso </span> com nosso banco digital!</p>
            <div className={Style.Celular2}>
                <img src={Celular2} alt="" />
            </div>
        </div>
    )
}

export default TerceiraSecao