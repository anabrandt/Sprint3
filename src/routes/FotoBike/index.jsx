import { Link } from "react-router-dom"
import  scan from "./img/scanbike.svg"

export default function FotoBike(){
    return(
        <section>
      <nav>
        <div>            
        <Link to="/principal"> <a>Página principal</a></Link>
        <Link to="/usuario"> <a>Informações pessoais</a></Link>
        <Link to="/vistoria"> <a>Vistoria</a></Link>
        </div>
     </nav>     

     <section>
        <main>
            <div>
                <h2>Fotos da bicicleta</h2>
            <img src={scan} alt="scan bike" />               
            </div>
        <div>
            <button>Proxima Foto</button>
        </div>

        <div>
        <Link to='/ResultadoVistoria'>Clique aqui para ver o resultado da vistoria</Link>
        </div>

        </main>
     </section>    




        </section>
    )
}