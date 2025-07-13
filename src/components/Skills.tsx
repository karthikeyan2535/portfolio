import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiMongodb } from 'react-icons/di';
import { SiSqlite, SiSolidity, SiC, SiCplusplus, SiJavascript, SiTailwindcss, SiIpfs, SiRedhat, SiTypescript, SiWeb3Dotjs } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { DiJava } from 'react-icons/di';

interface TechItem {
  name: string;
  icon: JSX.Element;
  duration: number;
}

const languages: TechItem[] = [
  {
    name: 'C',
    icon: <SiC className="text-7xl text-blue-500" />,
    duration: 1.5,
  },
  {
    name: 'C++',
    icon: <SiCplusplus className="text-7xl text-indigo-600" />,
    duration: 1.5,
  },
  {
    name: 'Javascript',
    icon: <SiJavascript className="text-7xl text-red-600" />,
    duration: 2,
  },
   {
    name: 'Java',
    icon: <DiJava className="text-7xl text-red-600" />,
    duration: 2,
  },
  {
    name: 'Solidity',
    icon: <SiSolidity className="text-7xl text-purple-900" />,
    duration: 1.5,
  },
  {
    name: 'SQL',
    icon: <SiSqlite className="text-7xl text-blue-950" />,
    duration: 2,
  },
];

const skills: TechItem[] = [
  {
    name: 'React',
    icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
    duration: 1.5,
  },
  {
    name: 'Next.js',
    icon: <TbBrandNextjs className="text-7xl text-white rounded-full bg-black" />,
    duration: 2,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-7xl text-green-700" />,
    duration: 2,
  },
  {
    name: 'MongoDB',
    icon: <DiMongodb className="text-7xl text-green-900" />,
    duration: 1.5,
  },
  {
    name: 'Hardhat',
    icon: <SiRedhat className="text-7xl text-yellow-400" />,
    duration: 2,
  },
  
];

const renderTechGroup = (group: TechItem[]) =>
  group.map((tech, index) => (
    <motion.div
      key={index}
      initial={{ y: -10 }}
      animate={{ y: [10, -10] }}
      transition={{
        duration: tech.duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4 w-28"
    >
      {tech.icon}
      <p className="mt-2 text-sm text-center text-neutral-300">{tech.name}</p>
    </motion.div>
  ));

const Techs: React.FC = () => {
  return (
    <div className="border-b pb-24 border-neutral-800">
      <motion.h1
        whileInView={{ scale: 1 }}
        initial={{ scale: 0.3 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      {/* Skills / Frameworks */}
      <h2 className="text-2xl text-center mb-6 text-white">Skills & Frameworks</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        {renderTechGroup(skills)}
      </div>

      {/* Languages */}
      <h2 className="text-2xl text-center mb-6 text-white">Languages</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {renderTechGroup(languages)}
      </div>
    </div>
  );
};

export default Techs;
