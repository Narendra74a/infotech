import React from "react";
import { TERipple } from "tw-elements-react";

const Services = () => {
  const cardsData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the description for card 1.",
      image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the description for card 2.",
      image: "https://tecdn.b-cdn.net/img/new/standard/nature/187.jpg",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the description for card 3.",
      image: "https://tecdn.b-cdn.net/img/new/standard/nature/188.jpg",
    },
  ];
  return (
    <>
    <a href="#" class="flex drop-shadow-xl justify-center text-2xl/7 py-10 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Services    
                </a> 
    <div className="grid grid-cols-1 px-24 sm:grid-cols-2 h-[100vh]: lg:grid-cols-3 gap-6">
        
      {cardsData.map((card) => (
   
        <div
          key={card.id}
          className="block rounded-lg bg-[#F0F8FF] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <TERipple>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img className="rounded-t-lg" src={card.image} alt={card.title} />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
          </TERipple>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {card.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {card.description}
            </p>
            <TERipple>
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Button
              </button>
            </TERipple>
          </div>
        </div>
      ))}
    </div> </>
  );
};

export default Services;
