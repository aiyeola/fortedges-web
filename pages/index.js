import { Box, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Forte Edges</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Text color="brand.body_text" fontSize="6xl">
          Hello World
        </Text>
        <Text fontSize="50px" color="tomato">
          Im using a custom font-size value for this text
        </Text>

        <Box
          width="100px"
          h="100px"
          bgGradient="linear(to-r, #7950DA, #8F6FDB)"
          // bg="black"
        ></Box>
      </main>
    </Box>
  );
}
