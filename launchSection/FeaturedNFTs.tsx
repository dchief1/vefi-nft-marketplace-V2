import React from 'react'

const mockData = [
    {
      collectionName: 'Early morning',
      image: '/launchpad/images/NFT1.png',
      blockChain: '2days - 04hrs left',
      price: '0.3VEF',
      items: '4000'
    },
    {
      collectionName: 'Early morning',
      image: '/launchpad/images/NFT2.png',
      blockChain: '22hrs - 27mins left',
      price: '0.3VEF',
      items: '4000'
    },
    {
      collectionName: 'Early morning',
      image: '/launchpad/images/NFT3.png',
      blockChain: '20mins - 12secs left',
      price: '0.3VEF',
      items: '4000'
    },
    {
      collectionName: 'Early morning',
      image: '/launchpad/images/NFT4.png',
      blockChain: 'Ethereum',
      price: '0.3VEF',
      items: '4000'
    },
    {
      collectionName: 'Early morning',
      image: '/launchpad/images/NFT5.png',
      blockChain: 'Ethereum',
      price: '0.3VEF',
      items: '4000'
    },
    {
      collectionName: 'Early morning',
      image: '/launchpad/images/NFT6.png',
      blockChain: '20mins - 12secs left',
      price: '0.3VEF',
      items: '4000'
    }
  ];

  
  export default function FeaturedNFTs() {
    return (
      <div>
      {/* First sliced card */}
      <div className="flex flex-nowrap flex-col md:flex-row justify-center items-center w-full  py-2 md:my-auto my-2 gap-6">
        {mockData.slice(0,3).map((data, index) => ( 
            <div key={index} className="w-40 px-4">
                <div className="  bg-[#01003E]  shadow-xl h-full w-[inherit] bg-transparent overflow-auto">
                  <img src={data.image}  className="w-[inherit] h-40 " />
                  <div className=" w-full bg-[#01003E]">
                    <div className="flex justify-between px-4  items-center w-full">
                      <span className="text-[#FFE600] font-[400]  leading-[22px] text-[18px]">{data.collectionName} <br />chimpmonks </span>
                      <span className="text-white font-[400] text-[10px]">{data.blockChain}  </span>
                    </div>
                    <div className="flex justify-between   w-full rounded-[10px] py-[7.52px] px-4">
                      <div className="flex flex-col  justify-between items-center">
                        <span className="text-white font-[700] text-[10px]">Items</span>
                        <span className="text-[#afafaf] font-[700] text-[10px]">{data.items}</span>
                      </div>
                      <div className="flex flex-col mr-12   justify-between items-center">
                        <span className="text-white font-[700] text-[10px]">Price</span>
                        <span className="text-[#afafaf] font-[700] text-[10px]">{data.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}
      </div>

      {/* Last sliced card */}
      <div className="flex flex-nowrap flex-col md:flex-row justify-center items-center w-full  py-2 md:my-auto my-2 gap-6">
        {mockData.slice(3,6).map((data, index) => ( 
            <div key={index} className="w-40 px-4">
                <div className=" bg-[#01003E] shadow-xl h-full w-[inherit] bg-transparent overflow-auto">
                  <img src={data.image}  className="w-[inherit] h-40 rounded-[10px]" />
                  <div className=" w-full bg-[#01003E]">
                    <div className="flex justify-between px-4 items-center w-full">
                      <span className="text-[#FFE600] font-[400] leading-[22px] text-[18px]">{data.collectionName} <br />chimpmonks </span>
                      <span className="text-white font-[400] text-[10px]">{data.blockChain}</span>
                    </div>
                    <div className="flex justify-between w-full rounded-[10px] py-[7.52px] px-4">
                      <div className="flex flex-col gap-2 justify-between items-center">
                        <span className="text-white font-[700] text-[10px]">Items</span>
                        <span className="text-[#afafaf] font-[700] text-[10px]">{data.items}</span>
                      </div>
                      <div className="flex flex-col mr-12 gap-2 justify-between items-center">
                        <span className="text-white font-[700] text-[10px]">Price</span>
                        <span className="text-[#afafaf] font-[700] text-[10px]">{data.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}
      </div>
      </div>
    )
  }
  