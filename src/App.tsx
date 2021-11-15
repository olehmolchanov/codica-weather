import React from 'react';
import { Route, Routes } from 'react-router';

import { Card } from './pages/Card/Card';
import { Error } from './pages/Error/Error';
import { Home } from './pages/Home/Home';
import { Header } from './shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
