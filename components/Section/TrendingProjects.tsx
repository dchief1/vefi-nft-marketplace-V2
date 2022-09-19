import React from 'react';
import _ from 'lodash';

// Would be remove in staging/production
const mockData: Array<{ name: string; blockchain: string; image: string }> = [
  {
    name: 'Gatot Vipers',
    blockchain: 'Solana',
    image: '/placeholders/images/artwork5.png'
  },
  {
    name: 'Sneaker Faces',
    blockchain: 'Ethereum',
    image: '/placeholders/images/artwork4.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  },
  {
    name: 'Sneaker Faces',
    blockchain: 'Ethereum',
    image: '/placeholders/images/artwork4.png'
  },
  {
    name: 'Gatot Vipers',
    blockchain: 'Solana',
    image: '/placeholders/images/artwork5.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  }
];

export default function TrendingProjects() {
  return (
    <div className="flex justify-start items-center gap-2 py-2 overflow-auto w-full md:w-[1312px]">
      {_.map(mockData, (data, index) => (
        <div key={index}>
          <div className="card shadow-xl image-full w-full h-full">
            <div className="card-body justify-start">
              <span className="font-[800px] text-[32px]">{data.name}</span>
              <p className="font-[400] text-[16px]">{data.blockchain}</p>
            </div>
            <figure>
              <img src={data.image} alt={data.name} className="w-full h-full" />
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
}
