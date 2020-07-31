import React, { Component } from 'react'

export default class FormularioCadastro extends Component{
  render(){
    return (
      <form action="">
        <input type="text" placeholder="titulo" />
        <textarea placeholder="escreva sua nota..."></textarea>
        <button type="button">Criar Nota</button>
      </form>
    );
  }
}