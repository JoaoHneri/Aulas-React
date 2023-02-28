import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
function App() {
  const nome = 'Luiz'
  return (
    <div className="App">
      <Hello/>
      <SayMyName nome={nome}/>
      <Pessoa nome={nome} idade='16' profissao="Programador"/>
    </div>
  );
}

export default App;
