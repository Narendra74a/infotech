import React from "react";

const About = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center min-h-screen justify-between bg-[#0a2540] text-white p-8 md:p-16 min-h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1698229351531-fb0c055166d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWJvdXR8ZW58MHx8MHx8fDA%3D" // Replace with actual image URL
          alt="Elephant Illustration"
          className="rounded-lg shadow-lg   h-[35rem] w-[30rem] mr-36"
        />
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
        <h2 className="text-4xl font-semibold text-teal-400 mb-4">About</h2>
        <p className="text-lg leading-relaxed text-justify">
          Write a paragraph that talks about your company here. You can talk
          about your company's background, history, mission, vision, or
          philosophy. Anything that will introduce your brand's persona to your
          clients. This will help build a connection between you and them, that
          hopefully leads into a working Lorem ipsum dolor ipsam voluptatum cumque itaque rerum cum non  expedita! Esse, voluptas quo! Delectus rem accusamus nam exercitationem cupiditate, assumenda temporibus quae adipisci illo error velit enim quia architecto tenetur totam id omnis? Praesentium sunt enim dolorum beatae totam ut molestiae autem perferendis quod esse qui recusandae veritatis quia adipisci optio magni, laborum facere error aliquid neque nemo! Delectus amet qui quo consequuntur vel natus ratione, nesciunt eaque? Hic, quae. Quam corrupti dignissimos reiciendis porro? Culpa alias quam facilis, vero sunt cupiditate numquam illum vitae ipsam dolores quae perspiciatis blanditiis doloribus ducimus esse molestiae optio magnam modi, perferendis omnis nam debitis repellat iure fugit. Maxime quod repellendus molestias animi repudiandae! Voluptate repellendus natus obcaecati delectus! Quod omnis libero nemo? Vero quae minima asperiores? Repellat ipsa labore repellendus sed libero 
        </p>
      </div>
    </div>
    
    </>
  );
};

export default About;
