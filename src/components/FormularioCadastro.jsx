import React, { Component } from 'react'
import './css/formulario.css'

export default class FormularioCadastro extends Component{

  constructor(props){
    super(props)
    this.titulo = ""
    this.texto = ""

  }

  // o _ representa um metodo privado no js
  _handlerMudancaTitulo(e){
    e.stopPropagation();
    this.titulo = e.target.value
    // console.log(this.titulo);

  }

  _handlerMudancaTexto(e){
    e.stopPropagation();
  this.texto = e.target.value;
  }

  _criarNota(e){
    e.preventDefault()
    e.stopPropagation()
    this.props.criarNota(this.titulo, this.texto);
    // console.log(`uma nova nota foi criada ${this.titulo} ${this.texto}`);
  }

  render(){
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handlerMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handlerMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}