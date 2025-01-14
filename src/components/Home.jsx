import React from 'react'
import homePic from '../assets/p.png'
// bg-[#FAFDFF]
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center
     justify-between
      
       bg-[#F0F8FF]
      text-black p-8 md:p-16 h-[80vh]">
    {/* Left Section */}
    <div className="md:w-5/12">
      <h1 className="text-4xl md:text-6xl font-semibold mb-6 ">
        IT Solutions <br /> that transform <br /> your business
      </h1>
      <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, qui possimus? Dolores recusandae optio expedita dolore nam vel reprehenderit ullam aliquid maxime eveniet voluptatem maiores minus commodi itaque, numquam exercitationem perferendis. Aperiam ex quasi eum esse debitis incidunt officia. Commodi facere harum autem molestias magnam iusto delectus cupiditate. Animi, obcaecati.</p>
      <button className="mt-4 px-6 py-3 bg-transparent border bg-green-500 rounded-full text-white hover:bg-teal-400 hover:text-white transition duration-300">
        Learn more
      </button>
    </div>

    {/* Right Section */}
    {/* drop-shadow-xl */}
    <div className="md:w-1/2 mt-8  md:mt-0 flex justify-center  ">
      <img
        src={homePic}
        alt="Hands on Laptop"
        className=" h-[35rem] w-[35rem] ml-35 rounded-lg"
      />
    </div>
  </div>
  )
}

export default Home