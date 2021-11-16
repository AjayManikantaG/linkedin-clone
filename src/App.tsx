import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainHomeSection from './components/MainHomeSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const UpdateContext: any = createContext(1);

function App() {
  const [newPosts, setNewPosts] = useState(1);

  const increment = () => {
    setNewPosts(newPosts + 1);
  };

  return (
    <UpdateContext.Provider value={{ newPosts, increment }}>
      <div className='App'>
        <BrowserRouter>
          <Header badges={true} />

          <Routes>
            <Route path='/' element={<MainHomeSection />} />
            <Route path='/network' element={<div>Under construction</div>} />
            <Route path='/jobs' element={<div>Under construction</div>} />
            <Route path='/messaging' element={<div>Under construction</div>} />
            <Route path='/notify' element={<div>Under construction</div>} />
            <Route path='/me' element={<div>Under construction</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </UpdateContext.Provider>
  );
}

export default App;
