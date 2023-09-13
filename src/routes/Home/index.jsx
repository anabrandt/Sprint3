import img1 from "./img/img1.svg"
import img2 from "./img/img2.svg"
import img3 from "./img/img3.svg"


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
            
<section>
  <div className="container_benef">
                  <div>
                <h2 className="titulo__beneficios">Beneficios da vistoria digital</h2>
              </div>

  <div className="beneficios__vistoria">
               <div className="seguranca">
             <img className="sg_img1" src={img1} alt="logo da Porto Seguro" />
                <p className="p__beneficios1">Mais segurança e precisão nas vistorias.</p>
              </div>

              <div>
             <img className="sg_img1" src={img2} alt="logo da Porto Seguro" />
                <p className="p__beneficios2">Pode ser feita em qualquer lugar</p>
              </div>

              <div>
             <img className="sg_img1" src={img3} alt="logo da Porto Seguro" />
                <p className="p__beneficios3">Mais rápido e economiza o seu tempo</p>
              </div>   
  </div>

  </div>

</section>


             </main>
    )
}