import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../contariners/Home'
import AddFamily from '../contariners/AddFamily'
import Gracias from '../components/Gracias'
import Empecemos from '../contariners/Empecemos'
import '../assest/styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/agregarparientes" component={AddFamily} />
          <Route exact path="/gracias" component={Gracias} />
          <Route exact path="/empecemos" component={Empecemos} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
