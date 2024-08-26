import { NextUIProvider } from "@nextui-org/system";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Haruhime Holdings | Software Consulting Firm',
    description: 'Discover Haruhime Holdings, a private software consulting firm operated by a team of students, offering expertise in full-stack development, software solutions, and more.',
    keywords: 'Haruhime Holdings, Software Consulting, Full-Stack Development, Web Development, Backend, Frontend, Student Team',
    openGraph: {
        title: 'Haruhime Holdings | Software Consulting Firm',
        description: 'Explore Haruhime Holdings, a student-led software consulting firm specializing in full-stack development and various software solutions.',
        url: 'https://haruhime.holdings',
        siteName: 'Haruhime Holdings',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@HaruHoldings',
        title: 'Haruhime Holdings | Software Consulting Firm',
        description: 'Discover Haruhime Holdings, a student-led software consulting firm specializing in full-stack development and various software solutions.',
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Discover Haruhime Holdings, a private software consulting firm operated by a team of students, offering expertise in full-stack development, software solutions, and more." />
            <meta name="keywords" content="Haruhime Holdings, Software Consulting, Full-Stack Development, Web Development, Backend, Frontend, Student Team" />
            <meta name="author" content="Haruhime Holdings" />

            {/* Open Graph */}
            <meta property="og:title" content="Haruhime Holdings | Software Consulting Firm" />
            <meta property="og:description" content="Explore Haruhime Holdings, a student-led software consulting firm specializing in full-stack development and various software solutions." />
            <meta property="og:url" content="https://haruhime.holdings" />
            <meta property="og:site_name" content="Haruhime Holdings" />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@HaruHoldings" />
            <meta name="twitter:title" content="Haruhime Holdings | Software Consulting Firm" />
            <meta name="twitter:description" content="Discover Haruhime Holdings, a student-led software consulting firm specializing in full-stack development and various software solutions." />

            <meta name="theme-color" content="#121212" />

            <link rel="canonical" href="https://haruhime.holdings" />
            <link rel="manifest" href="/manifest.json" />

            <link
                rel="preload"
                href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
                as="style"
            />
            <noscript>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" />
            </noscript>
        </head>
        <body className={`${inter.className} mocha bg-base text-text`}>
        <NextUIProvider>
            <main className="flex-grow">
                {children}
            </main>
        </NextUIProvider>
        </body>
        </html>
    );
}