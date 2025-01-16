// pages/_app.tsx
import '../styles/global.css';
import type { AppProps } from 'next/app';
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Component {...pageProps} />
            <Footer/>
        </div>
    )
}

export default MyApp;