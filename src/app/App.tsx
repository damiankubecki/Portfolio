import React from 'react';
import AppTemplate from 'templates/AppTemplate';
import { Wrapper, Header, Main, Footer } from './AppElements';

const App = () => (
  <AppTemplate>
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  </AppTemplate>
);

export default App;
