import React from 'react';
import _ from 'lodash';
import Moment from 'react-moment';

const mockData = [
  {
    collectionName: 'Family Guy',
    artistName: 'Jenny Palace',
    startDate: new Date(Date.now() + 60 * 60 * 24 * 5 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 14 * 1000),
    image: '/placeholders/images/family_guy.gif'
  },
  {
    collectionName: 'Artiena',
    artistName: 'The Artiena Project',
    startDate: new Date(Date.now() - 60 * 60 * 24 * 2 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000),
    image: '/placeholders/images/artiena.png'
  },
  {
    collectionName: 'Goated',
    artistName: 'Herman Cassaway',
    startDate: new Date(Date.now() + 60 * 60 * 24 * 1 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 14 * 1000),
    image: '/placeholders/images/goated.png'
  },
  {
    collectionName: 'Hobo Paradise',
    artistName: 'Jenkins Truro',
    startDate: new Date(Date.now() - 60 * 60 * 24 * 14 * 1000),
    endDate: new Date(Date.now() - 60 * 60 * 24 * 2 * 1000),
    image: '/placeholders/images/hobo.png'
  },
  {
    collectionName: 'Goated',
    artistName: 'Herman Cassaway',
    startDate: new Date(Date.now() + 60 * 60 * 24 * 1 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 14 * 1000),
    image: '/placeholders/images/goated.png'
  },
  {
    collectionName: 'Goated',
    artistName: 'Herman Cassaway',
    startDate: new Date(Date.now() + 60 * 60 * 24 * 1 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 14 * 1000),
    image: '/placeholders/images/goated.png'
  },
  {
    collectionName: 'Goated',
    artistName: 'Herman Cassaway',
    startDate: new Date(Date.now() + 60 * 60 * 24 * 1 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 14 * 1000),
    image: '/placeholders/images/goated.png'
  },
  {
    collectionName: 'Family Guy',
    artistName: 'Jenny Palace',
    startDate: new Date(Date.now() + 60 * 60 * 24 * 5 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 14 * 1000),
    image: '/placeholders/images/family_guy.gif'
  }
];
export default function Drops() {
  return (
    <div className="flex flex-nowrap flex-row justify-start items-center w-full overflow-scroll py-2 md:my-auto my-2 gap-2">
      {_.map(mockData, (data, index) => (
        <div key={index} className="w-[296.78px]">
          <div className="card card-bordered shadow-xl h-full w-[inherit] bg-transparent overflow-auto">
            <figure className="w-[inherit] h-[200.56px]">
              <img src={data.image} alt={data.collectionName} className="w-[inherit] h-[inherit] rounded-[10px]" />
            </figure>
            <div className="card-body w-full">
              <div className="flex justify-between items-center w-full">
                <h2 className="card-title text-[#fff]">{data.collectionName}</h2>
                <label
                  className={`rounded-[5px] py-1 px-1 flex justify-center border-[1px] text-[12px] ${
                    data.startDate.getTime() < Date.now() && data.endDate.getTime() > Date.now()
                      ? 'border-[#00ff47] text-[#00ff47]'
                      : Date.now() < data.startDate.getTime()
                      ? 'border-[#fff] text-[#fff]'
                      : 'border-[red] text-[red]'
                  }`}
                >
                  {data.startDate.getTime() < Date.now() && data.endDate.getTime() > Date.now() ? (
                    'Live'
                  ) : Date.now() < data.startDate.getTime() ? (
                    <Moment duration={new Date(Date.now())} date={data.startDate} interval={1000} format="dd[days-]hh[hrs-]mm[mins]" />
                  ) : (
                    'Ended'
                  )}
                </label>
              </div>
              <span className="text-[#e21950] font-[400] text-[16px]">{data.artistName}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
