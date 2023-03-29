import { ICPosliveLogoDark } from '@texas/assets'
import { RootLayout } from '@texas/layouts'
import MainLayout from '@texas/layouts/MainLayout'
import { MuiProvider, ReactQueryProvider } from '@texas/providers'
import { useMainStore } from '@texas/utils/stores'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const { handleLeftRightContent } = useMainStore()

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleLeftRightContent(document)
    }, 1)

    return () => clearInterval(interval)
  })

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
