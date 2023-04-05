import { ICPosliveLogoDark } from '@texas/assets'
import { RootLayout } from '@texas/layouts'
import MainLayout from '@texas/layouts/MainLayout'
import { MuiProvider, ReactQueryProvider } from '@texas/providers'
import { useMainStorage } from '@texas/utils/storages'
import { useMainStore } from '@texas/utils/stores'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import i18next from 'i18next'
import '../i18n'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function App({ Component, pageProps }: AppProps) {
  const { language } = useMainStorage()
  const { handleLeftRightContent } = useMainStore()

  React.useEffect(() => {
    if (language) {
      i18next.changeLanguage(language)
    }
  }, [language])

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleLeftRightContent()
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
