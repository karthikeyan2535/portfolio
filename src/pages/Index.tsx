
import Introduction from "@/components/Introduction";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar/>
        <Introduction />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default Index;
