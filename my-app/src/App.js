import React from 'react';
import { Content } from './Content'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer'
import AddItems from './AddItems'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddItems />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
