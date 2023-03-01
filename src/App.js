import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Eventos from './components/Eventos';
import Form from './components/Form';


function App() {
  const nome = 'Luiz'
  return (
    <div className="App">
      {/* <Hello/>
      <SayMyName nome={nome}/>
      <Pessoa nome={nome} idade='16' profissao="Programador"/>
      <List/> */}
      <h1>Testando Eventos</h1>
      <Eventos/>
      <h1>Testando Form</h1>
      <Form/>
    </div>
  );
}

export default App;
