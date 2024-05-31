import { useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";
import payment1 from '../assets/payment1.png';
import payment2 from '../assets/payment2.png';
import security1 from '../assets/security3.jpg';
import security2 from '../assets/security2.png';
import data1 from '../assets/data1.png';
import data2 from '../assets/data2.png';

const cardData = {
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
    ]
};

const Features = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page when category changes
    };

    const selectedData = selectedCategory === 'all'
        ? [...cardData.payments, ...cardData.security, ...cardData.data]
        : cardData[selectedCategory];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = selectedData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(selectedData.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-semibold text-black mt-14 mb-2">APIs built by developers, for developers</h2>
                <p>Find the product that is right for you</p>
                <div className="mt-16">
                    <button onClick={() => handleCategoryChange('all')} className="mr-8 text-2xl font-semibold btnprimary">All</button>
                    <button onClick={() => handleCategoryChange('payments')} className="mr-8 text-2xl font-semibold btnprimary">Payments</button>
                    <button onClick={() => handleCategoryChange('security')} className="mr-8 text-2xl font-semibold btnprimary">Security</button>
                    <button onClick={() => handleCategoryChange('data')} className="mr-8 text-2xl font-semibold btnprimary">Data and Service</button>
                </div>
            </div>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.4 }}
                className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
            >
                {currentItems.map((item, index) => (
                    <div key={index} className="border shadow-2xl hover:-translate-y-4 transition-all duration-300 cursor-pointer py-5 md:px-3 px-4 rounded-lg shadow-3xl">
                        <div>
                            <img src={item.img} alt={item.title} className="image-size" />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center">{item.title}</h5>
                        </div>
                        <p className="text-tartiary text-center mp-5">{item.description}</p>
                        <div className="w-full mx-auto mt-8 flex item-center justify-center">
                            <button className="btnPrimary">{item.link}</button>
                        </div>
                    </div>
                ))}
            </motion.div>
            <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`mx-2 px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Features;
