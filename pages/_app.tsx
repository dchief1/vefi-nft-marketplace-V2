import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#03015A] flex justify-center items-center flex-col min-h-screen w-screen">
      <Header />

      <div className="flex-1 overflow-auto w-full">
        <Component {...pageProps} />;
      </div>

      <Footer />
    </div>
  );
}
