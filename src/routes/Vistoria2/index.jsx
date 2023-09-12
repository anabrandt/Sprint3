import { Link } from "react-router-dom"


export default function Vistoria2(){
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
            <h1>Informações sobre a bicicleta</h1>
            </div>

            <div>
            <h3>Cor da bicicleta</h3>
            <input 
            type="text" 
            placeholder="Ex: Azul"
            required 
            /><br/> 

            <h3>Marca da bicicleta</h3>
            <input 
            type="text" 
            placeholder="Ex: Caloi"
            required 
            /><br/> 

            <h3>Valor da bicicleta</h3>
            <input 
            type="value" 
            placeholder="Ex: R$20.000,00"
            required 
            /><br/> 

            <h3>Modelo da bicicleta</h3>
            <input 
            type="value" 
            placeholder="Bicicleta de montanha"
            required 
            /><br/>  
            
            
            <Link to="/FotoBike"><button>Próximo passo</button></Link>

            </div>

        </main>
    </section>    



</section>
    )
}