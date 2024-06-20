import aboutImg2 from '../assets/imagebg2.png'
import { motion } from 'framer-motion'
import { fadeIn } from "../variants"
import { useState, useEffect } from "react";
import axios from 'axios';
import { BASEURL } from '../config';

const ApiUse = () => {
    const [dataApiUse, setDataApiUse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiResponse = await axios.get(`${BASEURL}/api/api-uses?populate=*`);
                setDataApiUse(apiResponse.data.data);
                console.log(apiResponse.data.data)
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

    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-6" id="about">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-semibold text-black mt-14 mb-2">Why do we use our API</h2> 
            </div>
            {dataApiUse?.map((usage, index) => (
                <div key={index} className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    {index % 2 === 0 ? (
                        // Even index, render image first, then text
                        <>
                            <motion.div
                                variants={fadeIn("right", 0.2)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: false, amount: 0.7 }}
                                className='md:w-1/2'>
                                <img src={BASEURL + usage.attributes.image.data.attributes.url} alt="" />
                            </motion.div>
                            <motion.div
                                variants={fadeIn("left", 0.2)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: false, amount: 0.7 }}
                                className='md:w-2/3'>
                                <h2 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal'>{usage.attributes.title}<span className='text-secondary'> secure APIs</span></h2>
                                <p>{usage.attributes.description}</p>
                            </motion.div>
                        </>
                    ) : (
                        // Odd index, render text first, then image
                        <>
                            <motion.div
                                variants={fadeIn("left", 0.2)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: false, amount: 0.7 }}
                                className='md:w-2/3'>
                                <h2 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal'>{usage.attributes.title}<span className='text-secondary'> {usage.attributes.subTitle}</span></h2>
                                <p>{usage.attributes.description}</p>
                            </motion.div>
                            <motion.div
                                variants={fadeIn("right", 0.2)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: false, amount: 0.7 }}
                                className='md:w-1/2'>
                                <img src={BASEURL + usage.attributes.image.data.attributes.url} alt="" />
                            </motion.div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ApiUse;
