import { useParams } from 'react-router-dom';

function PlantDetail({ plants }) {
  const { name } = useParams();
  const plant = plants.find(p => p.name === decodeURIComponent(name));

  if (!plant) {
    return <div>Plant not found.</div>;
  }

  return (
    <div className="plant-detail">
      <h2>{plant.name}</h2>
      <ul>
        {plant.care.q1 && <li>{plant.care.q1}</li>}
        {plant.care.q2 && <li>{plant.care.q2}</li>}
        {plant.care.q3 && <li>{plant.care.q3}</li>}
        {plant.care.q4 && <li>{plant.care.q4}</li>}
      </ul>
    </div>
  );
}

export default PlantDetail;
