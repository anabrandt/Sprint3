import { Link } from "react-router-dom"

export default function Vistoria(){
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
        <h2>Você ainda não começou nenhuma nova vistoria clique no botão abaixo para realizar uma nova vistoria</h2>     

            <div>
                <Link to="/Vistoria2">
                <button>Realizar nova vistoria</button></Link>
            </div>       
        </main>


    </section>
    
        </section>

    )
}