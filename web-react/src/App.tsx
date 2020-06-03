import React from 'react';
import './App.css';

import Routes from './routes'

// import React, {useState} from 'react';
// JSX: Sintaxe de XML dentro do JavaSript
// import Header from './Header';

function App() {
  //   const [counter, setCounter] = useState(0); // [Valor do estado, Função para atualizar o valor do estado]
  //   function handleButtonClick() {
  //     setCounter(counter + 1);
  //   }
  //   return (
  //     <div>
  //       <Header title="Hello World"/>
  //       <Header title={`Contador: ${counter}`}/>
  //       <h1>{counter}</h1>
  //       <button type="button" onClick={handleButtonClick}>Aumentar</button>
  //     </div>
  //   );
  // }
  return (
    <Routes />
  )
}

export default App;
