
import { ArrowDown } from "lucide-react";

const Introduction = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Pakeer Karthikeyan's Portfolio
          </h1>

        </div>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          I'm a third-year B.Tech student at the Indian Institute of Information Technology, Allahabad, specializing in Information Technology.
Driven by a passion for Data Structures & Algorithms, Competitive Programming, Full Stack Web Development, and Blockchain Technology, I strive to bridge the gap between theory and practical application.
Throughout my academic journey, I’ve developed a solid foundation in Operating Systems, Object-Oriented Programming, Computer Networks, and Database Management Systems, and have applied these concepts to real-world projects.
I have built several projects that showcase my expertise in both web development and blockchain technologies.
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Introduction;
