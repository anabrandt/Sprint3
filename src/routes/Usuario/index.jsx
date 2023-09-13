import { Link } from "react-router-dom"

import user from "./img/iconusuario.svg"
import bike1 from "./img/bike1.svg"
import bike2 from "./img/bike2.svg"

export default function Usuario(){
    return(
<section>       
    <nav>
        <div>            
            <Link to="/principal"><a className="menu-link">Página principal</a></Link>
            <Link to="/usuario"><a className="menu-link">Informações pessoais</a></Link>
            <Link to="/vistoria"><a className="menu-link">Vistoria</a></Link>
        </div>
    </nav>

    <section>
        <img src={user} alt="imagem da bicicleta aprovada" />   
    </section>
    
    <section>
        <main>
            <div className="user-info">
                <h3>Nome completo</h3>
                <p>NomeDoUsuario</p>

                <h3>CPF</h3>
                <p>CPF</p>

                <h3>Email</h3>
                <p>Email</p>

                <h3>Celular</h3>
                <p>Celular</p>
            </div>
        </main>
        
        <section>
            <div>
                <h1>Vistorias realizadas</h1>
            </div>

            <div >
                <img className="vistoria__bike1" src={bike1} alt="imagem da bicicleta" />   
                <h4>Realizada em:</h4>
                <p>20/04/2020</p>
                <h4>Expira em:</h4>
                <p>20/04/2024</p>
                <h4>Codigo da vistoria</h4>
                <p>01425</p>
                <h4>Status</h4>
                <p>Aprovado</p>
            </div>

            <span></span>

            <div >
                <img className="vistoria__bike1" src={bike2} alt="imagem da bicicleta"/> 
                <h4>Realizada em:</h4>
                <p>30/03/2022</p>
                <h4>Expira em:</h4>
                <p>30/03/2027</p>
                <h4>Codigo da vistoria</h4>
                <p>03657</p>
                <h4>Status</h4>
                <p>Reprovado</p>
            </div>
        </section>
    </section>





    </section>
    )
}