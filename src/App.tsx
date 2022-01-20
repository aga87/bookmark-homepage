import React from 'react';
import './scss/index.scss';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage';
import Footer from './components/Footer/Footer';

const App = (): JSX.Element => (
  <div>
    <Header />
    <Homepage />
    <Footer />
  </div>
);

export default App;
