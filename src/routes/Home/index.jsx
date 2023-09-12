import { Link } from "react-router-dom"
import img1 from './img/'

export default function Home(){
    return(
      <main>


<section>
  <div className="section__vistoria">
    <div className="content">
      <div className="text2">
        <h1 className="paragrafo__vistoria">Vistoria de Bicicletas</h1>
        <p className="txt__vistoria">Automatização com precisão e rapidez</p>
      </div>
      <div className="image__vistoria1">
      </div>
    </div>
  </div>
</section>

 <section className="section__ajuda">
            <div className="container__ajuda">
                <h2 className="titulo__ajuda">A vistoria veio pra te ajudar</h2>
                <p className="paragrafo__ajuda">A vistoria virtual tem se tornado cada vez mais comum em diversos setores. Além disso, a vistoria virtual pode ser mais segura, evitando a exposição a riscos e garantindo a autenticidade do processo de inspeção.</p><br></br>
            </div>
 </section>
            
<section className="beneficios__vistoria">
              <div>
                <h2 className="titulo__beneficios">Beneficios da vistoria digital</h2>
              </div>

              <div>
                <p>Mais segurança e precisão nas vistorias.</p>
              </div>

              <div>
                <p>Pode ser feita em qualquer lugar</p>
              </div>

              <div>
                <p>Mais rápido e economiza o seu tempo</p>
              </div>
</section>

<section className="faqvistoria">
            <div>
                <h3>Tire suas dúvidas sobre a vistoria</h3>
            </div>

            <div>
                <h4>Como faço a vistoria</h4>
                <p>Se cadastrando e entrando em nosso sistema, após isso entre na página “vistoria” e siga os passos, você vai precisar enviar um formulário com algumas informações da bicicleta e depois enviar fotos da bicicleta como solicitado.</p>
            </div>

</section>

             </main>
    )
}