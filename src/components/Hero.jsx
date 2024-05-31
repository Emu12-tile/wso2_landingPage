import React from 'react';
import removed from '../assets/removed.png';
import home1 from '../assets/home1.jpg';
import Slider from 'react-slick'

const ImageList = [
    {
        id: 1,
        img: removed,
        title: "Get your API now!",
        description: "lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus inventore et vero eligendi sint iusto magnam ipsum repudiandae, temporibus eius hi",
        
    },
    {
        id: 2,
        img: home1,
        title: "Get your API now!",
        description: "lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus inventore et vero eligendi sint iusto magnam ipsum repudiandae, temporibus eius hi",
        
    },
]

const Hero = () => {

    var settings ={
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 '>
        {/* bakground patttern */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
    {/* hero section */}
    <div className='container pb-8 sm:pb-0 '>
        <Slider {... settings}>
            {ImageList.map((data)=>(
                <div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* text content section */}
                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left '>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'> {data.title}</h1>
                        <p className='text-sm'>
                            {data.description}
                        </p>
                        <div>
                            <button className='bg-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Get Started</button>
                        </div>
                    </div>
                    {/* image section */}
                    <div>
                        <div>
                            <img src={data.img} alt="" 
                            className='w-[300px] h-[300px] sm:h-[450px] sm:scale-125 object-contain mx-auto'/>
                        </div>
                    </div>
                    <div>
    
                    </div>
                </div>
            </div>
            ))}
        
        </Slider>
     </div>
    </div>
  )
}

export default Hero