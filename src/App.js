import React from 'react';
import './App.css';
import Header from './components/Header';
// import CharacterList from './components/CharacterList';
// import EpisodeList from './components/EpisodeList';
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
