import { ApolloProvider } from '@apollo/client'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from '../theme'
import { apolloCli } from '../utils/apolloConn'


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloCli}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
