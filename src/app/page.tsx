'use client';

import React    from "react";

import Hero     from "@containers/Hero";
import About    from "@containers/About";
import Projects from "@containers/Projects";
import Contact  from "@containers/Contact";

export default function Page() {
    return (
        <main>
            <div className="mx-auto max-w-5xl px-4 md:px-6 space-y-12 pb-16">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </div>
        </main>
    );
}

// path: src/app/page.tsx
