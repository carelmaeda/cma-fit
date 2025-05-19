import { ReactNode } from 'react';
import './styles/global.scss';
import './styles/variables.scss';


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
      </body>
    </html>
  );
}