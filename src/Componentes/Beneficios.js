import Style from '../EstilosComponentes/Beneficios.module.css'
import IconeBeneficio1 from '../Img/IconeBeneficios1.png'
import IconeBeneficio2 from '../Img/IconeBeneficio2.png'
import IconeBeneficio3 from '../Img/IconeBeneficio3.png'
import IconeBeneficio4 from '../Img/IconeBeneficio4.png'
import Pessoa1 from '../Img/Pessoa1.png'
function Beneficios() {
    return (

        <div className={Style.Beneficios}>
            <div className={Style.Caixa1}>
                <p className={Style.TextoBeneficios}>Recrie a Ideia de um banco</p>
                <div className={Style.Caixinhas}>
                    <div className={Style.Caixinha1}>
                        <div className={Style.IconeBeneficio1}><img src={IconeBeneficio1} alt="" /></div>
                        <div className={Style.TituloBeneficio1}>Cashback</div>
                        <div className={Style.DescricaoBeneficios1}>Receba dinheiro de volta em cada compra</div>
                    </div>
                    <div className={Style.Caixinha2}>
                        <div className={Style.IconeBeneficio2}><img src={IconeBeneficio2} alt="" /></div>
                        <div className={Style.TituloBeneficio2}>Sem Anuidade</div>
                        <div className={Style.DescricaoBeneficios2}>Zero anuidade, mais liberdade financeira</div>
                    </div>
                    <div className={Style.Caixinha3}>
                        <div className={Style.IconeBeneficio3}><img src={IconeBeneficio3} alt="" /></div>
                        <div className={Style.TituloBeneficio3}>Investimento</div>
                        <div className={Style.DescricaoBeneficios3}>Cultive seu patrimônio com nosso banco digital</div>
                    </div>
                    <div className={Style.Caixinha4}>
                        <div className={Style.IconeBeneficio4}><img src={IconeBeneficio4} alt="" /></div>
                        <div className={Style.TituloBeneficio4}>R-Store</div>
                        <div className={Style.DescricaoBeneficios4}>Aproveite todas as ofertas especiais da nossa loja exclusiva</div>
                    </div>
                </div>
            </div>
            <div className={Style.Pessoa1}>
                <img src={Pessoa1} alt="" />
            </div>
        </div>
    )
}

export default Beneficios