import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import _ from 'lodash';
import Hero from '../components/Hero';
import CollectionsList from '../components/Section/CollectionsList';
import TrendingProjects from '../components/Section/TrendingProjects';
import Drops from '../components/Section/Drops';
import TrendingNFTs from '../components/Section/TrendingNFTs';

// enum CollectionsListType {
//   TRENDING = 1,
//   TOP = 2
// }

enum LaunchDurationType {
  LIVE = 1,
  ONE_WEEK = 2,
  COMING_SOON = 3
}

const Home: NextPage = () => {
  const [launchDurationType, setLaunchDurationType] = useState<LaunchDurationType>(LaunchDurationType.LIVE);
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full">
      <Hero />
      <div className="flex flex-col justify-evenly gap-5 items-center w-full mt-[134.79px] px-7">
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
      <div className="flex flex-col justify-center gap-5 items-center w-full mt-[72px] px-7">
        <div className="flex items-start justify-start w-full">
          <span className="font-[800] text-[20px] text-[#fff] font-monumentExtended">Trending Collections</span>
        </div>
        <CollectionsList />
        <div className="flex justify-center items-center">
          <button className="border-[#fff] border rounded-[4px] px-8 py-1 flex justify-center items-center">
            <span className="text-[#fff] font-[500] text-[16px] font-monumentExtended">Browse Collections</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-evenly gap-5 items-center w-full mt-[72px] px-7">
        <div className="flex flex-row justify-between items-center w-full px-2 gap-2">
          <span className="font-[800] text-[20px] text-[#fff] font-monumentExtended">Launchpad Drops</span>
          <div className="flex flex-row justify-center bg-[#fff]/[0.022] rounded-[8px] backdrop-blur-[6.21px] font-[400] text-[14px] text-[#fff] leading-[17px] font-monumentExtended">
            <button
              onClick={() => setLaunchDurationType(LaunchDurationType.LIVE)}
              className={`rounded-[8px] py-[18px] px-[17px] ${launchDurationType === LaunchDurationType.LIVE ? 'bg-[#082e8d]/[.51]' : ''}`}
            >
              Live
            </button>
            <button
              onClick={() => setLaunchDurationType(LaunchDurationType.ONE_WEEK)}
              className={`rounded-[8px] py-[18px] px-[17px] ${launchDurationType === LaunchDurationType.ONE_WEEK ? 'bg-[#082e8d]/[.51]' : ''}`}
            >
              7 Days
            </button>
            <button
              onClick={() => setLaunchDurationType(LaunchDurationType.COMING_SOON)}
              className={`rounded-[8px] py-[18px] px-[17px] ${launchDurationType === LaunchDurationType.COMING_SOON ? 'bg-[#082e8d]/[.51]' : ''}`}
            >
              Coming Soon
            </button>
          </div>
          <Link href="/collections">
            <span className="border-[1px] box-border rounded-[4px] border-[#fff] py-1 px-4 flex justify-center items-center text-[#fff] font-[400] text-[16px] font-monumentExtended">
              See All
            </span>
          </Link>
        </div>
        <Drops />
      </div>
      <div className="flex flex-col justify-evenly gap-5 items-center w-full mt-[72px] px-7">
        <div className="flex flex-row justify-start items-center w-full px-2">
          <span className="font-[800] text-[20px] text-[#fff] font-monumentExtended">Trending NFTs</span>
          {/* <Link href="/collections">
            <span className="border-[1px] box-border rounded-[4px] border-[#fff] py-1 px-4 flex justify-center items-center text-[#fff] font-[400] text-[16px]">
              See All
            </span>
          </Link> */}
        </div>
        <TrendingNFTs />
      </div>
    </div>
  );
};

export default Home;
