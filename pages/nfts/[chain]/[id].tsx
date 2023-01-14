import React from 'react';
import { FiHeart, FiUpload, FiRefreshCcw, FiMoreHorizontal } from 'react-icons/fi';

export default function index() {
  return (
    <>
      <div className="container mx-auto ">
        <div className="w-full flex ">
          <div className="flex basis-1/2 h-auto">
            <div className="flex flex-col w-full">
              <div className="flex pb-[10px]">
                <div className="card shadow-xl w-full">
                  <figure className="h-[400px]">
                    <img src="https://placeimg.com/400/400/arch" alt="Album" className="w-full" />
                  </figure>
                </div>
              </div>
              <div className="w-full">
                <div className="tabs tabs-boxed">
                  <a className="tab tab-active">Overview</a>
                  <a className="tab ">
                    Properties <span className="badge badge-secondary ml-[2px]">5</span>
                  </a>
                  <a className="tab">Bids</a>
                  <a className="tab">History</a>
                </div>
              </div>
              <div className="w-full p-[10px]">
                <h3 className="text-[#fff] font-[800] text-[20px] mt-[10px]">Description</h3>
                <p className="text-[#ccc] text-[12px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur similique ipsam ipsum doloremque ut placeat odio amet eius
                  veniam illo.
                </p>
              </div>
            </div>
          </div>
          <div className="flex basis-1/2  justify-end">
            <div className="h-auto">
              <div className="">
                <h2 className="text-[14px] text-[#fff] font-outfit leading-10 font-[700]">PudgyPenguis</h2>
              </div>
              <div className="">
                <h1 className="text-[26px] text-[#fff] font-[800] font-outfit leading-10 justify-center md:justify-start items-center">
                  Pudgy Penguins #3237
                </h1>
              </div>
              <div className="flex justify-between py-[20px] border-b-[1px] border-gray-700">
                <div className="flex pr-[10px]">
                  <div className="h-[50px] w-[50px] bg-[yellow] rounded-full"></div>
                  <div className="flex flex-col pl-[5px]">
                    <span className="text-[#afafaf] font-[700] text-[12px]">Creator</span>
                    <span className="text-[14px] text-[#fff] leading-7 font-[800]">abnndop....djlaow</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-[50px] w-[50px] bg-[yellow] rounded-full"></div>
                  <div className="flex flex-col pl-[5px]">
                    <span className="text-[#afafaf] font-[700] text-[12px]">Current owner</span>
                    <span className="text-[14px] text-[#fff] leading-7 font-[800]">abnndop....djlaow</span>
                  </div>
                </div>
              </div>
              <div className="flex py-[20px] justify-between text-[#fff] font-[600]">
                <div className="flex items-center gap-2">
                  <span>
                    <FiHeart />
                  </span>
                  <span>1</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FiUpload />
                  </span>
                  <span>Share</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FiRefreshCcw />
                  </span>
                  <span>Refresh</span>
                </div>
                <div className="flex items-center">
                  <span>
                    <FiMoreHorizontal />
                  </span>
                </div>
              </div>
              <div className="h-auto w-full p-[10px] border rounded-[10px] mt-[10px]">
                <div className="flex justify-between w-full gap-[5px]">
                  <div className="text-center flex flex-col bg-[#fff] p-[10px] rounded-[10px] w-1/2">
                    <span className="text-[#03015AB2] font-[600] text-[12px]">Price</span>
                    <h2 className="text-[#03015AB2] font-[800] text-[24px]">3.3ETH</h2>
                    <span className="text-[#03015AB2] font-[600]">$5,416</span>
                  </div>
                  <div className="bg-[#010037] text-center p-[10px] rounded-[10px] text-[#fff] w-1/2">
                    <span className="text-[12px] font-[600] text-[#fff]">
                      Highest <b>Floor Bid</b>
                    </span>
                    <h2 className="text-[#fff] font-[800] text-[24px]">0.23wETH</h2>
                    <span className="text-[#fff] font-[600] text-[12px]">by Promiselxg</span>
                  </div>
                </div>
                <div className="py-[40px] flex justify-center">
                  <h2 className="text-[#fff] font-[700]">Last Sale Price 3.5wETH</h2>
                </div>
                <div className="flex flex-col w-full ">
                  <div className="flex pb-[10px] gap-[5px]">
                    <input type="text" placeholder="Buy now for 3.5ETH" className="input w-full max-w-xs" />
                    <button className="btn">+</button>
                  </div>
                  <button className="btn btn-outline" style={{ color: '#fff', fontWeight: 'normal' }}>
                    Place a bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-auto w-full  mt-[72px]">
          <h2 className="font-[800] text-[28px] text-[#fff] font-outfit text-center">More from this Collection</h2>
          <div className="carousel carousel-center ">
            <div className="carousel-item">
              <div className="flex flex-col justify-evenly gap-5 items-center w-full mt-[20px] px-7">
                <div className="flex flex-nowrap flex-row justify-start items-center w-full overflow-scroll py-2 md:my-auto my-2 gap-2">
                  <div className="w-[296.78px]">
                    <div className="card p-[5px] card-bordered shadow-xl h-full w-[inherit] bg-transparent overflow-auto">
                      <figure className="w-[inherit]">
                        <img src="https://placeimg.com/400/400/arch" alt="image" className="w-[inherit] h-[200.56px] rounded-[10px]" />
                      </figure>
                      <div className="card-body w-full">
                        <div className="flex flex-col w-full ml-[-30px]">
                          <h3 className="text-[#afafaf] font-[700] text-[12px]">Anuforo</h3>
                          <h2 className="text-[#fff] font-[800] text-[18px]">Pudgy Pengius #243</h2>
                        </div>
                        <div className="flex justify-between ml-[-30px] pt-[10px]">
                          <div className="flex flex-col">
                            <span className="text-[#afafaf] font-[700] text-[10px]">Price</span>
                            <h2 className="text-[#afafaf] font-[700] text-[14px]">Open for bids</h2>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[#afafaf] font-[700] text-[10px]">Highest bid</span>
                            <h2 className="text-[#afafaf] font-[700] text-[14px]">0.23wETH</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="flex flex-col justify-evenly gap-5 items-center w-full mt-[20px] px-7">
                <div className="flex flex-nowrap flex-row justify-start items-center w-full overflow-scroll py-2 md:my-auto my-2 gap-2">
                  <div className="w-[296.78px]">
                    <div className="card p-[5px] card-bordered shadow-xl h-full w-[inherit] bg-transparent overflow-auto">
                      <figure className="w-[inherit]">
                        <img src="https://placeimg.com/400/400/arch" alt="image" className="w-[inherit] h-[200.56px] rounded-[10px]" />
                      </figure>
                      <div className="card-body w-full">
                        <div className="flex flex-col w-full ml-[-30px]">
                          <h3 className="text-[#afafaf] font-[700] text-[12px]">Anuforo</h3>
                          <h2 className="text-[#fff] font-[800] text-[18px]">Pudgy Pengius #243</h2>
                        </div>
                        <div className="flex justify-between ml-[-30px] pt-[10px]">
                          <div className="flex flex-col">
                            <span className="text-[#afafaf] font-[700] text-[10px]">Price</span>
                            <h2 className="text-[#afafaf] font-[700] text-[14px]">Open for bids</h2>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[#afafaf] font-[700] text-[10px]">Highest bid</span>
                            <h2 className="text-[#afafaf] font-[700] text-[14px]">0.23wETH</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="flex flex-col justify-evenly gap-5 items-center w-full mt-[20px] px-7">
                <div className="flex flex-nowrap flex-row justify-start items-center w-full overflow-scroll py-2 md:my-auto my-2 gap-2">
                  <div className="w-[296.78px]">
                    <div className="card p-[5px] card-bordered shadow-xl h-full w-[inherit] bg-transparent overflow-auto">
                      <figure className="w-[inherit]">
                        <img src="https://placeimg.com/400/400/arch" alt="image" className="w-[inherit] h-[200.56px] rounded-[10px]" />
                      </figure>
                      <div className="card-body w-full">
                        <div className="flex flex-col w-full ml-[-30px]">
                          <h3 className="text-[#afafaf] font-[700] text-[12px]">Anuforo</h3>
                          <h2 className="text-[#fff] font-[800] text-[18px]">Pudgy Pengius #243</h2>
                        </div>
                        <div className="flex justify-between ml-[-30px] pt-[10px]">
                          <div className="flex flex-col">
                            <span className="text-[#afafaf] font-[700] text-[10px]">Price</span>
                            <h2 className="text-[#afafaf] font-[700] text-[14px]">Open for bids</h2>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[#afafaf] font-[700] text-[10px]">Highest bid</span>
                            <h2 className="text-[#afafaf] font-[700] text-[14px]">0.23wETH</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="flex flex-col justify-evenly gap-5 items-center w-full mt-[20px] px-7">
                <div className="flex flex-nowrap flex-row justify-start items-center w-full overflow-scroll py-2 md:my-auto my-2 gap-2">
                  <div className="w-[296.78px]">
                    <div className="card p-[5px] card-bordered shadow-xl h-full w-[inherit] bg-transparent overflow-auto">
                      <figure className="w-[inherit]">
                        <img src="https://placeimg.com/400/400/arch" alt="image" className="w-[inherit] h-[200.56px] rounded-[10px]" />
                      </figure>
                      <div className="card-body w-full">
                        <div className="flex flex-col w-full ml-[-30px]">
                          <h3 className="text-[#afafaf] font-[700] text-[12px]">Anuforo</h3>
                          <h2 className="text-[#fff] font-[800] text-[18px]">Pudgy Pengius #243</h2>
                        </div>
                        <div className="flex justify-between ml-[-30px] pt-[10px]">
                          <div className="flex flex-col">
                            <span className="text-[#afafaf] font-[700] text-[10px]">Price</span>
                            <h2 className="text-[#afafaf] font-[700] text-[14px]">Open for bids</h2>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[#afafaf] font-[700] text-[10px]">Highest bid</span>
                            <h2 className="text-[#afafaf] font-[700] text-[14px]">0.23wETH</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="flex flex-col justify-evenly gap-5 items-center w-full mt-[20px] px-7">
                <div className="flex flex-nowrap flex-row justify-start items-center w-full overflow-scroll py-2 md:my-auto my-2 gap-2">
                  <div className="w-[296.78px]">
                    <div className="card p-[5px] card-bordered shadow-xl h-full w-[inherit] bg-transparent overflow-auto">
                      <figure className="w-[inherit]">
                        <img src="https://placeimg.com/400/400/arch" alt="image" className="w-[inherit] h-[200.56px] rounded-[10px]" />
                      </figure>
                      <div className="card-body w-full">
                        <div className="flex flex-col w-full ml-[-30px]">
                          <h3 className="text-[#afafaf] font-[700] text-[12px]">Anuforo</h3>
                          <h2 className="text-[#fff] font-[800] text-[18px]">Pudgy Pengius #243</h2>
                        </div>
                        <div className="flex justify-between ml-[-30px] pt-[10px]">
                          <div className="flex flex-col">
                            <span className="text-[#afafaf] font-[700] text-[10px]">Price</span>
                            <h2 className="text-[#afafaf] font-[700] text-[14px]">Open for bids</h2>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[#afafaf] font-[700] text-[10px]">Highest bid</span>
                            <h2 className="text-[#afafaf] font-[700] text-[14px]">0.23wETH</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-[30px]">
          <button className="btn btn-outline btn-wide" style={{ color: '#fff', fontWeight: '600' }}>
            View Collection
          </button>
        </div>
      </div>
    </>
  );
}
