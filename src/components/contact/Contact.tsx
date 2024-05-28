import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-xl mx-auto bg-zinc-800 px-8 py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center font-black">
            Contact<span className="text-orange-500">.</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <Link href="mailto:hello@haruhime.holdings">
            <div
                className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-orange-300 transition-colors">
              <AiFillMail/>
              <span>hello@haruhime.holdings</span>
            </div>
            <span className="block text-center text-lg md:text-xl mt-4">
                  <h4 className={'font-bold'}>Haruhime Holdings LLC</h4>
                  1968 S. Coast Hwy, #152,
                  Laguna Beach, CA, USA, 92651
              </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
