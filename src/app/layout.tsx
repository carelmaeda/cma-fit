import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';
import Script from 'next/script';
import { ReactNode } from 'react';


export const metadata = {
  title: 'Justin Lyons',
  description: 'Justin Lyons | 3 Month Body Transformation',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Bootstrap & Popper.js */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.6/umd/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
