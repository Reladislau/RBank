import Style from '../EstilosComponentes/NossosServicos.module.css'

function NossosServicos() {
    return (

        <div className={Style.NossosServicos}>
            <h1 className={Style.TituloNossosServicos}>Nossos Serviços</h1>
            <div className={Style.CaixaServicos}>
                <div className={Style.Servico1}>
                    <h1 className={Style.TituloServico1}>Conta <span className={Style.Diferente2}>Digital</span></h1>
                    <p className={Style.TextoServico1}>Sua conta grátis e 100% digital, sem a burocracia dos antigos sistemas</p>
                </div>
                <div className={Style.Servico2}>
                    <h1 className={Style.TituloServico2}>Integração com <br />
                        <span className={Style.Diferente2}>Criptomoedas</span></h1>
                    <p className={Style.TextoServico2}>Compre, venda e armazene criptomoedas com facilidade em nosso banco digital</p>
                </div>
                <div className={Style.Servico3}>
                    <h1 className={Style.TituloServico3}>Assistência <br />
                        <span className={Style.Diferente2}>Financeira</span></h1>
                    <p className={Style.TextoServico3}>Tenha uma assistência financeira personalizada, com decisões importantes</p>
                </div>
                <div className={Style.Servico4}>
                    <h1 className={Style.TituloServico4}>Loja de <span className={Style.Diferente2}> Recompensas</span></h1>
                    <p className={Style.TextoServico4}>Ganhe pontos em suas atividades financeiras e troque por recompensas especiais</p>
                </div>
            </div>
        </div>

    )
}

export default NossosServicos