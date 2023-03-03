
import './App.css';

import Saudacao from './components/Saudacao';
import List from './components/List';
import Eventos from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';
import Lista from './components/Lista/Lista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';

function App() {
  const meusItens = ['React, Vue, Angular, Node']
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Eventos/>
      <h1>Testando Form</h1>
      <Form/>
      <h1>Renderização Condicional:</h1> 
      <Condicional/>
      <h1>Renderização de Lista:</h1>
      <Lista itens={meusItens}></Lista>
      <h1> Entendendo StateLift:</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
