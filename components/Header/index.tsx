import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiMoreHorizontal, FiShoppingCart } from 'react-icons/fi';
import { FaRocket, FaPaintBrush } from 'react-icons/fa';
import { AiOutlinePicture } from 'react-icons/ai';
import { MdOutlineInsights } from 'react-icons/md';

export default function Header() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-6 w-full">
        <Link href="/">
          <Image className="rounded-[25px] cursor-pointer" width={95} height={95} src="/logo.svg" alt="logo" />
        </Link>
        <div className="flex justify-between items-center gap-4">
          <button className="bg-[#ffe600] py-1 px-2 rounded-[10px]">
            <span className="text-[#000] font-[700] text-[14px] font-outfit">Connect Wallet</span>
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="p-0">
              <button className="border-[0.5px] border-[#fff] py-1 px-4 rounded-[11px] m-0">
                <span className="text-[#fff] font-[700] text-[19px]">
                  <FiMoreHorizontal />
                </span>
              </button>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 max-w-[286px] bg-[#121212] font-[500] text-white">
              <li className="w-full">
                <Link href="/launchpad">
                  <div className="flex justify-between items-start w-full">
                    <FaRocket />
                    <span className="text-[16px]">Launchpad</span>
                  </div>
                </Link>
              </li>
              <li className="w-full">
                <Link href="/marketplace">
                  <div className="flex justify-between items-start w-full">
                    <FiShoppingCart />
                    <span className="text-[16px]">Marketplace</span>
                  </div>
                </Link>
              </li>
              <li className="w-full">
                <Link href="/creators">
                  <div className="flex justify-between items-start w-full">
                    <FaPaintBrush />
                    <span className="text-[16px]">Creators</span>
                  </div>
                </Link>
              </li>
              <li className="w-full">
                <Link href="/nfts">
                  <div className="flex justify-between items-start w-full">
                    <AiOutlinePicture />
                    <span className="text-[16px]">Artworks</span>
                  </div>
                </Link>
              </li>
              <li className="w-full">
                <Link href="/insights">
                  <div className="flex justify-between items-start w-full">
                    <MdOutlineInsights />
                    <span className="text-[16px]">Insights</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <span className="text-white text-2xl">
            <FiSearch />
          </span>
        </div>
      </div>
    </div>
  );
}
