import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className={`${router.pathname === '/' ? 'bg-gradiented' : 'bg-[#03015A]'} flex justify-center  flex-col min-h-screen w-screen gap-4`}>
      <Header />

      <div className="flex-1 overflow-auto max-w-full mt-[62.05px]">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}
