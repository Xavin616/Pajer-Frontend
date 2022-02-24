import App from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css'
import { Provider } from 'react-redux';
import { store as reduxStore } from '../lib/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const layouts = { "L1": Layout, }

function MyApp({ Component, pageProps }) {
  
  if (Component.layout === "L1"){
  return (
      <Provider store={reduxStore} >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
  return  <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
}

export default MyApp
