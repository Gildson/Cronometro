import React, { Component } from 'react';
import './style.css';
import cronometro from './assets/cronometro.png';

class App extends Component{

  constructor(props){
    super(props);
    /*Memória*/
    this.state = {
      numero: 0,
      botao: 'VAI'
    };
    /*Toda função deve está declarada aqui*/
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'VAI'
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100);
      state.botao = 'PAUSAR'
    }
    this.setState(state);
  }

  limpar(){

    clearInterval(this.timer);
    this.timer = null;

    let state = this.state; /*Para ter acesso as states*/
    state.numero = 0;
    state.botao = 'VAI';
    this.setState(state); /*Para mudar as states*/

  }

  render(){
    return(
      <div className="container">
        <img src={cronometro} alt="cronometro" className="img"/>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.vai}>{this.state.botao}</a>
          <a className="botao" onClick={this.limpar}>ZERAR</a>
        </div>
      </div>
    );
  }
}

export default App;
