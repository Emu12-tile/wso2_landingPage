import {useState} from 'react'
import logo from '../assets/logo.svg'
import { MdLanguage } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";
import {Link} from 'react-scroll'

 

const Navbar=()=> {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems=[
        {link:"Overview",path:"home"},
        {link:"Feature",path:"features"},
        {link:"About",path:"about"},
        {link:"Pricing",path:"pricing"},
    ]
  return (
    <>
    <nav className='  bg-white md:px-14 p-4 max-w-screen-3xl mx-auto text-primary fixed top-0 right-0 left-0'>
        <div className='text-xl container  flex justify-between items-center font-medium'>
        <div className='flex space-x-14 items-center'>
            <a href="/" className='text-2xl font-semibold md:flex items-center space-x-3 text-primary'>
                <img src={logo} alt="logo coop"  className='w-10 h-6 inline-block item-center '/>
            <span>xyz</span>
            </a>
             {/* mapping nav items */}
              <ul className=' hidden md:flex space-x-12'>
                {
                    navItems.map(({link,path})=><Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link>)
                }
              </ul>

        </div>
        <div className='space-x-12 hidden md:flex items-center'>
            <a href= "/" className='hidden lg:flex items-center hover:text-secondary'><MdLanguage className='mr-2 ' /><span>Language</span></a>
            <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600' >Sign up</button>
        </div>
        <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none  focus:text-gray-300'>
                {
                    isMenuOpen?(<HiXMark className='w-6 h-6 text-primary'/>):(<MdMenu className='w-6 h-6 text-primary text-xl'/>)
                }
            </button>
        </div>
        </div>
    </nav>
    <div className={`space-y-4 px-5 pt-24 pb-5 bg-secondary ${isMenuOpen? "block fixed top-0 right-0 left-0":"hidden"}`}>
    {
                    navItems.map(({link,path})=><Link key={link} activeClass='active' spy={true} smooth={true} offset={-90} to={path} className='block text-white hover:text-gray-300' onClick={toggleMenu}>{link}</Link>)
                }
    </div>
    </>
    
  )
};
export default Navbar;
