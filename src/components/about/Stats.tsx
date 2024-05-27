import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillApi, AiFillCloud, AiFillCode, AiFillDatabase, AiFillSmile, AiFillTool } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-orange-500 text-2xl" />
            <span className="font-bold ml-2">Languages</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>NodeJS</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>PHP</Chip>
            <Chip>VLang</Chip>
            <Chip>Python</Chip>
            <Chip>GO</Chip>
            <Chip>Kotlin</Chip>
            <Chip>GO</Chip>
            <Chip>Java</Chip>
            <Chip>C</Chip>
            <Chip>Fastify</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillApi className="text-orange-500 text-2xl" />
            <span className="font-bold ml-2">Frameworks</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>NextJS</Chip>
            <Chip>React</Chip>
            <Chip>Express</Chip>
            <Chip>Flask</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillDatabase className="text-orange-500 text-2xl" />
            <span className="font-bold ml-2">Databases</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>MYSQL</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>MongoDB</Chip>
            <Chip>Digital Ocean</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillTool className="text-orange-500 text-2xl" />
            <span className="font-bold ml-2">Tools</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Github</Chip>
            <Chip>PHPMyAdmin</Chip>
            <Chip>Notion</Chip>
            <Chip>Jetbrains</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCloud className="text-orange-500 text-2xl" />
            <span className="font-bold ml-2">Cloud Services</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>AWS</Chip>
            <Chip>MongoDB</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
