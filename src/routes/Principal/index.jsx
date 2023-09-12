import { Link } from "react-router-dom"
import aprovada from "./img/aprovada.svg"
import reprovada from "./img/reprovada.svg"

export default function Principal(){
    return(
        <section>
       <nav>
        <div>            
          <Link to="/principal"> <a>Página principal</a></Link>
         <Link to="/usuario"> <a>Informações pessoais</a></Link>
         <Link to="/vistoria"> <a>Vistoria</a></Link>
        </div>
       </nav>

       <main>
        <div className="imagem__vistoria">
        <h1>Últimas vistorias</h1>
        <img src={aprovada} alt="imagem da bicicleta aprovada" />   
        <img src={reprovada} alt="imagem da bicicleta aprovada" />   

        </div>

        <div>

        </div>
       </main>


        </section>
      
    )
}