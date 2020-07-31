import React from 'react';

import ListaDeNotas from './components/ListaDeNotas'

function App() {
  return (
    <section>
      <form action="">
        <input type="text" placeholder="titulo"/>
        <textarea placeholder="escreva sua nota..."></textarea>
        <button type="button">Criar Nota</button>
      </form>

      <ListaDeNotas />
    </section>
  );
}

export default App;
