import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <section className="flex flex-col relative">
      <NavBar />
      <section className="sm:max-w-xl md:max-w-3xl lg:max-w-5xl flex-grow mx-auto p-4">
        <Component {...pageProps} />
      </section>
    </section>
  );
}

export default MyApp;
