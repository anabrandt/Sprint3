import { Link } from "react-router-dom"


export default function ResultadoVistoria(){
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
                    <h1>Resultados</h1>
                </div>

               <div className="status__vistoria">
                <h4>Status da vistoria:</h4>
                 <p>Sucesso</p>
                <h4>Data de realização:</h4>
                 <p>dd/mm/yyyy</p>
                <h4>Codigo da vistoria</h4>
                 <p>01425</p>
                <h4>Expira em:</h4>
                 <p>dd/mm/yyyy</p>
                </div>

                <div>
                    <Link to="/" ><button>Voltar para página principal</button></Link>
                </div>
            </main>
        </section>




        </section>
    )
}