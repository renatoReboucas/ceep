import React, { Component } from 'react';

import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro';

import "./app.css";
import "./index.css";

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    // console.log(`uma nova nota foi criada ${titulo} ${texto}`);
    const novaNota = {titulo, texto}
    const novoArryNotas = [...this.state.notas,novaNota]
    const novoEstate = {
      notas:novoArryNotas
    }
    this.setState(novoEstate)
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}


