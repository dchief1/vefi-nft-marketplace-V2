import Link from 'next/link';
import { FaDiscord, FaYoutube } from 'react-icons/fa';

export default function index() {
  return (
    <div
      className="
      bg-[#01003E] w-full text-white 
      py-4 md:py-8 lg:py-12 
    "
    >
      <div
        className="
          flex md:flex-row flex-col lg:flex-row 
          justify-between lg:mx-12 
        "
      >
        {/* Firs Section */}
        <div className="px-8 md:px-8 ">
          <span className="text-lg ">
            Join our community <br /> of NFT enthusiast.
          </span>

          <div
            className="
                  flex gap-4 text-[#5865F2] mb-4 items-center mt-6 
                  cursor-pointer md:text-6xl text-4xl
                "
          >
            <Link href="/">
              <span>
                {' '}
                <FaDiscord />{' '}
              </span>
            </Link>

            {/* <Link href='/'>
                   <h1 className='mr-12  hidden md:block'> Discord </h1>
                 </Link> */}

            <Link href="/">
              <span>
                {' '}
                <FaYoutube />{' '}
              </span>
            </Link>
          </div>
        </div>
        {/* End of First Section */}

        {/* Second Section */}
        <div
          className="
              flex md:px-8 flex-row ml-8 lg:flex-row
            "
        >
          <div className="md:mr-12">
            <span className="mb-2 md:mb-6 text-lg">Marketplace</span>

            <ul
              className="
                    text-sm pt-2 text-white text-opacity-70
                  "
            >
              <li>
                <Link href="/">Launchpad</Link>
              </li>

              <li>
                <Link href="/">Knowledge base</Link>
              </li>

              <li>
                <Link href="/">Staking</Link>
              </li>
            </ul>
          </div>

          <div className=" mx-12">
            <span className="mb-2 md:mb-6 text-lg">Links</span>

            <ul
              className="
                    text-sm pt-2 text-white text-opacity-70
                  "
            >
              <li>
                <Link href="/">Become a partner</Link>
              </li>

              <li>
                <Link href="/">Alt vef</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* End of Second Section */}
      </div>

      {/* Last Section */}
      <div
        className="
          border-t border-white border-opacity-25 mt-8
        "
      >
        <p
          className="
                pt-8 flex items-center justify-center gap-2 
                text-white text-opacity-70
              "
        >
          <span className="font-bold"> VEFI NFT marketplace</span>
          is an independent product of the
          <span className="font-bold">VEFI ecosystem</span>
        </p>
      </div>
      {/* End of Last Section */}
    </div>
  );
}
