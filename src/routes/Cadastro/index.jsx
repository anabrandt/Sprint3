

export default function Cadastro(){
    const [loginState, setLoginState]= useState({
        email: '',
        senha: ''
    })

    return(
        <main>
            <h1>Login</h1>

            <form>
            <input 
             type="text" 
             placeholder="Insira seu cpf"
             required 
             /><br
             />

         <input 
            type="senha" 
            placeholder="Insira sua senha"
            required 
            /><br />
            </form>

            <input 
            type="submit" 
            value="Entrar" /><br />
            
        </main>
    )

    
}