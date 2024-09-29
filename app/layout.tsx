// layout.tsx (서버 컴포넌트)
import { Inter } from 'next/font/google';
import "./globals.css";
import ClientThemeProvider from './config/material-tailwind-theme';

//import ReactQueryClientProvider from './config/ReactQueryClientProvider';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body className={inter.className}>
          <ClientThemeProvider>{children}</ClientThemeProvider> {/* 클라이언트 컴포넌트 사용 */}
        </body>
      </html>
    
  );
}

