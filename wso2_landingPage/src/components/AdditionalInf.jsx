import React from 'react'

const AdditionalInf=()=> {
  return (
    <div className="flex flex-col items-center justify-between px-12 py-12  border-t border-gray-200 sm:flex-row bg-gray-100">
    <div className="flex flex-col items-center mb-6 sm:items-start sm:mb-0">
      <h2 className="text-2xl font-semibold text-gray-900">
        Looking for something else?
      </h2>
      <p className="mt-1 text-sm text-gray-600">
        Check out our full product catalog
      </p>
    </div>
    <div className="flex flex-row items-center justify-center mt-6 sm:mt-0">
      <a
        className="text-[#141413] hover:text-secondary"
        href="https://developer.coopbankoromiasc.com/devportal/apis"
      >
        Browse all APIs
      </a>
      <ArrowRightIcon className="w-[15px] h-4 ml-2 text-[#CF4500]" />
    </div>
  </div>
  )
}
function ArrowRightIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    );
  }
  
export default AdditionalInf;