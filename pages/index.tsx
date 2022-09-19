import type { NextPage } from 'next';
import Link from 'next/link';
import Hero from '../components/Hero';
import TrendingProjects from '../components/Section/TrendingProjects';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Hero />
      <div className="flex flex-col justify-evenly gap-3 items-center w-full mt-[134px] px-7">
        <div className="flex flex-row justify-between items-center w-full px-2">
          <span className="font-[800] text-[20px] text-[#fff]">Trending Projects</span>
          <Link href="/collections">
            <span className="border-[1px] box-border rounded-[4px] border-[#fff] py-1 px-4 flex justify-center items-center text-[#fff] font-[400] text-[16px]">
              See All
            </span>
          </Link>
        </div>
        <TrendingProjects />
      </div>
    </div>
  );
};

export default Home;
