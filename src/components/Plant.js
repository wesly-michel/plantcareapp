import { Link } from 'react-router-dom';

function Plant({ plant }) {
  return (
    <div className="plant">
      <h3><Link to={`/plant/${plant.name}`}>{plant.name}</Link></h3>
      <ul>
        {plant.care.q1 && <li>{plant.care.q1}</li>}
        {plant.care.q2 && <li>{plant.care.q2}</li>}
        {plant.care.q3 && <li>{plant.care.q3}</li>}
        {plant.care.q4 && <li>{plant.care.q4}</li>}
      </ul>
    </div>
  );
}

export default Plant;
