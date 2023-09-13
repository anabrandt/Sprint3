import { Link } from "react-router-dom"
import aprovada from "./img/aprovada.svg"
import reprovada from "./img/reprovada.svg"

export default function Principal(){
    return(
        <section>
        <nav>
          <div>
            <Link to="/principal"><a>Página principal</a></Link>
            <Link to="/usuario"><a>Informações pessoais</a></Link>
            <Link to="/vistoria"><a>Vistoria</a></Link>
          </div>
        </nav>
      
        <main className="main-container">
          <div >
            <h1>Últimas vistorias</h1>
            <img  className="imagem__vistoria" src={aprovada} alt="imagem da bicicleta aprovada" />
            <img  className="imagem__vistoria" src={reprovada} alt="imagem da bicicleta aprovada" />
          </div>
      
          <div></div>
        </main>
      </section>
      
    )
}