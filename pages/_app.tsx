import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <section className="flex flex-col relative min-h-screen dark:bg-slate-900">
      <NavBar />
      <section className="sm:max-w-xl md:max-w-3xl lg:max-w-5xl flex-grow mx-auto p-4">
        <Component {...pageProps} />
      </section>
      <Footer />
    </section>
  );
}

export default MyApp;
