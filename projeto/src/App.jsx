import './App.css'
import Mensagem from './components/Mensagem'
import InfoAluno from './components/infoAluno'
import InfoCurso from './components/infoCurso'

function App() {

  return (
    <>
      <h1>Bem vindo ao meu projeto</h1>

      <Mensagem/>
      <InfoAluno />
      <hr />
      <InfoCurso />
    </>
  )
}

export default App
