import React, { useState } from 'react';

enum Route {
  INTRO,
  FORM
}

export default function New() {
  const [activeRoute, setActiveRoute] = useState<Route>(Route.INTRO);

  const Intro = () => (
    <div className="flex flex-col justify-start items-center gap-6 w-full px-3">
      <h2 className="font-monumentExtended font-[800] text-[#fff] text-center md:text-justify">
        Launching Your Collection on Vefi&apos;s NFT Launchpad
      </h2>
      <article className="prose md:prose-xl prose-zinc font-outfit font-[700]">
        We are looking to onboard unique, quality projects to drop their collections via the Vefi NFT Launchpad. Projects launched with us get to be
        classified as verified and would attain the privilege of front page display. It is important to note that profits gained from launch is split
        on a 7:3 ratio with the collection owner getting 70% of the profit and 30% coming to the Vefi Ecosytem (part of which goes to the provision of
        liquidity on our DEX). Re-applying: Should you wish to strengthen your application with supplementary materials (project updates, more details
        on your collection and community, etc), we welcome you to re-apply. For creators who are re-applying for Launchpad, please fill in the first
        field “Project Name” as [RE-APPLY] and the name of your project (for example: “[RE-APPLY] Crescent Wolves”].
      </article>
      <button className="border-[#fff] border rounded-[4px] px-8 py-1 flex justify-center items-center" onClick={() => setActiveRoute(Route.FORM)}>
        <span className="text-[#fff] font-[500] text-[16px] font-outfit">Get Started</span>
      </button>
    </div>
  );

  const Form = () => (
    <div className="flex flex-col justify-start items-center gap-6 w-full px-3">
      <h2 className="font-monumentExtended font-[800] text-[#fff] text-center md:text-justify">Submit Collection For Launch</h2>
      <form className="flex justify-center flex-col items-start font-outfit text-white gap-3 w-full md:w-1/4 overflow-auto">
        <div className="flex justify-center items-start flex-col w-full gap-1">
          <label className="font-[700]">Project Name*</label>
          <input type="text" className="border-b border-[#fff] outline-0 bg-transparent w-full"></input>
        </div>
        <div className="flex justify-center items-start flex-col w-full gap-1">
          <label className="font-[700]">Collection Symbol*</label>
          <input type="text" className="border-b border-[#fff] outline-0 bg-transparent w-full"></input>
        </div>
        <div className="flex justify-center items-start flex-col w-full gap-1">
          <label className="font-[700]">Owner&apos;s Address*</label>
          <input type="text" className="border-b border-[#fff] outline-0 bg-transparent w-full"></input>
        </div>
        <div className="flex justify-center items-start flex-col w-full gap-1">
          <label className="font-[700]">Maximum Supply*</label>
          <input type="number" className="border-b border-[#fff] outline-0 bg-transparent w-full"></input>
        </div>
        <div className="flex justify-center items-start flex-col w-full gap-1">
          <label className="font-[700]">Mint Price*</label>
          <input type="number" className="border-b border-[#fff] outline-0 bg-transparent w-full"></input>
        </div>
      </form>
    </div>
  );
  return (
    <div className="flex justify-center items-center">
      {activeRoute === Route.INTRO && <Intro />} {activeRoute === Route.FORM && <Form />}
    </div>
  );
}
