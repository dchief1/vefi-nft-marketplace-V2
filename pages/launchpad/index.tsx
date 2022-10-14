import React, { useState } from 'react';
import Link from 'next/link';
import FeaturedLaunches from '../../components/Launchpad/Section/FeaturedLaunches';
import LaunchItems from '../../components/Launchpad/Section/LaunchItems';

enum LaunchpadListType {
  LIVE = 1,
  UPCOMING = 2,
  ENDED = 3
}

export default function LaunchpadIndexPage() {
  const [launchpadListType, setLaunchpadListType] = useState<LaunchpadListType>(LaunchpadListType.LIVE);
  return (
    <div className="flex flex-col justify-evenly items-center md:items-start gap-3 px-4 w-full">
      <div className="flex flex-col justify-center items-center md:items-start gap-1 px-2 w-full">
        <span className="text-white text-[20px] md:text-[40px] ml-6 font-monumentExtended text-center md:text-justify">
          Explore new collections coming to VEFI
        </span>
        <Link href="/launchpad/new">
          <button className="bg-[#ffe600] rounded-[12px] px-8 py-1 flex">
            <span className="text-[#000] font-[500] text-[16px] font-outfit">Apply for launchpad</span>
          </button>
        </Link>
      </div>

      <div className="flex flex-col justify-evenly gap-5  w-full mt-[134.79px] px-7">
        <span className="font-[800] text-[20px] text-[#FFE600] font-outfit">Featured launches</span>
        <FeaturedLaunches />
      </div>

      <div className="flex flex-col gap-2 mt-[72px] w-full">
        <div className="flex justify-center items-center gap-6 font-[800] mt-[72px] text-[#fff] text-[20px] w-full">
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
        <LaunchItems />
      </div>
    </div>
  );
}
