import Style from '../EstilosComponentes/QuintaSecao.module.css'
import {React, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function QuintaSecao() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className={Style.QuintaSecao}>
            <div className={Style.Celular3} data-aos="fade-right" data-aos-duration="1000"></div>
            <div className={Style.QuadradoQuintaSecao}>
                <p className={Style.TextoQuinta}>
                    Potencialize seu <span className={Style.Diferente3}>negócio</span> com soluções financeiras <span className={Style.Diferente3}>inovadoras</span>. Contrate nosso banco digital e <span className={Style.Diferente3}>impulsione</span> sua empresa para o <span className={Style.Diferente3}>sucesso</span>.
                </p>
                <button className={Style.BotaoQuintaSecao}>Entenda Mais</button>
            </div>
        </div>
    )
}


export default QuintaSecao