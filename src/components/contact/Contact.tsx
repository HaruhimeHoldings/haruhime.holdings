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
          <p className="text-center my-8 text-zinc-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellendus maxime itaque dolore id accusamus adipisci consequatur, voluptas sequi non omnis voluptatum. Consectetur quod ullam nostrum culpa magni recusandae amet.
          </p>
        </Reveal>
        <Reveal width="w-full">
          <Link href="mailto:bob.ross@notreal.com">
            <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-orange-300 transition-colors">
              <AiFillMail />
              <span>lorem@loremipsum.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
