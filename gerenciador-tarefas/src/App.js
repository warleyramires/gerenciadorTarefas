import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TarefaList from "./components/TarefaList";
import AdicionaTarefa from "./components/AdicionarTarefa";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="box">
        <Routes>
          <Route path="/" element={<TarefaList />} />
          <Route path="/add" element={<AdicionaTarefa />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
