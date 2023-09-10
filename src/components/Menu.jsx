import { Link } from "react-router-dom"
import logoPorto from "./img/logoPorto.png"

export default function Menu(){

    return(
        <nav>
            <Link to='/' >Home</Link>
            <div className="logo__porto">
            <img src={logoPorto} alt="logo da porto seguro" />
            </div>
            <span>  </span>
            <Link to='/Entrar'>Entrar</Link>
        </nav>
    )
}