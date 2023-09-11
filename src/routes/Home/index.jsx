import { Link } from "react-router-dom"


export default function Home(){
    return(
      <main>

<section>
              <div className="section__vistoria">
                <h1>Vistoria de Bicicleta</h1>
                <p>Automatização com precisão e rapidez</p>
              </div>
 </section>

 <section className="section__ajuda">
            <div>
                <h2>A vistoria veio pra te ajudar</h2>
                <p>A vistoria virtual tem se tornado cada vez mais comum em diversos setores. Além disso, a vistoria virtual pode ser mais segura, evitando a exposição a riscos e garantindo a autenticidade do processo de inspeção.</p>
            </div>
 </section>
            
<section className="beneficios__vistoria">
              <div>
                <h2>Beneficios da vistoria digital</h2>
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