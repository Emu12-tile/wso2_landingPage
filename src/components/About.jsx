import aboutImg2 from '../assets/imagebg2.png'
import {motion} from 'framer-motion'
import { fadeIn } from "../variants"
const About=()=> {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-6" id="about">
        <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-semibold text-black mt-14 mb-2">Why do we use our API</h2>
               
               
            </div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <motion.div 
             variants={fadeIn("right",0.2)}
             initial='hidden'
             whileInView='show'
             viewport={{once:false,amount:0.7}}
            className='md:w-1/2'>
                <img src={aboutImg2} alt="" />
            </motion.div>
             <motion.div
              variants={fadeIn("left",0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{once:false,amount:0.7}}
              className='md:w-2/3'>
                <h2 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading normal'>Open banking aligned with <span className='text-secondary'> secure APIs</span></h2>
                <p>Ensuring compliance and seamless data sharing. Our quick integration process enables 
                    fast and efficient connectivity, empowering innovation and enhancing customer experiences.
                    </p>
                    <p>
Our robust security
 measures and clear consent protocols safeguard 
 customer data while fostering trust. By partnering with us, businesses can rapidly deploy new financial solutions, driving growth and competitive advantage.</p>
                
            </motion.div>
        </div>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            <motion.div
             variants={fadeIn("right",0.2)}
             initial='hidden'
             whileInView='show'
             viewport={{once:false,amount:0.7}}
            className='md:w-1/2'>
                <img src={aboutImg2} alt="" />
            </motion.div>

             <motion.div
             variants={fadeIn("left",0.2)}
             initial='hidden'
             whileInView='show'
             viewport={{once:false,amount:0.7}}
             className='md:w-2/3'>
                <h2 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading normal'>RESTful APIs and the use of<span className='text-secondary'>  auth 2.0 framework</span></h2>
                <p>RESTful APIs provide a standardized approach for web services to interact seamlessly, enabling smooth communication between different systems. By leveraging the OAuth 2.0 framework, 
                    we offer robust authorization mechanisms 
                    that protect sensitive customer data. </p>
                    <p>This combination of RESTful APIs and OAuth 2.0 ensures a 
                        secure, scalable, and user-friendly platform for financial data sharing and innovation.</p>
                
            </motion.div>
        </div>
    </div>
  )
}
export default About;