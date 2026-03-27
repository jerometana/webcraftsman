import type {Metadata} from 'next';
import './globals.css'; // Global styles
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Modern Tech Stack Starter',
  description: 'A Next.js project featuring Sanity CMS, Framer Motion, Resend, React Hook Form, and Lenis smooth scrolling.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
