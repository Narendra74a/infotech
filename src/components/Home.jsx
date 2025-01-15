// import React from 'react'
// import homePic from '../assets/p.png'
// // bg-[#FAFDFF]
// const Home = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center
//      justify-between
      
//        bg-[#F0F8FF]
//       text-black p-8  h-[80vh]">
//     {/* Left Section */}
//     <div className="md:w-5/12">
//       <h1 className="text-4xl md:text-6xl font-semibold mb-6 ">
//         IT Solutions <br /> that transform <br /> your business
//       </h1>
//       <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, qui possimus? Dolores recusandae optio expedita dolore nam vel reprehenderit ullam aliquid maxime eveniet voluptatem maiores minus commodi itaque, numquam exercitationem perferendis. Aperiam ex quasi eum esse debitis incidunt officia. Commodi facere harum autem molestias magnam iusto delectus cupiditate. Animi, obcaecati.</p>
//       <button className="mt-4 px-6 py-3 bg-transparent border bg-slate-950 rounded-full text-white hover:bg-teal-400 hover:text-white transition duration-300">
//         Learn more
//       </button>
//     </div>

//     {/* Right Section */}
//     {/* drop-shadow-xl */}
//     <div className="md:w-1/2   flex justify-center  ">
//       <img
//         src={homePic}
//         alt="Hands on Laptop"
//         className=" h-[35rem] w-[35rem]   rounded-lg"
//       />
//     </div>
//   </div>
//   )
// }

// export default Home

import React from 'react';
import homePic from '../assets/p.png';

const Home = () => {
  return (
    <div 
      className="flex flex-col  md:flex-row items-center justify-between xl:px-36 sm:px-2  text-black p-6 md:my-20  h-auto md:h-[80vh] space-y-6 md:space-y-0"
    >
      {/* Left Section */}
      <div className="w-full md:w-5/12 text-center md:text-left md:h-auto ">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-4 md:mb-6">
          IT Solutions <br /> that transform <br /> your business
        </h1>
        <p className="text-sm sm:text-base text-justify mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, qui possimus? Dolores recusandae optio expedita dolore nam vel reprehenderit ullam aliquid maxime eveniet voluptatem maiores minus commodi itaque, numquam exercitationem perferendis. Aperiam ex quasi eum esse debitis incidunt officia. Commodi facere harum autem molestias magnam iusto delectus cupiditate. Animi, obcaecati.
        </p>
        <button 
          className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-teal-400 hover:text-white transition duration-300"
        >
          Learn more
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
        <img
          src={homePic}
          alt="Hands on Laptop"
          className="h-52 w-52 sm:h-72 sm:w-72 md:h-[35rem] md:w-[35rem] rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;
