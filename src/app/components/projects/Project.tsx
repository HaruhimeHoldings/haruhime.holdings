import React, { useEffect, useRef }        from "react";

import { useAnimation, useInView, motion } from "framer-motion";
import Link                                from "next/link";

import { AiFillGithub, AiOutlineExport }   from "react-icons/ai";

interface Props {
    description  : string;
    projectLink  : string;
    imgSrc       : string;
    tech         : string[];
    title        : string;
    code         : string;
}

export const Project: React.FC<Props> = ({
                                             projectLink,
                                             description,
                                             imgSrc,
                                             title,
                                             code,
                                             tech,
                                         }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.75 }}
        >
            <div
                className="w-full aspect-video bg-mantle cursor-pointer relative rounded-lg overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-crust bg-opacity-50 blur-sm"
                    style={{
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(5px) brightness(0.8)",
                    }}
                />
                <img
                    src={imgSrc}
                    alt={`An image of the ${title} project.`}
                    className="relative z-10 w-[85%] h-[85%] object-contain mx-auto my-auto"
                />
            </div>
            <div className="mt-6">
                <div className="flex items-center gap-2 w-full">
                    <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">
                        {title}
                    </h4>
                    <div className="w-full h-[1px] bg-mantle" />
                    <Link href={code} target="_blank" rel="nofollow">
                        <AiFillGithub className="text-xl text-overlay2 hover:text-peach transition-colors" />
                    </Link>
                    <Link href={projectLink} target="_blank" rel="nofollow">
                        <AiOutlineExport className="text-xl text-overlay2 hover:text-peach transition-colors" />
                    </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-peach my-2">
                    {tech.join(" - ")}
                </div>
                <p className="leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default Project;

// path: src/app/components/projects/Project.tsx