import { ApolloProvider } from '@apollo/client'
import { ChakraProvider, ColorModeProvider, ColorModeScript } from '@chakra-ui/react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import theme from '../theme'
import { apolloCli } from '../utils/apolloConn'


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloCli}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <NavBar />

        <Component {...pageProps} />

        <Footer />
      </ChakraProvider>
    </ApolloProvider >
  )
}

export default MyApp
