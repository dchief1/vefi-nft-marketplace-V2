import React from 'react';
import _ from 'lodash';

const mockData = [
  {
    collectionName: 'Away in Aweland',
    image: '/launchpad/images/NFT1.png',
    blockChain: 'Bitgert',
    price: '0.3VEF',
    items: '4000'
  },
  {
    collectionName: 'Demiurges',
    image: '/launchpad/images/NFT2.png',
    blockChain: 'Neon',
    price: '0.3VEF',
    items: '4000'
  },
  {
    collectionName: 'Hobo Paradise',
    image: '/launchpad/images/NFT3.png',
    blockChain: 'Aurora',
    price: '0.3VEF',
    items: '4000'
  },
  {
    collectionName: 'Deranged Assylum',
    image: '/launchpad/images/NFT4.png',
    blockChain: 'Ethereum',
    price: '0.3VEF',
    items: '4000'
  },
  {
    collectionName: 'Flowery Reality',
    image: '/launchpad/images/NFT5.png',
    blockChain: 'Ethereum',
    price: '0.3VEF',
    items: '4000'
  },
  {
    collectionName: 'African Mistress',
    image: '/launchpad/images/NFT6.png',
    blockChain: 'Smartchain',
    price: '0.3VEF',
    items: '4000'
  }
];

export default function FeaturedNFTs() {
  return (
    <div>
      {/* First sliced card */}
      <div className="flex flex-wrap justify-center items-center w-full py-2 md:my-auto my-2 gap-3">
        {_.map(mockData, (data, index) => (
          <div key={index} className="w-[350.78px] px-[3px] py-[4px] h-full">
            <div className="card card-bordered shadow-xl w-[inherit] bg-transparent overflow-auto h-full">
              <figure className="w-full h-[200.56px]">
                <img src={data.image} alt={data.collectionName} className="w-[inherit] h-[inherit]" />
              </figure>
              <div className="card-body w-full">
                <div className="flex justify-between px-4 items-center w-full">
                  <span className="text-[#FFE600] font-[400] leading-[22px] text-[18px] font-monumentExtended card-title">
                    {data.collectionName}
                  </span>
                  <span className="text-white font-[400] text-[14px] font-outfit">{data.blockChain} </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
