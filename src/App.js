import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import Global from './styles/global';
import { Wrapper, Container, Content } from './styles/components';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import ErrorBox from './components/ErrorBox';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Global />
          <Container>
            <Sidebar />
            <Content>
              <ErrorBox />
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
