import { Link } from "react-router-dom"

export default function Cadastro(){

    return(
        <main>
            <div>
            <h1  className="titulo__entrar" >Entre em sua conta</h1><br/>
            </div>

            <form>
            <input 
             type="text" 
             placeholder="E-mail"
             required 
             /><br
             />

         <input 
            type="senha" 
            placeholder="Insira sua senha"
            required 
            /><br
            />
            </form>

            <input 
            type="submit" 
            value="Entrar"/>

            <Link to='/Entrar'>Esqueceu sua senha?</Link><br/>
             <Link to='/Entrar'>Ainda não é cadastrado? Clique aqui para fazer o cadastro</Link>
            
        </main>
    )

    
}