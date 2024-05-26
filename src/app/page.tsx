import { NextUIProvider } from "@nextui-org/react";

import Landing            from "@container/landing/Landing";
import Feature            from "@container/feature/Feature";
import Footer             from "@container/footer/Footer";

export default function Page() {
    return (
        <NextUIProvider>
            <div className="flex h-screen flex-col justify-center items-center">
                <Landing />
                <Feature />
                <Footer />
            </div>
        </NextUIProvider>
    );
}
