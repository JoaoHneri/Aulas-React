import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Eventos from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';
import Lista from './components/Lista/Lista';


function App() {
  const nome = 'Luiz'
  const meusItens = ['React', 'Vue', 'Angular', 'Node.js']
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
      <h1>Renderização Condicional:</h1> 
      <Condicional/>
      <h1>Renderização de Lista:</h1>
      <Lista itens={meusItens}></Lista>
    </div>
  );
}

export default App;
