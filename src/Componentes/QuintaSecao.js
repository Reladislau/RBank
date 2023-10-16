import Style from '../EstilosComponentes/QuintaSecao.module.css'

function QuintaSecao() {
    return (
        <div className={Style.QuintaSecao}>
            <div className={Style.Celular3}></div>
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