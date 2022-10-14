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
      <div className="table border-separate w-full bg-transparent overflow-auto border-spacing-y-[15px] border-spacing-x-[0px]">
        <div
          className="text-[#fff] table-header-group font-[800] h-[50px] py-[10px] font-monumentExtended w-full"
          style={{ background: 'linear-gradient(0deg, #121212, #121212), #04032D' }}
        >
          <div className="table-row w-full space-x-4 uppercase">
            <div className="text-left table-cell py-5">#</div>
            <div className="text-left table-cell py-5">Collection</div>
            <div className="text-center table-cell py-5">Links</div>
            <div className="text-center table-cell py-5">Floor Price</div>
            <div className="text-center table-cell py-5">Volume</div>
            <div className="text-center table-cell py-5">Created On</div>
          </div>
        </div>
        <div className="table-row-group gap-1 w-full font-monumentExtended text-[15px] border-t-[1em] border-transparent border-solid">
          {_.map(mockData, (item, index) => (
            <div key={index} className="table-row text-[#fff] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <div className="text-left table-cell font-[600] px-2">{index + 1}</div>
              <div className="table-cell text-center px-2">
                <div className="flex justify-start items-center gap-2 py-1 w-full">
                  <img src={item.image} alt={item.collectionName} className="rounded-[3px] w-[45px] h-[45px]" />
                  <div className="flex justify-start px-2">
                    <span className="font-[600] text-[15px]">{item.collectionName}</span>
                  </div>
                </div>
              </div>
              <div className="table-cell text-center px-2">
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
              <div className="text-center table-cell px-2">{item.floorPrice}</div>
              <div className="text-center table-cell px-2">{item.volume}</div>
              <div className="text-center table-cell px-2">{item.createdOn.toDateString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
