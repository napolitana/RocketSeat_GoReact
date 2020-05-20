import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import Main from './pages/Main';

import store from './store';

import ToDoList from './components/ToDoList';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ToDoList />
  </Provider>
);

export default App;
