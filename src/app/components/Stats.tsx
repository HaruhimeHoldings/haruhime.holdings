import React,  { useEffect, useState } from "react";

import { AiFillCode, AiFillTool }      from "react-icons/ai";

import { Chip }                        from "./util/Chip";

const STATS_URL = "https://raw.githubusercontent.com/HaruhimeHoldings/.github/main/assets/json/stats.json";

interface StatSectionProps {
    icon    : React.ReactNode;
    title   : string;
    stats   : string[];
    isLoading: boolean;
}

const StatSection: React.FC<StatSectionProps> = ({ icon, title, stats, isLoading }) => {
    const skeletons = new Array(4).fill(""); // Create an array for skeletons

    return (
        <div>
            <h4 className="flex items-center mb-6">
                {icon}
                <span className="font-bold ml-2">{title}</span>
            </h4>
            <div className="flex flex-wrap gap-2 mb-12">
                {isLoading
                    ? skeletons.map((_, index) => (
                        <div key={index} className="w-20 h-6 bg-mantle rounded animate-pulse"></div>
                    ))
                    : stats.map((stat: string) => (
                        <Chip key={stat}>{stat}</Chip>
                    ))}
            </div>
        </div>
    );
};

export const Stats = () => {
    const [stats, setStats] = useState({
        languages : [],
        tools     : [],
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(STATS_URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.text(); // Get the raw response text first
            })
            .then((text) => {
                return JSON.parse(text);
            })
            .then((data) => {
                setStats(data);
                setIsLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error("Error fetching stats:", error);
                setIsLoading(false); // Set loading to false even on error
            });
    }, []);

    return (
        <div className="relative">
            <StatSection icon={<AiFillCode className="text-peach text-2xl" />} title="Languages" stats={stats.languages} isLoading={isLoading} />
            <StatSection icon={<AiFillTool className="text-peach text-2xl" />} title="Tools" stats={stats.tools} isLoading={isLoading} />
        </div>
    );
};

export default Stats;

// path: src/app/components/Stats.tsx
