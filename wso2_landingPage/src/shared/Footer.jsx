import logo from '../assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";



const Footer=()=> {
  return (
    <div className="bg-[#00ADEF] md:px-14 p-4 max-w-screen-2x1 mx-auto text-white ">
        <div className='my-12 flex flex-col md:flex-row gap-10'>
            <div className='md:w-1/2 space-y-8'>
                <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                    <img src={logo} alt="" className="w-10 inline-block items-center"/><span className='text-white'>COOP DEVELOPERS</span>
                </a>
                <p>Create a collaborative tech ecosystem that propels both our ventures to new heights.</p>
                <div>
                    <input type="email" name='email'id='email' placeholder='Your email' className='bg-[#9a7af159] text-white py-2 px-4 rounded-md focus:outline-none' />
                    <input type="submit" value='Subscribe' className='bg-secondary  rounded-md -ml-2y-2 px-4 py-2 rounded focus:outline-none hover:bg-white hover:text-primary duration-300 transition-all' />
                </div>
             </div>
             <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Platform</h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>APIs</a>
                        <a href="/" className='block hover:text-gray-300'>Applications</a>
                        <a href="/" className='block hover:text-gray-300'>Partners</a>
                        {/* <a href="/" className='block hover:text-gray-300'>Pricing</a> */}
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
                        <a href="/" className='block hover:text-gray-300'>Phone: +251115150229</a>
                        <a href="/" className='block hover:text-gray-300'>Fax: +251 11 515 0489</a>
                        <a href="/" className='block hover:text-gray-300'>info@coopbankoromia.com.et</a>
                        <a href="/" className='block hover:text-gray-300'>Swift code: CBORETAA</a>
                    </ul>
                    
                </div>
             </div>
        </div>
        <hr/>
        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8 '> 
            <p>Copyright © 2024 Cooperative Bank of Oromia. All Rights Reserved | Designed by <span className='text-tartiary'> COOP DxValley</span> </p>
            <div className=' flex items-center space-x-5'>
            <a href="https://www.facebook.com/cooperativebankoforomia" target="_blank" rel="noopener noreferrer">
                       <FaFacebook className='w-8 cu0rsor-pointer hover:-trans' />
                         </a>
                <a href="https://www.instagram.com/coop_bank/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='w-8 cu0rsor-pointer hover:-trans'/>
                </a>
                <a href="https://www.youtube.com/c/CoopbankoromiaEthio/" target="_blank" rel="noopener noreferrer">
                <FaYoutube className='w-8 cu0rsor-pointer hover:-trans'/>
                </a>
                <a href="https://x.com/coopbankoromia/" target="_blank" rel="noopener noreferrer">
                <FaTwitter className='w-8 cu0rsor-pointer hover:-trans'/>
                </a>
                <a href="https://www.linkedin.com/company/cooperative-bank-of-oromia/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='w-8 cu0rsor-pointer hover:-trans'/>
                </a>
            </div>
        </div>
    </div>
  )
}
export default Footer;
