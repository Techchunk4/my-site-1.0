import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify';
import config from '../src/aws-exports'; // adjust the path as needed

Amplify.configure(config);



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
