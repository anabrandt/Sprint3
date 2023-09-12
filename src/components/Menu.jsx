import { Link } from "react-router-dom"
import logoPorto from "./img/logoPorto.png"
import profile from "./img/iconeprofile.png"

export default function Menu(){

    return(
        <nav>
            <div>
            <Link to="/">
             <img className="logo__Porto" src={logoPorto} alt="logo da Porto Seguro" />
             </Link>
            </div>

            <div>
            <img src={profile} alt="icone de usuario" />   
            <Link to='/Entrar'>Entrar</Link>
            </div>
        </nav>

    )
}