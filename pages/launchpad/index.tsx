import React, { useState } from 'react';
import FeaturedLaunches from '../../launchSection/FeaturedLaunches';
import FeaturedNFTs from '../../launchSection/FeaturedNFTs';

enum LaunchpadListType {
  LIVE = 1,
  UPCOMING = 2,
  ENDED = 3
}

export default function LaunchpadIndexPage() {
  const [launchpadListType, setLaunchpadListType] = useState<LaunchpadListType>(LaunchpadListType.LIVE);
  return (
    <div className="">
      <div className="text-white text-3xl ml-6 ">
        Explore upcoming <br /> NFT projects coming to <br /> VEFI
      </div>

      <div
        className="
        flex flex-col justify-evenly gap-5  w-full mt-[134.79px] px-7
      "
      >
        <span className="font-[800] text-[20px] text-[#FFE600]">Featured launches</span>
        <FeaturedLaunches />
      </div>

      <div className="flex justify-center items-center gap-6 font-[800] mt-[72px] text-[#fff] text-[20px]">
        <button
          onClick={() => setLaunchpadListType(LaunchpadListType.LIVE)}
          className={`bg-transparent ${launchpadListType === LaunchpadListType.LIVE ? 'border-b-[2px] border-[#ffe600]' : ''}`}
        >
          Live
        </button>
        <button
          onClick={() => setLaunchpadListType(LaunchpadListType.UPCOMING)}
          className={`bg-transparent ${launchpadListType === LaunchpadListType.UPCOMING ? 'border-b-[2px] border-[#ffe600]' : ''}`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setLaunchpadListType(LaunchpadListType.ENDED)}
          className={`bg-transparent ${launchpadListType === LaunchpadListType.ENDED ? 'border-b-[2px] border-[#ffe600]' : ''}`}
        >
          Ended
        </button>
      </div>

      <div className="mt-[72px]">
        <FeaturedNFTs />
      </div>
    </div>
  );
}
