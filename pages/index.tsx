import type { NextPage } from 'next';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
    </div>
  );
};

export default Home;
