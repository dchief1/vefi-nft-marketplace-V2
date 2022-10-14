import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`flex justify-center  flex-col min-h-screen w-screen gap-4`}
      style={{ background: 'linear-gradient(0deg, #020117, #020117), linear-gradient(0deg, #121212, #121212), #03015A' }}
    >
      <Header />

      <div className="flex-1 overflow-auto max-w-full mt-[62.05px]">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}
