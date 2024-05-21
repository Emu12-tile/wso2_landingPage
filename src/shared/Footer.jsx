import logo from '../assets/react.svg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer=()=> {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2x1 mx-auto text-white">
        <div className='my-12 flex flex-col md:flex-row gap-10'>
            <div className='md:w-1/2 space-y-8'>
                <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                    <img src={logo} alt="" className="w-10 inline-block items-center"/><span className='text-white'>xyz</span>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi dolore obcaecati aspernatur incidunt,</p>
                <div>
                    <input type="email" name='email'id='email' placeholder='Your email' className='bg-[#9a7af159] py-2 px-4 rounded focus:outline-none' />
                    <input type="submit" value='Subscribe' className='bg-secondary  rounded-md -ml-2y-2 px-4 rounded focus:outline-none hover:bg-white hover:text-primary duration-300 transition-all' />
                </div>
             </div>
             <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Platform</h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>Overview</a>
                        <a href="/" className='block hover:text-gray-300'>Features</a>
                        <a href="/" className='block hover:text-gray-300'>About</a>
                        <a href="/" className='block hover:text-gray-300'>Pricing</a>
                    </ul>
                    
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Help</h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>How does it works?</a>
                        <a href="/" className='block hover:text-gray-300'>Where ask to questions</a>
                        <a href="/" className='block hover:text-gray-300'>How to play?</a>
                        <a href="/" className='block hover:text-gray-300'>what is needed for this?</a>
                    </ul>
                    
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Contacts</h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>+2519034653</a>
                        <a href="/" className='block hover:text-gray-300'>123 xyz xyz</a>
                        <a href="/" className='block hover:text-gray-300'>emuaniley@gmail</a>
                        <a href="/" className='block hover:text-gray-300'>10000</a>
                    </ul>
                    
                </div>
             </div>
        </div>
        <hr/>
        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8 '> 
            <p>Copyright © 2024 Cooperative Bank of Oromia. All Rights Reserved</p>
            <div className=' flex items-center space-x-5'>
                <FaFacebook className='w-8 cu0rsor-pointer hover:-trans'/>
                <FaInstagram className='w-8 cu0rsor-pointer hover:-trans'/>
                <FaTwitter className='w-8 cu0rsor-pointer hover:-trans'/>
                <FaLinkedin className='w-8 cu0rsor-pointer hover:-trans'/>

            </div>
        </div>
    </div>
  )
}
export default Footer;
