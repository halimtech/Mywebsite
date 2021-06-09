import { ApolloProvider } from '@apollo/client'
import { ChakraProvider, ColorModeProvider, ColorModeScript } from '@chakra-ui/react'
import Favi from '../components/Favi'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import theme from '../theme'
import { apolloCli } from '../utils/apolloConn'
import { DefaultSeo } from 'next-seo';




function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloCli}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <DefaultSeo openGraph={{
          type: 'website',
          locale: 'en_DE',
          url: 'https://halim.tech',
          site_name: 'Halimtech',
        }}
          twitter={{
            handle: '@halimtech1',
            site: '@halimtech1',
            cardType: 'summary_large_image',
          }} />
        <Favi />

        <NavBar />

        <Component {...pageProps} />

        <Footer />
      </ChakraProvider>
    </ApolloProvider >
  )
}

export default MyApp
