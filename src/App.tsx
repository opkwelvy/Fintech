import React from 'react';
import Resumo from './Pages/Resumo';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import { DataContextProvider } from './Context/DataContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendas from './Pages/Vendas';
import Venda from './Pages/Venda';
function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/venda/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
