import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { Link }                          from "@nextui-org/link";

export const MyLinks = () => (
    <div className="flex items-center justify-center gap-6">
        <Link
            className="text-overlay2 hover:text-peach transition-colors transform hover:scale-125"
            href="https://www.github.com/HaruhimeHoldings"
            target="_blank"
            rel="nofollow"
        >
            <SiGithub className="w-8 h-8 md:w-10 md:h-10" />
        </Link>
        <Link
            className="text-overlay2 hover:text-peach transition-colors transform hover:scale-125"
            href="https://www.linkedin.com/company/haruhimeholdings"
            target="_blank"
            rel="nofollow"
        >
            <SiLinkedin className="w-8 h-8 md:w-10 md:h-10" />
        </Link>
        <Link
            className="text-overlay2 hover:text-peach transition-colors transform hover:scale-125"
            href="mailto:hello@haruhime.holdings"
            target="_blank"
            rel="nofollow"
        >
            <SiGmail className="w-8 h-8 md:w-10 md:h-10" />
        </Link>
    </div>
);

export default MyLinks;

// path: src/components/MyLinks.tsx