import React, {Component} from 'react'
import farofa from "./farofa.jpg"
class dados extends Component{
  state = {
    nome: "Mariana",
    idade: 18,
    comida: "farofa",
    musicas: ["Tive Razão", "Bohemian Rhapsody", "Bonekinha"]
  }
  render(){
    return(
      <div>
        <h1>Meu nome é {this.state.nome}</h1>
        <h2>Minha idade é {this.state.idade}</h2>
        <h3>Minha comida favorita é {this.state.comida}</h3>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        <img src={farofa}/>
        <p>NAO COMO FRUTA</p>
      </div>
    )
  }
}
export default dados
