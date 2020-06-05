import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './styles/global';
import '././config/ReactotronConfig';
import Routes from './pages/Main';

console.tron.log('Testando');

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
);

export default App;
