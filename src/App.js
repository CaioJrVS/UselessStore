import React from 'react';

import './App.css';
import Store from '../src/containers/Store'
import Layout from './components/Layout/Layout'
import Aux from './hoc/Aux'


function App() {
  return (
    <Aux>
      <Layout>
        <Store />
      </Layout>
    </Aux>
  );
}

export default App;
