import { ReactNode } from 'react';
import type { Metadata } from 'next'
import Head from 'next/head';
import './globals.css';

// Metadata for the application
export const metadata: Metadata = {
  title: 'BrixoApp',
  description: 'Bridge all blockchains, protocols and Dex aggregators',
  icons: {
    icon: './favicon.svg',
  },
  openGraph: {
    images: [
      {
        url: './Brixo_fav.webp',
        alt: 'BrixoApp - Bridge all blockchains, protocols, and Dex aggregators',
      },
    ],
  },
};


// Root layout component
const RootLayout: React.FC<{children: ReactNode}> = ({ children }) => {
  return (
    <html>
       <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta property='og:image' content='/Brixo_fav.webp' />
          {/*<meta property='og:title' content='BrixoApp' />
        <meta property='og:image' content='Bridge all blockchains, protocols and Dex aggregators' /> */}
      </Head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
