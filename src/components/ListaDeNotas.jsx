import React, { Component } from 'react'
import CardNota from './CardNota'


export default class ListaDeNotas extends Component{

  render(){
    return(
      <ul>
        { Array.of("Trabalho", "Trabalho", "Estudo")
        .map( categoria => {
          return( 
          <li>
            <h4>{categoria}</h4>
            <CardNota />
          </li>
          )
        } ) }
      </ul> 
    )
  }

}