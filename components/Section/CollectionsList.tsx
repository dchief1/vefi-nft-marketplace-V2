import React from 'react';
import _ from 'lodash';
import { FiTwitter, FiGlobe } from 'react-icons/fi';
import { AiOutlineReddit } from 'react-icons/ai';
import { FaTelegramPlane, FaDiscord } from 'react-icons/fa';

const mockData = [
  {
    image: '/placeholders/images/artwork5.png',
    collectionName: 'Gatot Vipers',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'telegram',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'discord',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'reddit',
        url: 'https://twitter.com/java_warrior'
      }
    ],
    floorPrice: '500 ETH',
    volume: '500 ETH',
    createdOn: new Date(Date.now()),
    website: 'https://google.com'
  },
  {
    image: '/placeholders/images/artwork4.png',
    collectionName: 'Sneaker Faces',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'telegram',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'discord',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'reddit',
        url: 'https://twitter.com/java_warrior'
      }
    ],
    floorPrice: '500 ETH',
    volume: '500 ETH',
    createdOn: new Date(Date.now()),
    website: 'https://google.com'
  },
  {
    image: '/placeholders/images/artwork3.png',
    collectionName: 'Vain Monstrosity',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'telegram',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'discord',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'reddit',
        url: 'https://twitter.com/java_warrior'
      }
    ],
    floorPrice: '500 ETH',
    volume: '500 ETH',
    createdOn: new Date(Date.now()),
    website: 'https://google.com'
  },
  {
    image: '/placeholders/images/artwork1.png',
    collectionName: 'Away in Aweland',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'telegram',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'discord',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'reddit',
        url: 'https://twitter.com/java_warrior'
      }
    ],
    floorPrice: '500 ETH',
    volume: '500 ETH',
    createdOn: new Date(Date.now()),
    website: 'https://google.com'
  },
  {
    image: '/placeholders/images/artwork1.png',
    collectionName: 'Away in Aweland',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'telegram',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'discord',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'reddit',
        url: 'https://twitter.com/java_warrior'
      }
    ],
    floorPrice: '500 ETH',
    volume: '500 ETH',
    createdOn: new Date(Date.now()),
    website: 'https://google.com'
  },
  {
    image: '/placeholders/images/family_guy.gif',
    collectionName: 'Family Guy',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'telegram',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'discord',
        url: 'https://twitter.com/java_warrior'
      },
      {
        name: 'reddit',
        url: 'https://twitter.com/java_warrior'
      }
    ],
    floorPrice: '500 ETH',
    volume: '500 ETH',
    createdOn: new Date(Date.now()),
    website: 'https://google.com'
  }
];

const iconsMap = {
  twitter: <FiTwitter />,
  reddit: <AiOutlineReddit />,
  telegram: <FaTelegramPlane />,
  discord: <FaDiscord />
};

export default function CollectionsList() {
  return (
    <div className="w-full overflow-auto">
      <div className="table border-collapse w-full bg-transparent overflow-auto">
        <div className="text-[#fff] table-header-group font-[800]">
          <div className="table-row w-full">
            <div className="text-left table-cell">#</div>
            <div className="text-left table-cell">Collection</div>
            <div className="text-center table-cell">Links</div>
            <div className="text-center table-cell">Floor Price</div>
            <div className="text-center table-cell">Volume</div>
            <div className="text-center table-cell">Created On</div>
          </div>
        </div>
        <div className="table-row-group gap-1 w-full">
          {_.map(mockData, (item, index) => (
            <div key={index} className={`table-row py-4 text-[#fff] ${index < mockData.length - 1 ? 'border-b-[0.5px] border-[#ffe600]' : ''}`}>
              <div className="text-left table-cell font-[600]">{index + 1}</div>
              <div className="table-cell text-center">
                <div className="flex justify-start items-center gap-2 py-1 w-full">
                  <img src={item.image} alt={item.collectionName} className="rounded-[10px] w-[45px] h-[45px]" />
                  <div className="flex justify-start px-2">
                    <span className="font-[600] text-[14px]">{item.collectionName}</span>
                  </div>
                </div>
              </div>
              <div className="table-cell text-center">
                <div className="flex justify-center items-center gap-1">
                  {item.website && (
                    <a href={item.website} target="_blank" rel="noreferrer">
                      <FiGlobe />
                    </a>
                  )}
                  {_.map(item.links, (link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noreferrer">
                      {iconsMap[link.name as keyof typeof iconsMap]}
                    </a>
                  ))}
                </div>
              </div>
              <div className="text-center table-cell">{item.floorPrice}</div>
              <div className="text-center table-cell">{item.volume}</div>
              <div className="text-center table-cell">{item.createdOn.toDateString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
