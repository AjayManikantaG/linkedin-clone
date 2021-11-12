import React from 'react';
import './App.css';
import Header from './components/Header';
import MainHomeSection from './components/MainHomeSection';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header badges={true} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainHomeSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
