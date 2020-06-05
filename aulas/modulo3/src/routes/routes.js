import React from 'react';
import { BrowserRouter, Switch, Routes } from 'react-router-dom';

const routes = () => {
  <BrowserRouter>
    <Switch>
      <Routes exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>;
};

export default routes;
