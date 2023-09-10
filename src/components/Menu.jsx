import { Link } from "react-router-dom"
import logoPorto from "./img/logoPorto.png"
import profile from "./img/iconeprofile.png"

export default function Menu(){

    return(
        <nav>
            <div>
            <img src={logoPorto} alt="logo da porto seguro" />
            
            </div>

            <span>  </span>

            <div>
            <img src={profile} alt="icone de usuario" />   
            <Link to='/Entrar'>Entrar</Link>
            </div>
        </nav>
    )
}