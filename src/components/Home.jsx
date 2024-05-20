import banner from '../assets/black.png'
import Banner from '../shared/Banner';
import image1 from'../assets/about.jpg'
import image2 from'../assets/removed.png'
import image3 from'../assets/home.jpg'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const ImageList=[
  {
    id:1,
    img:image1,
    title:"Partnership",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus inventore et vero eligendi sint iusto magnam ipsum repudiandae, temporibus eius hi",

  },
  {
    id:2,
    img:image2,
    title:"Partnership",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus inventore et vero eligendi sint iusto magnam ipsum repudiandae, temporibus eius hi",

  },
  {
    id:3,
    img:image3,
    title:"Partnership",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus inventore et vero eligendi sint iusto magnam ipsum repudiandae, temporibus eius hi",

  },
]
const Home=()=> {
  return (
    // <div classNameName="md:px-12 p-4 max-w-screen-2xl mx-auto  mt-24" id='home'>
    //     <Banner banner={banner} heading="Develop your skills without diligence" subheading="Lorem, ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit.  fuga? " btn1={"Get Started"} btn2={"Discount"}/>
        
    // </div>
   
<>
<div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 '>
  <div className='h-[700px] w-[700px] bg-[#00ADEF] absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
  <div className='container pb-8 sm:pb-0'>
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2' >
      <motion.div 
                 variants={fadeIn("up",0.2)}
                 initial='hidden'
                 whileInView={"show"}
                 viewport={{once:false,amount:0.7}} className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Lorem iooosdcndjvnv</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eveniet unde Autem perspiciatis numquam soluta veniam!</p>
          <div>
          <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Get Started</button>
        </div>
        </motion.div>
        <div className='order-1 sm:order-2'>
        <motion.div 
                 variants={fadeIn("down",0.2)}
                 initial='hidden'
                 whileInView='show'
                 viewport={{once:false,amount:0.7}}>
      <img src={image2} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'/>
      </motion.div>
    </div>
        
      </div>
    </div>
    {/* image */}
    
  </div>
</div>
</>

  )
}
export default Home;
