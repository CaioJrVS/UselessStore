import React from 'react';

import './App.css';
import Store from '../src/containers/Store'
import Layout from './components/Layout/Layout'



function App() {
  return (
    <div>
      <Layout>
        <Store />
      </Layout>
    </div>
  );
}

export default App;
