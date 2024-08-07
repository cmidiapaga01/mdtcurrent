// ModalContent.js
import React from 'react';
import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Box, Flex, Text, Spacer, Button } from '@chakra-ui/react';
import { InfoIcon, InfoOutlineIcon, CheckCircleIcon, QuestionIcon } from '@chakra-ui/icons';
import StatusIndicator from './StatusIndicator'; // Importando o componente StatusIndicator

const ModalContent = ({ currentTag, handleModalClose }) => {
  return (
    <ModalContent>
      <ModalHeader>
        <Flex align="center">
          <Box mr={2}><InfoIcon boxSize={6} color="teal.500" /></Box>
          <Text fontWeight="bold" color="teal.500">{currentTag?.category}</Text>
          <Spacer />
          <Box mr={2}><InfoOutlineIcon boxSize={6} color="teal.500" /></Box>
          <Text color="teal.500">{currentTag?.description}</Text>
        </Flex>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Box textAlign="center">
          <StatusIndicator />
        </Box>
        <Flex flexDirection="column" mt="4" alignItems="start">
          <Box>
            <Flex alignItems="center">
              <Box mr={2}><CheckCircleIcon color="green.500" /></Box>
              <Text fontWeight="bold" color="green.500">Sucesso:</Text>
            </Flex>
            <Text ml="8" color="green.500">A tag foi disparada com sucesso e está rastreando eventos no site.</Text>
          </Box>
          <Box mt="4">
            <Flex alignItems="center">
              <Box mr={2}><QuestionIcon color="gray.500" /></Box>
              <Text fontWeight="bold" color="gray.500">Informação adicional:</Text>
            </Flex>
            <Text ml="8" color="gray.500">Você pode integrar esta tag com outras ferramentas de análise para obter mais insights.</Text>
          </Box>
        </Flex>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme='red' onClick={handleModalClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default ModalContent;
