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
            <h1 className="titulo__create">Crie uma conta</h1>
<form className="signup-form" onSubmit={handleSignupForm}>
  <div className="form-group">
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

  <div className="form-group">
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

  <div className="form-group">
    <label htmlFor="dataNascimento">Data de Nascimento:</label>
    <input
      type="date"
      id="dataNascimento"
      name="dataNascimento"
      value={dataNascimento}
      onChange={(event) => setdataNascimento(event.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      placeholder="Insira seu email"
      id="email"
      name="email"
      required
      value={email}
      onChange={(event) => setEmail(event.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="senha">Senha:</label>
    <input
      type="password" // Alterei o tipo para "password" para tratar como senha
      placeholder="Crie uma senha"
      name="senha"
      required
      value={senha}
      onChange={(event) => setSenha(event.target.value)}
    />
  </div>

  <div>
    <button type="submit" className="signup-button">Cadastrar</button>
  </div>

  {/* Link para Fazer Login */}
  <Link className="clique_login" to="/Cadastro">Já tem uma conta? Clique aqui para fazer login</Link>
</form>
        </main>
    )
}