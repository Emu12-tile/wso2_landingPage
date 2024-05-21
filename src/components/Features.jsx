
// import {motion} from 'framer-motion'
// import { fadeIn } from "../variants"
// const Features=()=> {
//   return (
//     <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto  " id="features">
//         <div className="flex flex-col lg:flex-row justify-between items-start gap-10"> 
//             <motion.div
//              variants={fadeIn("right",0.2)}
//              initial='hidden'
//              whileInView='show'
//              viewport={{once:false,amount:0.7}}

//              className="lg:w-1/3">
//                 <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">APIs built by developers, for developers</h3>
//                 <p className="text-base text-tartiary">A simple paragraph is comprised of three major components, the first sentence, which is often a declaration sentence, is called the "topic sentence"</p>
//             </motion.div>
// {/* featured cards */}
//             <motion.div  
//              variants={fadeIn("up",0.3)}
//              initial='hidden'
//              whileInView='show'
//              viewport={{once:false,amount:0.7}}

//             className="w-full lg:w-2/3">
//                 <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 items-start md:gap-12 gap-8">
//                 <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-4 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer ">
//                     <div>
//                         <img src={featureImg} alt="" />
//                         <h5 className="text-2xl font-semibold text-primary px-5 text-center">Convenient study schedule</h5>
//                     </div> 
//                 </div>
//                 <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer  ">
//                     <div>
//                         <img src={featureImg} alt="" />
//                         <h5 className="text-2xl font-semibold text-primary px-5 text-center">Convenient study schedule lor</h5>
//                     </div> 
//                 </div>
//                 {/* <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer ">
//                     <div>
//                         <img src={featureImg} alt="" />
//                         <h5 className="text-2xl font-semibold text-primary px-5 text-center">Convenient study schedule</h5>
//                     </div> 
//                 </div> */}
//                 </div>
//             </motion.div>
//         </div>
//     </div>
//   )
// }
// export default Features;
import { useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";
import payment1 from '../assets/payment1.png';
import payment2 from '../assets/payment2.png';
import security1 from '../assets/security3.jpg';
import security2 from '../assets/security2.png';
import data1 from '../assets/data1.png';
import data2 from '../assets/data2.png';

const cardData = [
    {
        payments: [
            {
                img: payment1,
                title: "Payment Gateway API",
                description: "Facilitates online payment processing for e-commerce transactions, allowing merchants to securely accept payments through various channels, including debit cards and digital wallets.",
                link: "Learn more"
            },
            {
                img: payment2,
                title: "Bill Payments",
                description: "Effortlessly integrate Bill Payment APIs to empower users in settling utility bills such as water and electricity, providing a seamless and secure digital transaction experience.",
                link: "Learn more"
            }
        ],
        security: [
            {
                img: security1,
                title: "Secure API Credentials Management",
                description: "Provides advanced security features to protect sensitive data and transactions, ensuring robust protection against threats.",
                link: "Learn more"
            },
            {
                img: security2,
                title: "Fortified API Authentication",
                description: "Provides advanced security features to protect sensitive data and transactions, ensuring robust protection against threats.",
                link: "Learn more"
            }
        ],
        data: [
            {
                img: data1,
                title: "Subscribe & Transform with API Insights",
                description: "Enables efficient data management and retrieval, supporting various data operations to enhance application performance.",
                link: "Learn more"
            },
            {
                img: data2,
                title: "Tailored Financial Data Subscriptions",
                description: "Enables efficient data management and retrieval, supporting various data operations to enhance application performance.",
                link: "Learn more"
            }
        ],
    }
];

const Features = () => {
    const [selectedCategory, setSelectedCategory] = useState('payments');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const selectedData = cardData[0][selectedCategory];

    return (
        <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-semibold text-black mt-14 mb-2">APIs built by developers, for developers</h2>
                <p>Find the product that is right for you</p>
                <div className="mt-16">
                    <button onClick={() => handleCategoryChange('payments')} className="mr-8 text-2xl font-semibold ">Payments</button>
                    <button onClick={() => handleCategoryChange('security')} className="ml-8 text-2xl font-semibold">Security</button>
                    <button onClick={() => handleCategoryChange('data')} className="ml-8 text-2xl font-semibold">Data and Service</button>
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
                    selectedData.map((item, index) => (
                        <div key={index} className="border shadow-2xl hover:-translate-y-4 transition-all duration-300 cursor-pointer py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                            <div>
                                <img src={item.img} alt={item.title} className="image-size"/>
                                <h5 className="text-2xl font-semibold text-primary px-5 text-center">{item.title}</h5>
                            </div>
                            <p className="text-tartiary text-center mp-5">{item.description}</p>
                            <div className="w-full mx-auto mt-8 flex item-center justify-center">
                                <button className="btnPrimary">{item.link}</button>
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </div>
    );
};

export default Features;