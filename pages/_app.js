import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/dm-sans';
import '@fontsource/coustard';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
