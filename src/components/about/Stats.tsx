'use client';

import { AiFillApi, AiFillCloud, AiFillCode, AiFillDatabase, AiFillTool } from "react-icons/ai";
import React, {useEffect, useState}                                       from 'react';

import { Chip }                                                           from "../util/Chip";
import Reveal                                                             from "../util/Reveal";

const STATS_URL = "https://raw.githubusercontent.com/HaruhimeHoldings/assets/main/json/stats.json";

interface StatSectionProps {
  icon    : React.ReactNode;
  title   : string;
  stats   : string[];
}

const StatSection: React.FC<StatSectionProps> = ({ icon, title, stats }) => {
  return (
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            {icon}
            <span className="font-bold ml-2">{title}</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            {stats.map((stat: string) => (
                <Chip key={stat}>{stat}</Chip>
            ))}
          </div>
        </div>
      </Reveal>
  );
};

export const Stats = () => {
  const [stats, setStats] = useState({
    programmingLanguages   : [],
    frameworks             : [],
    databases              : [],
    tools                  : [],
    cloudServices          : [],
  });

  useEffect(() => {
    fetch(STATS_URL)
        .then((res) => res.json())
        .then((data) => {
          setStats(data);
        })
        .catch((error) => console.error("Error fetching stats:", error));
  }, []);

  return (
      <div className="relative">
        <StatSection icon={<AiFillCode     className="text-orange-500 text-2xl" />} title="Programming Languages" stats={stats.programmingLanguages} />
        <StatSection icon={<AiFillApi      className="text-orange-500 text-2xl" />} title="Web Frameworks"        stats={stats.frameworks} />
        <StatSection icon={<AiFillDatabase className="text-orange-500 text-2xl" />} title="Database Engines"      stats={stats.databases} />
        <StatSection icon={<AiFillTool     className="text-orange-500 text-2xl" />} title="Tools"                 stats={stats.tools} />
        <StatSection icon={<AiFillCloud    className="text-orange-500 text-2xl" />} title="Cloud Services"        stats={stats.cloudServices} />
      </div>
  );
};
