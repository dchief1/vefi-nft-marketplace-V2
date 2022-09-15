import Link from 'next/link'; 
import { FaSearch } from 'react-icons/fa';


export const index = () => {
  return (
    <div className=''>

      <div className='flex justify-between items-center p-6'>

        <img 
            className=''
            src='/Logo.jpeg'
            alt='logo' 
        />

        <div 
          className='
          flex justify-between items-center gap-4
        '>

          <div 
            className='
            text-black bg-[#FFE600] rounded-lg 
          '>

            <Link href='/'>

              <span 
                className='
                grid place-items-center mx-6 my-2 text-md
              '>
                Connect wallet
              </span>

            </Link>

          </div>

          <span className='text-white text-2xl'>
            <FaSearch />
          </span>

        </div>

      </div>

    </div>
  )
}

export default index;

