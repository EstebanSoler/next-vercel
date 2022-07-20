
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from '../node_modules/next/app';

import '../styles/globals.css';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type appPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: appPropsWithLayout) {

  const getLayout = Component.getLayout || ((page: JSX.Element) => page);
 // return <Component {...pageProps} />

 return getLayout(<Component {...pageProps} />);
}

export default MyApp
