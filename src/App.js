import React, { useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Container from './components/Container';

function App() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-MZBZQDJ5'
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh">
          <Box bg="gray.300">
            <Container>
              <Navbar />
            </Container>
          </Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add other routes here */}
          </Routes>
          <Box bg="gray.100">
            <Container>
              <Footer />
            </Container>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
