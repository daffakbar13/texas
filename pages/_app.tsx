import { ICPosliveLogoDark } from '@texas/assets'
import { RootLayout } from '@texas/layouts'
import MainLayout from '@texas/layouts/MainLayout'
import { MuiProvider, ReactQueryProvider } from '@texas/providers'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiProvider>
      <ReactQueryProvider>
        <Head>
          <title>POSLIVE</title>
          <meta name="description" content="Powered by Poslive" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={ICPosliveLogoDark.src} />
        </Head>
        <RootLayout>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </RootLayout>
      </ReactQueryProvider>
    </MuiProvider>
  )
}
