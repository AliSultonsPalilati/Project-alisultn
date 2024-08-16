import { Lusitana } from 'next/font/google';
import SideNav from '@/app/ui/dashboard/sidenav';

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}
      <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
      <div className="flex-none w-full md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
      </body>
    </html>
  );
}