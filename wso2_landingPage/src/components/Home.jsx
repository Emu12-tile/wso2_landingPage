import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BASEURL } from '../config';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'http://localhost:1337' with your Strapi backend URL
        const response = await axios.get(`${BASEURL}/api/homes?populate=*`);
        // console.log(response.data.data)
        setData(response.data.data);
        console.log(response.data.data)
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // console.log(data)
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>
      <div className='relative md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        <div className='h-[700px] w-[700px] bg-[#00ADEF] absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[9]'></div>
        <div className='container pb-8 sm:pb-0'>
          <Slider {...settings}>
            { Array.isArray(data)? data.map(home => (
              <div key={home.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2 '>
                  <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'
                  >
                    <h2 className='mb-5 text-semibold text-secondary text-light uppercase'>{home.attributes.subTitle}</h2>
                    <h1 className='text-4xl mb-5 sm:text-6xl lg:text-6xl font-semibold'>{home.attributes.title}</h1>
                    <p className='text-xl'>{home.attributes.description}</p>
                    <div>
                      <button className='btnPrimary rounded-md px-5 py-2'>Get Started</button>
                    </div>
                  </motion.div>
                  <div className='order-1 sm:order-2'>
                    <motion.div
                      variants={fadeIn('down', 0.2)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: false, amount: 0.7 }}
                      className='relative z-10'
                    >
                      <img
                        src={BASEURL +home.attributes.image.data.attributes.url}
                        alt=''
                        className='w-[400px] h-[400px] sm:h-[500px] sm:w-[500px] sm:scale-105 lg:scale-140 object-contain mx-auto'
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            )):null}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
