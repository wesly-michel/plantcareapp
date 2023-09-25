import { useRouter } from 'next/router';
import Plant from '../../components/Plant';

function PlantPage({ plant }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  return <Plant plant={plant} />;
}

PlantPage.getStaticPaths = async () => {
  const response = await fetch('https://gist.githubusercontent.com/m5rk/5dbdb4f8dbb9d2a84b46b6f9cfec82ad/raw/c142410765bb2eec0d3c94cdd37e8687a81f451b/plant_care.json');
  const plants = await response.json();

  const paths = plants.map((plant) => ({
    params: { name: plant.name }
  }));

  return { paths, fallback: true };
};

PlantPage.getStaticProps = async (context) => {
  const name = context.params.name;
  const response = await fetch('https://gist.githubusercontent.com/m5rk/5dbdb4f8dbb9d2a84b46b6f9cfec82ad/raw/c142410765bb2eec0d3c94cdd37e8687a81f451b/plant_care.json');
  const plants = await response.json();
  const plant = plants.find((p) => p.name === name);

  return { props: { plant } };
};

export default PlantPage;
