interface ProjectDetailsProps {
  detailedInfo: {
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

const ProjectDetails = ({ detailedInfo }: ProjectDetailsProps) => {
  return (
    <div className="px-8 pb-8 border-t border-gray-700 pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Introduction */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white flex items-center">
            🌟 Introduction
          </h4>
          <p className="text-gray-300 leading-relaxed">
            {detailedInfo.introduction}
          </p>
        </div>

        {/* Getting Started */}
        {detailedInfo.gettingStarted && (
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white flex items-center">
              🚀 Getting Started
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-lg font-semibold text-blue-300 mb-2">Requirements:</h5>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {detailedInfo.gettingStarted.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-blue-300 mb-2">Steps:</h5>
                <ol className="list-decimal list-inside text-gray-300 space-y-1">
                  {detailedInfo.gettingStarted.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        {detailedInfo.navigation && (
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white flex items-center">
              🧭 Navigation
            </h4>
            <div className="space-y-2">
              {detailedInfo.navigation.map((nav, i) => (
                <div key={i} className="flex">
                  <span className="font-semibold text-blue-300 min-w-[100px]">{nav.section}:</span>
                  <span className="text-gray-300">{nav.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {detailedInfo.keyFeatures && (
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white flex items-center">
              🔑 Key Features
            </h4>
            <div className="space-y-4">
              {detailedInfo.keyFeatures.map((feature, i) => (
                <div key={i} className="space-y-2">
                  <h5 className="text-lg font-semibold text-green-300">{feature.title}</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    {feature.features.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {detailedInfo.techStack && (
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white flex items-center">
              🛠️ Tech Stack
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-lg font-semibold text-purple-300 mb-2">Frontend:</h5>
                <div className="flex flex-wrap gap-2">
                  {detailedInfo.techStack.frontend?.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-900/30 rounded text-sm text-purple-200 border border-purple-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-orange-300 mb-2">Blockchain:</h5>
                <div className="flex flex-wrap gap-2">
                  {detailedInfo.techStack.blockchain?.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-orange-900/30 rounded text-sm text-orange-200 border border-orange-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-teal-300 mb-2">Storage:</h5>
                <div className="flex flex-wrap gap-2">
                  {detailedInfo.techStack.storage?.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-teal-900/30 rounded text-sm text-teal-200 border border-teal-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-pink-300 mb-2">Tools:</h5>
                <div className="flex flex-wrap gap-2">
                  {detailedInfo.techStack.tools?.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-pink-900/30 rounded text-sm text-pink-200 border border-pink-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Architecture */}
        {detailedInfo.architecture && (
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white flex items-center">
              🏗️ Architecture Overview
            </h4>
            <div className="space-y-3">
              {detailedInfo.architecture.map((arch, i) => (
                <div key={i} className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                  <h5 className="font-semibold text-yellow-300 mb-1">{arch.component}</h5>
                  <p className="text-gray-300 text-sm">{arch.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;