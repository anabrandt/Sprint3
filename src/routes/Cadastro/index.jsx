import { Link } from "react-router-dom"

export default function Cadastro(){

    return(
<main className="container">
      <div>
        <h1 className="titulo__entrar">Entre em sua conta</h1>
      </div>

      <form className="form">
        <div className="campo">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Insira seu e-mail"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            placeholder="Insira sua senha"
            required
          />
        </div>

        <Link to="/principal">
          <button type="submit" className="botao-entrar">
            Entrar
          </button>
        </Link>
      </form>

      <Link to="/">Esqueceu sua senha?</Link>
      <br />
      <Link to="/cadastro">Ainda não é cadastrado? Clique aqui para fazer o cadastro</Link>
    </main>
    )

    
}