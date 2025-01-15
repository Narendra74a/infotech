import React from 'react'
import global from '../assets/gl.png'
import h from '../assets/u.png'

const WhychooseUs = () => {
  return (
 
    <section className="bg-darkBlue text-lightBlue  py-16">
      <div className="max-w-6xl mx-auto text-center ">
        <h2 className="text-3xl font-semibold mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-8 bg-lightBlue/10 rounded-lg border-solid border-4 drop-shadow-xl">
          <img className="rounded-t-lg" src={global} alt="" />
            <h3 className="text-lg font-medium mb-4">We are global.</h3>
            <p className="text-sm">
              No matter where you are, we've got you covered.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center p-8 bg-lightBlue/10 rounded-lg border-solid border-4 drop-shadow-xl">
          <img className="rounded-t-lg" src={h} alt="" />
          
            <h3 className="text-lg font-medium mb-4">We value our clients.</h3>
            <p className="text-sm">
              Virtual assistance. Talk to us about any concerns, 24/7.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center p-8 bg-lightBlue/10 rounded-lg border-solid border-4 drop-shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mb-6 text-lightBlue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8V4M12 16v4m4-4h4m-8 0H8m-4 0H4m0-8v4m0-8v4"
              />
            </svg>
            <h3 className="text-lg font-medium mb-4">We use top-rate systems.</h3>
            <p className="text-sm">
              Easy peasy UI. Our interface is simple and easy to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};





export default WhychooseUs