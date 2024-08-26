import { SectionHeader } from "@components/util/SectionHeader";
import Stats             from "@components/Stats";

export const About = () => {
  return (
      <section id="about" className="section-wrapper">
        <SectionHeader title="About" dir="l" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-4">
              <p className="leading-relaxed text-subtext1">
              <span className="bg-peach text-overlay2 py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
                aruhime Holdings is an independently operated software consulting firm led by a small team of skilled students.
              </p>
              <p className="leading-relaxed text-subtext1">
                We specialize in developing web and desktop applications, REST APIs, and custom software solutions tailored to businesses and individuals.
              </p>
              <p className="leading-relaxed text-subtext1">
                Our work often extends beyond development. We provide web hosting, domain registration, DNS management, and other essential services.
              </p>
              <p className="leading-relaxed text-subtext1">
                Much of our work is open-source and can be found across our GitHub organizations.
              </p>
          </div>
          <Stats />
        </div>
      </section>
  );
};

export default About;

// path: src/app/containers/About.tsx