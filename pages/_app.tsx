"use client"
import { appWithTranslation } from 'next-i18next'
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(App)