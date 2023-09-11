import { useState } from "react";
import { Link } from "react-router-dom"


export default function Entrar(){
    const[cpf, setCpf] = useState('')
    const[nome, setNome] = useState('')
    const[dataNascimento, setdataNascimento] = useState('')
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    

      const handleSignupForm = (event) => {
        event.preventDefault()
        console.log({cpf,nome,dataNascimento,email,senha})
      }
     
    return(
        <main>
            <h1>Crie uma conta </h1>
            <form className="styles.form" onSubmit={handleSignupForm}>
<div>
            <label htmlFor="cpf">CPF:</label>
             <input 
             type="text" 
             placeholder="Insira seu cpf"
             id="cpf" 
             name="cpf" 
             required 
             value={cpf}
             onChange={(event) => setCpf(event.target.value)}
             />
</div>
<br/>
<div>
             <label htmlFor="nome">Nome Completo:</label>
            <input 
            type="text" 
            placeholder="Nome completo"
            id="nome" 
            name="nome" 
            required 
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            />
</div>
<br/>
<div>
            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <input 
            type="date" 
            id="dataNascimento" 
            name="dataNascimento" 
            value={dataNascimento}
            onChange={(event) => setdataNascimento(event.target.value)}
            />
</div>
<br/>
<div className="campo">
            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            placeholder="Insira seu email"
            id="email" 
            name="email" 
            required 
            value ={email}
            onChange={(event) => setEmail(event.target.value)}
            /><br/>
</div>

<div className="campo">
            <label htmlFor="senhal">Senha:</label>
            <input 
            type="senha" 
            placeholder="Crie uma senha"
            name="email" 
            required 
            value ={senha}
            onChange={(event) => setSenha(event.target.value)}
            /><br/>
</div>

<div  className="botao">
            <button 
            type="submit" 
            value="Cadastrar">Cadastrar</button>
            <br/>
</div>

            {/* Link para Fazer Login */}
            <Link to='/Cadastro'>Já tem uma conta?Clique aqui para fazer login</Link>
            </form>
        </main>
    )
}