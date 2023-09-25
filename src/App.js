import React, { useState, useEffect } from 'react';
import './App.css';
import Plant from './components/Plant';
import PlantDetail from './components/PlantDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://gist.githubusercontent.com/m5rk/5dbdb4f8dbb9d2a84b46b6f9cfec82ad/raw/c142410765bb2eec0d3c94cdd37e8687a81f451b/plant_care.json');
      const data = await response.json();
      setPlants(data);
    }

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="plants-grid">
            {plants.map((plant, index) => (
              <Plant key={index} plant={plant} />
            ))}
          </div>
        }/>
        <Route path="/plant/:name" element={<PlantDetail plants={plants} />} />
      </Routes>
    </Router>
  );
}

export default App;
