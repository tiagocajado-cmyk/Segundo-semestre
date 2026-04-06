import { useState } from 'react'
import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listaDeUsuarios, setListaDeUsuario] = useState([])

    //função para adicionar usuarios em uma lista.
    const handlerAdicionarUsuario = (event) => {
        //Evitando que página recarregue ao mudar algum elemento na página.
        event.preventDefault()

        //Verificando se os campos possuem algum conteúdo.
        if (nome && email) {
            // Adicionando novo usuário.
            setListaDeUsuario([...AdicionarUsuario, {nome, email}])
            // Definindo os campos como vazio.
            setNome('')
            setEmail('')
        }
    }

    return (
        // Criando HTML da página.
        <div className='formulario'>
            <h2>Adicionar usuário</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input 
                       type="text"
                       placeholder='Nome'
                       value={nome}
                       onChange={(e) => setNome(e.target.value)}                 
                />

                <input 
                       type="text"
                       placeholder='email'
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}                 
                />
                <button type='submit'>Adicionar</button
                >
            </form>

            <hr />

            <h2>Usuários Adicionados</h2>
            <ul>
                {/* Usando o map para mostrar cada usuário na lista com base no índice */}
                {listaDeUsuarios.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.email}
                    </li>
                ))}
            </ul>

        </div>
    )
}
