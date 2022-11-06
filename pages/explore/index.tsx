import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import { FiRefreshCw, FiSearch } from 'react-icons/fi';
import NftList from '../../components/Section/NftList';
import { Tabs, useExplorerComponent } from '../../hooks/screens/explorer';

export default function Explore() {
  const { query, replace } = useRouter();
  const RenderedComponent = useExplorerComponent(query.tab as Tabs);
  return (
    <>
      <div className="container lg mx-auto">
        {/* toggle control */}
        <div className="mb-10 pb-5 border-b-[1px] border-gray-600 w-full">
          <div className="flex gap-6 text-[18px] text-[#fff] font-monumentExtended tracking-wider justify-center md:justify-start items-center">
            <button
              className={`cursor-pointer ${query.tab === Tabs.NFTS || !query.tab ? 'text-[#ffe600]' : ''}`}
              onClick={() => replace(`/explore?tab=${Tabs.NFTS}`)}
            >
              NFTS
            </button>
            <button
              className={`cursor-pointer ${query.tab === Tabs.COLLECTIONS ? 'text-[#ffe600]' : ''}`}
              onClick={() => replace(`/explore?tab=${Tabs.COLLECTIONS}`)}
            >
              Collections
            </button>
            <button
              className={`cursor-pointer ${query.tab === Tabs.USERS ? 'text-[#ffe600]' : ''}`}
              onClick={() => replace(`/explore?tab=${Tabs.USERS}`)}
            >
              Users
            </button>
          </div>
        </div>
        {/* Content Top */}

        {/* Contents */}
        <div className="w-full flex justify-start h-auto my-10 gap-10 flex-wrap ">
          <RenderedComponent />
        </div>
      </div>
    </>
  );
}
