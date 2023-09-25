import React, { useState, useEffect } from 'react';
import Plant from '../components/Plant';

function Index() {
  const [plants, setPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const plantsPerPage = 20;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://gist.githubusercontent.com/m5rk/5dbdb4f8dbb9d2a84b46b6f9cfec82ad/raw/c142410765bb2eec0d3c94cdd37e8687a81f451b/plant_care.json');
      const data = await response.json();
      setPlants(data);
    }

    fetchData();
  }, []);

  // Paginate the plants data
  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = plants.slice(indexOfFirstPlant, indexOfLastPlant);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="plants-grid">
        {currentPlants.map((plant, index) => (
          <Plant key={index} plant={plant} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(plants.length / plantsPerPage) }, (_, i) => i + 1).map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Index;
