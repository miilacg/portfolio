/*arquivo que inicializa o react*/
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/index';
import Contato from './pages/Contato';
import SobreMim from './pages/SobreMim';
/*Faz o caminho entre as páginas*/
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import PaginaErro from './pages/Erro';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/*<Route path="/" component = { Home } exact/> 
      <Route path = "/Contato" component = { Contato }/>*/}
      <Route path="/" component = { SobreMim }/>
      <Route component = { PaginaErro }/>
    </Switch>       
  </BrowserRouter>,
  document.getElementById('root') /*renderiza o react no root do index.html*/
);