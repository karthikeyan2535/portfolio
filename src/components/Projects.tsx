import { Shield, Users, Globe } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { MdEmail, MdPhone } from 'react-icons/md';
const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "BlockElect",
      description: "Developed BlockElect, a decentralized voting platform leveraging blockchain technology to ensure secure, transparent, and tamper-proof elections. Built with Next.js, Solidity (Hardhat), and IPFS (Pinata) for decentralized frontend, smart contract logic, and storage. Implemented wallet-based authentication, dual voter/candidate registration with document uploads, and admin approval workflows. Designed secure, time-bound voting with real-time vote tallying, one-vote enforcement, and on-chain result transparency. Integrated Web3Modal, responsive dark/light themed UI, and smart contract-driven election operations for full auditability and integrity.",
      technologies: ["NextJs", "Hardhat", "Tailwind CSS", "Web3Modal", "Pinata IPFS"],
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop"
      ],
      sourceLink: "https://github.com/yourusername/blockelect",
      liveLink: "https://blockelect-demo.vercel.app",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600",
      detailedInfo: {
        introduction: "BlockElect is a blockchain-based decentralized voting platform designed to revolutionize elections with transparency, security, and accessibility. Built on the Ethereum blockchain using Solidity smart contracts, it eliminates vote tampering, ensures voter anonymity, and builds public trust through cryptographic verification.",
        gettingStarted: {
          requirements: [
            "MetaMask Wallet (browser extension)",
            "Test tokens from a Polygon faucet",
            "Modern browser (Chrome, Firefox, Safari, Edge)"
          ],
          steps: [
            "Connect MetaMask wallet to the platform",
            "Choose your role: Voter, Candidate, or Observer",
            "Register with necessary documents and information",
            "Wait for admin verification and approval",
            "Participate in elections or monitor voting process"
          ]
        },
        navigation: [
          { section: "Home", description: "View ongoing elections and platform statistics" },
          { section: "Candidates", description: "Browse candidate profiles and manifestos" },
          { section: "Voters", description: "Voter registration and verification status" },
          { section: "About", description: "Platform mission and blockchain technology info" },
          { section: "Resources", description: "Voting policies and documentation" }
        ],
        keyFeatures: [
          {
            title: "Secure & Transparent Voting",
            features: [
              "One wallet = one vote enforcement",
              "End-to-end encryption with blockchain immutability",
              "Instant vote confirmation and anonymous ballots",
              "Real-time vote counting and result verification"
            ]
          },
          {
            title: "Role-Based User Management",
            features: [
              "Separate voter and candidate registration flows",
              "IPFS-secured document uploads for verification",
              "Profile management and approval tracking",
              "Admin dashboard for user verification"
            ]
          },
          {
            title: "Admin Control Panel",
            features: [
              "Approve or reject user registrations",
              "Manage voting windows and election schedules",
              "Declare results automatically via smart contracts",
              "Monitor platform activity and security"
            ]
          },
          {
            title: "Analytics & Verification",
            features: [
              "Live voting results and statistical analysis",
              "Public blockchain verification for all votes",
              "Complete audit trail for transparency",
              "Export election data and reports"
            ]
          },
          {
            title: "User Experience",
            features: [
              "Responsive design for all devices",
              "Light and dark mode themes",
              "Multi-language support",
              "Intuitive voting interface"
            ]
          }
        ],
        techStack: {
          frontend: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "SCSS"],
          blockchain: ["Solidity", "Hardhat", "Ethers.js", "Web3Modal", "MetaMask"],
          storage: ["Ethereum Blockchain", "IPFS (Pinata)", "Local Storage"],
          tools: ["Vercel", "Axios", "React Dropzone", "React Hot Toast", "ESLint"]
        },
        architecture: [
          { 
            component: "Smart Contract Layer", 
            description: "Handles voter registration, candidate management, voting logic, and result tallying with built-in security measures" 
          },
          { 
            component: "Frontend Application", 
            description: "Next.js application providing real-time voting interface, wallet authentication, and responsive user experience" 
          },
          { 
            component: "Decentralized Storage", 
            description: "IPFS for storing candidate documents and media files, with Ethereum blockchain for vote records and election data" 
          },
          { 
            component: "Web3 Integration", 
            description: "Web3Modal for wallet connections, Ethers.js for blockchain interactions, and MetaMask for transaction signing" 
          }
        ]
      }
    },
    {
      title: "IIITA ClubHub",
      description: "Developed IIITA Club Management Platform, a comprehensive web application designed to enhance student engagement and streamline club management at the Indian Institute of Information Technology Allahabad (IIITA). The platform serves as a centralized hub where students can discover clubs, participate in events, and stay connected with campus activities, while providing club organizers with powerful tools to manage their communities effectively.",
      technologies: ["React 18", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
      images: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
      ],
      sourceLink: "https://github.com/yourusername/iiita-clubhub",
      liveLink: "https://iiita-clubhub.vercel.app",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600",
      detailedInfo: {
        introduction: "IIITA ClubHub is a comprehensive web application designed to enhance student engagement and streamline club management at the Indian Institute of Information Technology Allahabad (IIITA). The platform serves as a centralized hub where students can discover clubs, participate in events, and stay connected with campus activities, while providing club organizers with powerful tools to manage their communities effectively.",
        gettingStarted: {
          requirements: [
            "Valid IIITA student email address",
            "Modern web browser with JavaScript enabled",
            "Internet connection for real-time features"
          ],
          steps: [
            "Sign up with your IIITA email address",
            "Verify your email and complete profile setup",
            "Choose your role: Student, Club Organizer, or Admin",
            "Browse clubs and events or create your own",
            "Start managing your club activities and events"
          ]
        },
        navigation: [
          { section: "Dashboard", description: "Personalized dashboard showing joined clubs and upcoming events" },
          { section: "Club Discovery", description: "Browse all available clubs with search and filter functionality" },
          { section: "Event Management", description: "Browse upcoming events and manage registrations" },
          { section: "Notifications", description: "Real-time notifications for club announcements and updates" },
          { section: "Profile", description: "Manage personal information and preferences" }
        ],
        keyFeatures: [
          {
            title: "For Students",
            features: [
              "Personalized dashboard with joined clubs and upcoming events",
              "Club discovery with search and filter by categories (Technical, Cultural, Sports, Academic)",
              "One-click join/leave clubs and follow for updates",
              "Event registration and tracking with detailed information",
              "Real-time notifications for club announcements"
            ]
          },
          {
            title: "For Club Organizers",
            features: [
              "Create and manage clubs with detailed descriptions and images",
              "Member management with roles and engagement tracking",
              "Comprehensive event creation with rules and participant limits",
              "Post announcements and manage club communications",
              "Analytics and insights for club growth and activity"
            ]
          },
          {
            title: "Club Management",
            features: [
              "Create clubs with vision, activities, and member count tracking",
              "Upload club logos and promotional images",
              "Manage club information and ongoing activities",
              "Track member engagement and participation metrics"
            ]
          },
          {
            title: "Event Organization",
            features: [
              "Create events with detailed information, rules, and eligibility",
              "Set participant limits and manage registrations",
              "Track attendance and mark participants as present/absent",
              "Edit or delete events with real-time updates"
            ]
          },
          {
            title: "Communication & Analytics",
            features: [
              "Post announcements to keep members informed",
              "Real-time notifications and updates",
              "Event registration statistics and member engagement tracking",
              "Monitor club growth and activity levels"
            ]
          }
        ],
        techStack: {
          frontend: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Radix UI"],
          backend: ["Supabase", "PostgreSQL", "Row Level Security (RLS)", "Real-time subscriptions", "Authentication system"],
          storage: ["Supabase Storage", "File storage for images", "Image optimization"],
          tools: ["React Router DOM", "React Hook Form", "Zod", "Lucide React", "React Query"]
        },
        architecture: [
          { 
            component: "Frontend Application", 
            description: "React 18 with TypeScript providing modern, type-safe development with hooks and functional components using Vite for fast build and development" 
          },
          { 
            component: "Backend Services", 
            description: "Supabase Backend-as-a-Service providing PostgreSQL database, real-time subscriptions, authentication system, and file storage with Row Level Security" 
          },
          { 
            component: "UI Components", 
            description: "Shadcn/ui high-quality component library with Radix UI primitives, styled with Tailwind CSS utility-first framework for responsive design" 
          },
          { 
            component: "State Management", 
            description: "React Query for efficient server state management, React Hook Form for form handling and validation, and Zod for schema validation" 
          }
        ]
      }
    },
    {
      title: "LogiDapp",
      description: "Built a decentralized logistics DApp on Ethereum using Next.js, Solidity, and ethers.js. Enabled wallet-based shipment creation, tracking, and automated ETH payments via smart contracts. Ensured secure status updates, escrow, and real-time tracking in a responsive UI.",
      technologies: ["NextJs", "Tailwind CSS", "Hardhat", "etherJs", "Web3Modal"],
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
      ],
      sourceLink: "https://github.com/yourusername/logidapp",
      liveLink: null,
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      detailedInfo: {
        introduction: "LogiDapp is a decentralized logistics platform that revolutionizes supply chain management through blockchain technology. It provides transparent, secure, and automated shipment tracking with smart contract-based payments and escrow services, eliminating intermediaries and reducing costs.",
        gettingStarted: {
          requirements: [
            "MetaMask or compatible Web3 wallet",
            "Ethereum testnet tokens (Goerli/Sepolia)",
            "Modern browser with Web3 support"
          ],
          steps: [
            "Connect your Web3 wallet to the platform",
            "Create a shipment with destination and payment details",
            "Fund the smart contract escrow for automatic payments",
            "Track shipment progress in real-time",
            "Confirm delivery to release payment automatically"
          ]
        },
        navigation: [
          { section: "Dashboard", description: "Overview of all shipments and logistics activities" },
          { section: "Create Shipment", description: "Create new shipments with smart contract escrow" },
          { section: "Track Shipments", description: "Real-time tracking of shipment status and location" },
          { section: "Payments", description: "Manage escrow payments and transaction history" },
          { section: "Analytics", description: "Logistics performance metrics and insights" }
        ],
        keyFeatures: [
          {
            title: "Smart Contract Automation",
            features: [
              "Automated payment release upon delivery confirmation",
              "Escrow services with dispute resolution mechanisms",
              "Multi-signature wallet support for enterprise users",
              "Gas-optimized contract interactions"
            ]
          },
          {
            title: "Real-time Tracking",
            features: [
              "Live shipment status updates on blockchain",
              "GPS integration for location tracking",
              "Milestone-based progress tracking",
              "Automated notifications for status changes"
            ]
          },
          {
            title: "Decentralized Identity",
            features: [
              "Wallet-based authentication without passwords",
              "Reputation system for logistics providers",
              "Verified carrier and customer profiles",
              "Decentralized identity management"
            ]
          },
          {
            title: "Payment & Escrow",
            features: [
              "Secure ETH-based payment processing",
              "Automatic escrow release mechanisms",
              "Multi-currency support (ERC-20 tokens)",
              "Low-cost transactions with Layer 2 integration"
            ]
          },
          {
            title: "Supply Chain Transparency",
            features: [
              "Immutable shipment records on blockchain",
              "End-to-end supply chain visibility",
              "Proof of delivery with cryptographic signatures",
              "Audit trail for compliance and verification"
            ]
          }
        ],
        techStack: {
          frontend: ["Next.js 13", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
          blockchain: ["Solidity", "Hardhat", "Ethers.js", "OpenZeppelin", "Chainlink"],
          storage: ["IPFS", "Ethereum", "Local Storage", "IndexedDB"],
          tools: ["Web3Modal", "MetaMask", "Vercel", "GitHub Actions", "ESLint"]
        },
        architecture: [
          { 
            component: "Smart Contract Layer", 
            description: "Solidity contracts handling shipment creation, tracking, payments, and escrow with automated execution logic" 
          },
          { 
            component: "Web3 Frontend", 
            description: "Next.js application with Web3 integration providing seamless blockchain interactions and responsive UI" 
          },
          { 
            component: "Decentralized Storage", 
            description: "IPFS for storing shipment documents and metadata, with Ethereum for critical transaction data" 
          },
          { 
            component: "Oracle Integration", 
            description: "Chainlink oracles for real-world data feeds, GPS tracking, and external API integrations" 
          }
        ]
      }
    }
  ];

  const toggleProjectDetails = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <>
    <section id="projects" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            expandedProject={expandedProject}
            onToggleDetails={toggleProjectDetails}
          />
        ))}
      </div>
      </section>
      {/* Contact Section */}
       <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 hover:bg-gray-800 rounded- text-neutral-300 py-12 border-t border-neutral-700"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-6"
        >
          Contact
        </motion.h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
          <div className="flex items-center gap-2">
            <MdEmail className="text-2xl text-blue-400" />
            <span className="text-sm sm:text-base">
              <span className="font-medium text-blue-300">Email:</span>{' '}
              karthik2532005@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MdPhone className="text-2xl text-green-400" />
            <span className="text-sm sm:text-base">
              <span className="font-medium text-green-300">Phone:</span>{' '}
              +91 8143770079
            </span>
          </div>
        </div>

        <p className="mt-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Pakeer Karthikeyan. All rights reserved.
        </p>
      </div>
    </motion.footer>
    </>
  );
};

export default Projects;