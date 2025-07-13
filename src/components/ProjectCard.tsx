
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import ProjectCarousel from "./ProjectCarousel";
import ProjectDetails from "./ProjectDetails";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  sourceLink: string;
  liveLink: string | null;
  icon: React.ReactNode;
  gradient: string;
  detailedInfo?: {
    introduction: string;
    gettingStarted?: {
      requirements: string[];
      steps: string[];
    };
    navigation?: {
      section: string;
      description: string;
    }[];
    keyFeatures?: {
      title: string;
      features: string[];
    }[];
    techStack?: {
      frontend: string[];
      blockchain: string[];
      storage: string[];
      tools: string[];
    };
    architecture?: {
      component: string;
      description: string;
    }[];
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
  expandedProject: number | null;
  onToggleDetails: (index: number) => void;
}

const ProjectCard = ({ project, index, expandedProject, onToggleDetails }: ProjectCardProps) => {
  return (
    <div 
      className="bg-gray-800 rounded-3xl overflow-hidden hover:bg-gray-750 transition-all duration-500 hover:scale-[1.02] animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Project Image Carousel */}
        <ProjectCarousel images={project.images} title={project.title} />

        {/* Project Details */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className={`p-2 bg-gradient-to-br ${project.gradient} rounded-lg`}>
              {project.icon}
            </div>
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm font-medium text-blue-300 border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex space-x-4 pt-4">
            <a 
              href={project.sourceLink}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
            {project.liveLink && (
              <a 
                href={project.liveLink}
                className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${project.gradient} hover:opacity-90 rounded-lg transition-opacity duration-200`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {/* Expand Details Button */}
          {project.detailedInfo && (
            <button
              onClick={() => onToggleDetails(index)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-sm"
            >
              <span>{expandedProject === index ? 'Hide Details' : 'Show More Details'}</span>
              {expandedProject === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      {/* Detailed Information Section */}
      {project.detailedInfo && expandedProject === index && (
        <ProjectDetails detailedInfo={project.detailedInfo} />
      )}
    </div>
  );
};

export default ProjectCard;
