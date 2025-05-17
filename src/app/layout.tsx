import { ReactNode } from 'react';
import './styles/global.scss';
import './styles/variables.scss';

import Script from 'next/script';


export const metadata = {
  title: 'Justin Lyons',
  description: 'Justin Lyons | 3 Month Body Transformation',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossOrigin="anonymous"></Script>
      </body>
    </html>
  );
}