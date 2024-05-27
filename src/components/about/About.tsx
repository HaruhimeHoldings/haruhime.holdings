import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-orange-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! We are a private software development firm.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis maxime nam? Consequatur fugiat ab et totam culpa dolore id minima blanditiis atque hic cumque, voluptates a eaque eos sint.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis maxime nam? Consequatur fugiat ab et totam culpa dolore id minima blanditiis atque hic cumque, voluptates a eaque eos sint.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis maxime nam? Consequatur fugiat ab et totam culpa dolore id minima blanditiis atque hic cumque, voluptates a eaque eos sint.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-orange-300">
                <span>Our links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
