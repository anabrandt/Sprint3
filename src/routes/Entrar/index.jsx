import { useParams, useNavigate } from "react-router-dom"



export default function Entrar(){
    const LoginWithGoogle = () => {
        alert('Realizar login com o Google');
      }


    return(
        <main>
            <h1>Crie uma conta </h1>

            <form  >
            <label htmlFor="cpf">CPF:</label>
             <input type="text" id="cpf" name="cpf" required /><br />

             <label htmlFor="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required /><br />

        {/* Campo Data de Nascimento */}
        <label htmlFor="dataNascimento">Data de Nascimento:</label>
        <input type="date" id="dataNascimento" name="dataNascimento" required /><br />

        {/* Campo Email */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br />

        {/* Botão de Confirmação do Cadastro */}
        <input type="submit" value="Confirmar Cadastro" /><br />

        {/* Link para Fazer Login */}
        <p>Já tem uma conta? <a href="#">Clique aqui para fazer login</a></p>

        {/* Botão de Login com Google */}
        <button onClick={LoginWithGoogle}>
          <img src="" alt="Login com Google" /> Login com Google
        </button>


            </form>
        </main>
    )
}