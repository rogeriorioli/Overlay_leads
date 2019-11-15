import React from 'react';

import { Container } from './styles';
const redirectTo = (_link) => {
    
    // const click = window.top.spl.click_only(_link);
    // const cookie = window.top.spl.set_cookie('_spl_tr', 11143, 720);

    setTimeout(function () {
        const url = 'add uri'  

        window.top.location = url;

    }, 800);

};

const Thanx = ({hide}) => (
  <Container>
    <div className={`img-thanx ${hide}`} />
    <p className={`${hide}`}>Seus dados foram enviados com sucesso.</p> 
    <button className={`${hide}`} onClick={() => redirectTo(window.top.location.href)}>CONTINUAR NO SITE</button>
  </Container>

);

export default Thanx;

