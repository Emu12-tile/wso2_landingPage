import React from 'react';
import tele from '../assets/telecom.png'
import airlines from '../assets/airlines.png'
import dstv from '../assets/dstv.png'
import safaricom from '../assets/safaricom.png'
import { useState, useEffect } from "react";
import axios from 'axios';
import { BASEURL } from '../config';


const partners = [
tele,airlines,dstv,safaricom
];



const Partners = () => {
  const [partner, setPartner] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const partner = await axios.get(`${BASEURL}/api/int-partners?populate=*`);
              setPartner(partner.data.data);
              console.log(partner.data.data)
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
    <div id="partners" className="bg-[#f7f7f7]" >
      <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Integration Partners
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Here are some of our integration partners.
          </p>
        </div>
        <div className='overflow-hidden'>
          <div className="relative w-full">
            <div className="flex animate-loop-scroll">
              {/* {[...partners, ...partners].map((item, index) => ( */}
                  {[...partner,...partner]?.map((usage, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white w-[250px] h-[100px] p-5 flex items-center justify-center"
                >
                  <img
                    src={BASEURL + usage.attributes.partnerLogo.data.attributes.url}
                    alt={`Partner ${index + 1}`}
                    className="h-full w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
