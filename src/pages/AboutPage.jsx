import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Tag from '../components/Tag';
import Tag2 from '../components/Tag2';
import Tag3 from '../components/Tag3';
import Loading from '../components/Loading';
import Container from '../components/Container';
import StatusIndicator from '../components/StatusIndicator';
import Tag1 from '../components/Tag1';

function AboutPage() {
  return (
    <Box minH="100vh">
      <Box bg="blue.200">
        <Container>
          <Hero />
        </Container>
      </Box>
      <Box bg="green.200">
        <Container>
          <Tag1 />
        </Container>
        <Container>
          <Tag2 />
        </Container>
        <Container>
          <Tag3 />
        </Container>
        <Container>
          <Loading />
        </Container>
        <Container>
          <StatusIndicator />
        </Container>
      </Box>
    </Box>
  );
}

export default AboutPage;
