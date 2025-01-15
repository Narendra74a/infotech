// import React, { useState } from 'react'


// const Testmonial = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  

//   const slides = [
//     "https://keywordseverywhere.com/ke/img/free/KE_ORANGE_NoBG.png",
//     "https://keywordseverywhere.com/ke/img/free/KE_ORANGE_NoBG.png",
//     "https://keywordseverywhere.com/ke/img/free/KE_ORANGE_NoBG.png",
//     "https://keywordseverywhere.com/ke/img/free/KE_ORANGE_NoBG.png",
//     "https://keywordseverywhere.com/ke/img/free/KE_ORANGE_NoBG.png",
//     "https://keywordseverywhere.com/ke/img/free/KE_ORANGE_NoBG.png",
    
//   ];

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const handleSlideTo = (index) => {
//     setCurrentSlide(index);
//   };
//   return (
//     <div className="relative w-full" data-carousel="slide">
//     {/* Carousel Wrapper */}
//     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute duration-700 ease-in-out w-full h-full ${
//             currentSlide === index ? "block" : "hidden"
//           }`}
//         >
//           <img
//             src={slide}
//             alt={`Slide ${index + 1}`}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//           />
//         </div>
//       ))}
//     </div>

//     {/* Slider Indicators */}
//     <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
//       {slides.map((_, index) => (
//         <button
//           key={index}
//           type="button"
//           className={`w-3 h-3 rounded-full ${
//             currentSlide === index ? "bg-blue-600" : "bg-gray-300"
//           }`}
//           aria-current={currentSlide === index}
//           aria-label={`Slide ${index + 1}`}
//           onClick={() => handleSlideTo(index)}
//         ></button>
//       ))}
//     </div>

//     {/* Slider Controls */}
//     <button
//       type="button"
//       className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//       onClick={handlePrev}
//     >
//       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
//         <svg
//           className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 6 10"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M5 1 1 5l4 4"
//           />
//         </svg>
//         <span className="sr-only">Previous</span>
//       </span>
//     </button>
//     <button
//       type="button"
//       className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//       onClick={handleNext}
//     >
//       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
//         <svg
//           className="w-4 h-4 text-white dark:text-gray-800"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 6 10"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M1 9l4-4-4-4"
//           />
//         </svg>
//         <span className="sr-only">Next</span>
//       </span>
//     </button>
//   </div>

//   )
// }

// export default Testmonial


import React, { useState } from 'react';

const Testmonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    
    {
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFjd9yJuoW_4Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715254791611?e=2147483647&v=beta&t=BesbK6V1o8NEmvNYbrAl5o0roQd4-xpKlOGNs2k8pn4",
      quote:
        "Using Tailwind has significantly improved our development speed and design consistency across projects.",
      name: "John Doe",
      role: "Lead Developer, TechCorp",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D5635AQGdjTMTtcE39Q/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736048660869?e=1737468000&v=beta&t=LUYP_oki3Asv8CfYocxeFsM5ZVeceAuhX2gZhv6IsV8",
      quote:
        "The utility-first approach of Tailwind CSS has completely transformed the way we think about styling in our apps.",
      name: "Jane Smith",
      role: "UI Designer, CreativeHub",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D5635AQGdjTMTtcE39Q/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736048660869?e=1737468000&v=beta&t=LUYP_oki3Asv8CfYocxeFsM5ZVeceAuhX2gZhv6IsV8",
      quote:
        "The utility-first approach of Tailwind CSS has completely transformed the way we think about styling in our apps.",
      name: "Jane Smith",
      role: "UI Designer, CreativeHub",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D5635AQGdjTMTtcE39Q/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736048660869?e=1737468000&v=beta&t=LUYP_oki3Asv8CfYocxeFsM5ZVeceAuhX2gZhv6IsV8",
      quote:
        "The utility-first approach of Tailwind CSS has completely transformed the way we think about styling in our apps.",
      name: "Jane Smith",
      role: "UI Designer, CreativeHub",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSlideTo = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full   px-28  pt-10 drop-shadow-xl" data-carousel="slide">
      {/* Carousel Wrapper */}
      <div className="relative h-80  overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute  duration-700 ease-in-out  w-full h-full ${
              currentSlide === index ? "block" : "hidden"
            }`}
          >
            <figure className="md:flex max-w-full p-10 bg-slate-100 rounded-xl  md:p-0 dark:bg-slate-800 h-full items-center">
              <img
              
                className="w-24 h-24 rounded-full md:w-48 md:h-48 object-cover mx-auto"
                src={slide.image}
                alt={slide.name}
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg text-justify font-medium dark:text-slate-100">
                    {slide.quote}
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">
                    {slide.name}
                  </div>
                  <div className="text-slate-700 dark:text-slate-400">
                    {slide.role}
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSlideTo(index)}
          ></button>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        type="button"
        className="absolute top-0   left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-orange-500 dark:group-hover:bg-gray-800/60">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-orange-500 dark:group-hover:bg-gray-800/60">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Testmonial;
