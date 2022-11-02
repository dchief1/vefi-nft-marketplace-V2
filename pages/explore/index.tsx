import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { FiRefreshCw, FiSearch } from 'react-icons/fi';
import NftList from '../../components/Section/NftList';

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

enum Route {
  NFT,
  COLLECTION,
  USER
}

export default function Explore() {
  const [selected, setSelected] = useState(people[3]);
  const [activeRoute, setActiveRoute] = useState<Route>(Route.NFT);
  return (
    <>
      <div className="container lg mx-auto">
        {/* toggle control */}
        <div className="mb-10 pb-5 border-b-[1px] border-gray-600">
          <div className="flex gap-6 text-[18px] text-[#fff] font-monumentExtended tracking-wider ">
            <span className={`cursor-pointer ${activeRoute === Route.NFT ? 'text-[#ffe600]' : ''}`} onClick={() => setActiveRoute(Route.NFT)}>
              NFTS
            </span>
            <span
              className={`cursor-pointer ${activeRoute === Route.COLLECTION ? 'text-[#ffe600]' : ''}`}
              onClick={() => setActiveRoute(Route.COLLECTION)}
            >
              Collections
            </span>
            <span className={`cursor-pointer ${activeRoute === Route.USER ? 'text-[#ffe600]' : ''}`} onClick={() => setActiveRoute(Route.USER)}>
              Users
            </span>
          </div>
        </div>
        {/* Content Top */}
        <div className="flex justify-start items-center w-full gap-5">
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="relative mt-1 w-3/12">
                  <Listbox.Button className="relative  cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full sm:text-sm">
                    <span className="flex items-center">
                      <img src={selected.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                      <span className="ml-3 block truncate">{selected.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9')
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <img src={person.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>{person.name}</span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          <button className="bg-[#7d7d7d] text-white font-bold p-3 flex items-center rounded-md">
            <FiRefreshCw />
          </button>
          <div className="bg-[#7d7d7d]  w-full flex items-center rounded-[5px] mr-2 text-white">
            <span className="text-white p-3">
              <FiSearch />
            </span>
            <input
              className="bg-transparent w-full text-white text-sm font-medium p-2 outline-none"
              type="search"
              name=""
              id=""
              placeholder="Search by NFTs"
            />
          </div>
        </div>

        {/* Contents */}
        <div className="w-full flex justify-start h-auto my-10 gap-10 flex-wrap ">
          <div className="w-full grid grid-cols-4 gap-4">
            {/* */}
            {activeRoute === Route.NFT && <NftList />}
            {/* */}
          </div>
        </div>
      </div>
    </>
  );
}
