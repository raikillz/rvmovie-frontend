import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, FilmIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Movies', href: '/movies' },
    { name: 'About', href: '/about' }
]

function Navbar() {
    const location = useLocation();

    return <>
    <Disclosure as="nav" className="bg-gray-800">
          {({ open }:{open:any}) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="w-full flex items-center justify-between">
                    <div className="flex-shrink-0">
                      <FilmIcon className='h-10 w-10 text-white -rotate-45' />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`${location.pathname===item.href ? 'bg-gray-900 text-white '
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white '}
                                 px-3 py-2 rounded-md text-sm font-medium`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="mt-3 px-2 space-y-1">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                        {item.name}
                        </Link>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </>
}

export default Navbar;