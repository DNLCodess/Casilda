import Image from "next/image";
import interior1 from "../public/assets/pexels-jvdm-1457842.jpg"; // Correct path to image
import agentImage from "../public/assets/agents.jpg"; // Correct path to image

const agents = [
  {
    name: "Vincent Fuller",
    position: "Real Estate Agent, Country House Real Estate",
    image: agentImage,
  },
  {
    name: "Brittany Watkins",
    position: "Company Agent, All American Real Estate",
    image: agentImage,
  },
  {
    name: "Michelle Ramirez",
    position: "Company Agent, Modern House Real Estate",
    image: agentImage,
  },
];

export default function MeetOurAgents() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Meet Our Agents
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our experienced real estate agents are ready to assist you.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                className="w-32 h-32 mx-auto rounded-full"
                src={agent.image}
                alt={agent.name}
                width={128} // Adjust width and height as needed
                height={128}
              />
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                {agent.name}
              </h3>
              <p className="mt-2 text-base text-gray-500">{agent.position}</p>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="mt-6 inline-block text-blue-500 font-medium hover:underline"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
