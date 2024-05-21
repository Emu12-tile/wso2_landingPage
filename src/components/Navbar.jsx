// import {useState} from 'react'
import logo from '../assets/logo.svg'
import '../App.css'
// import { MdLanguage } from "react-icons/md";
// import { MdMenu } from "react-icons/md";
// import { HiXMark } from "react-icons/hi2";
// import {Link} from 'react-scroll'

 

// const Navbar=()=> {
//     const [isMenuOpen,setIsMenuOpen]=useState(false);
//     const toggleMenu=()=>{
//         setIsMenuOpen(!isMenuOpen);
//     }

//     const navItems=[
//         {link:"Overview",path:"home"},
//         {link:"Feature",path:"features"},
//         {link:"About",path:"about"},
//         {link:"Pricing",path:"pricing"},
//     ]
//   return (
//     <>
//     <nav className='  bg-white md:px-14 p-4 max-w-screen-3xl mx-auto text-primary fixed top-0 right-0 left-0'>
//         <div className='text-xl container  flex justify-between items-center font-medium'>
//         <div className='flex space-x-14 items-center'>
//             <a href="/" className='text-2xl font-semibold md:flex items-center space-x-3 text-primary'>
//                 <img src={logo} alt="logo coop"  className='w-10 h-6 inline-block item-center '/>
//             <span>xyz</span>
//             </a>
//              {/* mapping nav items */}
//               <ul className=' hidden md:flex space-x-12'>
//                 {
//                     navItems.map(({link,path})=><Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link>)
//                 }
//               </ul>

//         </div>
//         <div className='space-x-12 hidden md:flex items-center'>
//             <a href= "/" className='hidden lg:flex items-center hover:text-secondary'><MdLanguage className='mr-2 ' /><span>Language</span></a>
//             <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600' >Sign up</button>
//         </div>
//         <div className='md:hidden'>
//             <button onClick={toggleMenu} className='text-white focus:outline-none  focus:text-gray-300'>
//                 {
//                     isMenuOpen?(<HiXMark className='w-6 h-6 text-primary'/>):(<MdMenu className='w-6 h-6 text-primary text-xl'/>)
//                 }
//             </button>
//         </div>
//         </div>
//     </nav>
//     <div className={`space-y-4 px-5 pt-24 pb-5 bg-secondary ${isMenuOpen? "block fixed top-0 right-0 left-0":"hidden"}`}>
//     {
//                     navItems.map(({link,path})=><Link key={link} activeClass='active' spy={true} smooth={true} offset={-90} to={path} className='block text-white hover:text-gray-300' onClick={toggleMenu}>{link}</Link>)
//                 }
//     </div>
//     </>
    
//   )
// };
// export default Navbar;
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'APIS', href: '#', current: true },
  { name: 'Applications', href: '#', current: false },
  { name: 'Partners', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white  p-4 max-w-screen-3xl mx-auto text-primary fixed top-0 right-0 left-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="COOP Company"
                  />
                  <span className='ml-2 text-bold text-2xl text-secondary'>Developers</span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className=' text-black text-black hover:bg-primary-line
                           px-3 py-2  font-semibold'
                    
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
             <button className='btnPrimary' >Login/Sign up</button>


                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
               
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-primary">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
