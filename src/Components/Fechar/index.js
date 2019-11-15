import React from 'react';

import { Container } from './styles';

const Fechar = () => (
  <Container>
    <button onClick={() => window.top.spl.close()}>
      [FECHAR]
    </button>
  </Container>
);

export default Fechar;
