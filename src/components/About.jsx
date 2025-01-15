// import React from "react";
// import aboutPic from '../assets/k3.jpg'

// const About = () => {
//   return (
//     <>
//     <div className="flex flex-col md:flex-row items-center  justify-between bg-[#0a2540] text-white md:p-16 ">
//       {/* Left Section */}
//       <div className="md:w-1/2 flex justify-center">
//         <img
//           src={aboutPic} // Replace with actual image URL
//           alt="Elephant Illustration"
//           className="  h-[30rem] w-[30rem] mr-36 md:mr-0"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="md:w-1/2 mt-4 md:mt-0 text-center md:text-left">
//         <h2 className="text-4xl font-semibold mb-4 text-orange-600">About  <span className="">Us</span></h2>
//         <p className="text-lg leading-relaxed text-justify">
//           Write a paragraph that talks about your company here. You can talk
//           about your company's background, history, mission, vision, or
//           philosophy. Anything that will introduce your brand's persona to your
//           clients. This will help build a connection between you and them, that
//           hopefully leepudiandae! Voluptate repellendus natus obcaecati delectus! Quod omnis libero nemo? Vero quae minima asperiores? Repellat ipsa labore repellendus sed libero 
//         </p>
//       </div>
//     </div>
    
//     </>
//   );
// };

// export default About;


import React from "react";
import aboutPic from '../assets/k3.jpg';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#0a2540] text-white p-16 ">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex justify-center px-10 py-10">
        <img
          src={aboutPic} 
          alt="Elephant Illustration"
          className="h-64 w-64 sm:h-80 sm:w-80 md:h-[30rem] md:w-[30rem] rounded-lg object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 text-center md:text-left px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-orange-600">
          About <span className="text-white">Us</span>
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-justify">
          Write a paragraph that talks about your company here. You can talk about your company's background, history, mission, vision, or philosophy. Anything that will introduce your brand's persona to your clients. This will help build a connection between you and them, that hopefully leaves a lasting impression. Showcase your unique qualities and what sets your business apart in the market. Whether it's your dedication, innovative approaches, or values, make it stand out here.
        </p>
      </div>
    </div>
  );
};

export default About;
