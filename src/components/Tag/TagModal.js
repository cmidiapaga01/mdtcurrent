// Tag/TagModal.js
import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex, Text, Box, Button } from '@chakra-ui/react';
import { InfoOutlineIcon, CheckCircleIcon, QuestionIcon } from '@chakra-ui/icons';
import StatusIndicator from './StatusIndicator'; 
import TagData from './TagData';

const TagModal = ({ isOpen, onClose, currentTag }) => {
  
   // Check if currentTag is null or undefined
   if (!currentTag) {
    return null; // Render nothing if currentTag is not provided
  }

  
  // Find the tag data based on the currentTag ID
  const tag = TagData.find(tag => tag.id === currentTag.id);

  return (
    <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset='slideInBottom'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex align="center">
            <Box mr={2}><InfoOutlineIcon boxSize={6} color="blue.500" /></Box>
            <Text>{tag.description}</Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box textAlign="center">
            <StatusIndicator currentTag={tag} /> {/* Reintegrating the StatusIndicator */}
          </Box>
          {/* Descriptive information about the tag */}
          <Flex flexDirection="column" mt="4" alignItems="start">
            <Box>
              <Flex alignItems="center">
                <Box mr={2}><CheckCircleIcon color="green.500" /></Box>
                <Text fontWeight="bold" color="green.500">Success:</Text>
              </Flex>
              <Text ml="8" color="green.500">{tag.successInfo}</Text>
            </Box>
            <Box mt="4">
              <Flex alignItems="center">
                <Box mr={2}><QuestionIcon color="gray.500" /></Box>
                <Text fontWeight="bold" color="gray.500">Additional information:</Text>
              </Flex>
              <Text ml="8" color="gray.500">{tag.additionalInfo}</Text>
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='red' onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TagModal;