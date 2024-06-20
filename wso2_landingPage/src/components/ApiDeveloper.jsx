
import { useState,useEffect } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";
import axios from 'axios';
import { BASEURL } from '../config';


const ApiDeveloper = () => {

    const [currentTab, setCurrentTab] = useState("Payments");
    const [dataApiDeveloper, setDataApiDeveloper] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiResponse = await axios.get(`${BASEURL}/api/apis?populate=*`);
                setDataApiDeveloper(apiResponse.data.data);
                console.log(apiResponse.data.data)

                const categoryResponse = await axios.get(`${BASEURL}/api/categories`);
                setDataCategory(categoryResponse.data.data);
                // console.log(apiResponse.data.data)
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
        <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
            <div className="text-center">
                <h2 className="md:text-4xl text-2xl font-semibold text-black mt-14 mb-2">APIs built by developers, for developers</h2>
                <p className="mb-2">Find the product that is right for you</p>
                {/* <div className="flex flex-row items-center justify-center mt-6 sm:mt-0 ">
          <a
            className="text-[#141413] hover:text-indigo-500 "
            href="https://developer.coopbankoromiasc.com/devportal/apis"
          >
            Browse all APIs
          </a>
        </div> */}
                <div className="mt-16  ">
                {dataCategory?.map((category, index) => (
          <button 
            key={index}
            onClick={() => setCurrentTab(category.attributes.category)}
            className={` text-black md:text-2xl 
          ${
            currentTab === category.attributes.category
              ? "px-5 py-[5px] rounded-[50px] bg-[#CF4500] text-white text-2xl"
              : "px-5 py-[5px] text-[#777470] text-2xl"
          }`}
          >
            {category.attributes.category}
          </button>
        ))}


                </div>
             
            </div>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.4}}
                className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 mt-20 md:w-11/12 mx-auto"
            >
                {
                     dataApiDeveloper
                        .filter(
                          (api) =>
                            api.attributes.category.data.attributes.category === currentTab
                        )
                        .map((api ,index) => (

                        <div key={index} className="border shadow-2xl hover:-translate-y-4 transition-all duration-300 cursor-pointer py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                            <div>
                            <img src={BASEURL + api.attributes.image.data.attributes.url} alt={api.attributes.title} className="image-size"/>
                                <h5 className="text-2xl font-semibold text-primary px-5 text-center">{api.attributes.title}</h5>
                            </div>
                            <p className="text-tartiary text-center mp-5">{api.attributes.description}</p>
                            <div className="w-full mx-auto mt-8 flex item-center justify-center">
                                <button className="btnPrimary rounded-md px-5 py-2">Lean More</button>
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </div>
    );
};

export default ApiDeveloper;
