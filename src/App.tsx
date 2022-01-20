import React from 'react';
import './scss/index.scss';
import Navigation from './components/Navigation/Navigation';
import NavigationFooter from './components/Navigation/NavigationFooter';
import Homepage from './pages/Homepage';

const App = (): JSX.Element => (
  <div>
    <Navigation />
    <Homepage />
    <NavigationFooter />
  </div>
);

export default App;
