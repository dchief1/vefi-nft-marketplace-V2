import React from 'react';
import Image from 'next/image';

const myLoader = ({ src, width, quality }: any) => {
  return `https://plus.unsplash.com/${src}&w=${width}&q=${quality || 80}`;
};

interface CardInfo {
  name: string;
  no_of_owners: string;
  volume: string;
  floor: string;
  symbol: string;
}
export default function NFTCard({ name, no_of_owners, volume, floor, symbol }: CardInfo) {
  return (
    <>
      <div className="flex flex-col border items-center rounded-[20px] overflow-hidden border-gray-600 h-[350px]">
        <div>
          <Image
            loader={myLoader}
            src="premium_photo-1661412944611-d3b798ab6638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
            alt="Picture of the author"
            width={500}
            height={400}
            className="rounded-b-[20px] rounded-bl-[20px] object-fit"
          />
        </div>
        <div className="content__wrapper flex w-full relative">
          <div className="absolute top-[-35px] left-3">
            <Image
              loader={myLoader}
              src="premium_photo-1661412944611-d3b798ab6638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
              alt="Picture of the author"
              width={50}
              height={50}
              className="rounded object-cover"
            />
          </div>
          <div className="content flex  w-full justify-between items-center p-3 mt-4">
            <div className="flex w-[80%] flex-col leading-5">
              <span className="text-[9px] text-[whitesmoke] font-monumentExtended">{name}</span>
              <span className="text-[10px] text-[#fff] font-monumentExtended tracking-wider">{no_of_owners} Owners</span>
            </div>
            <div className="right flex w-full justify-between">
              <div className="flex flex-col leading-5">
                <span className="text-[9px] text-[whitesmoke] font-monumentExtended">Total Volume</span>
                <span className="text-[10px] text-[whitesmoke] font-monumentExtended tracking-wider">
                  {volume} {symbol}
                </span>
              </div>
              <div className=" flex flex-col leading-5">
                <span className="text-[9px] text-[whitesmoke] font-monumentExtended capitalize">floor</span>
                <span className="text-[10px] text-[whitesmoke] font-monumentExtended tracking-wider">
                  {floor}
                  {symbol}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
