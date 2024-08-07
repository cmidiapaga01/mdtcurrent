// Tag.js
import React from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';

// Import images
import image1 from '../images/cat_no_bg.png';
import image2 from '../images/cat_no_bg.png';
import image3 from '../images/cat_no_bg.png';

const tagsData = {
  tag1: { imageSrc: image1, description: 'GTM tag was fired bitch!!!!!' },
  tag2: { imageSrc: image2, description: 'Description for Tag 2' },
  tag3: { imageSrc: image3, description: 'Description for Tag 3' }
};

const Tag = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentTag, setCurrentTag] = React.useState(null);

  const openModal = (tag) => {
    setCurrentTag(tag);
    onOpen();
  };

  return (
    <Box id="tagSection">
      {Object.keys(tagsData).map((tagKey) => {
        const tag = tagsData[tagKey];
        return (
          <Box key={tagKey} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" m="2">
            <Box textAlign="center">
              <img src={tag.imageSrc} alt="Tag Image" />
            </Box>
            <Box p="4">
              <Button onClick={() => openModal(tag)} colorScheme="blue" width="100%">
                Open Modal
              </Button>
            </Box>
          </Box>
        );
      })}
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>YOU FIRED TAG!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box textAlign="center">
              <img src={currentTag?.imageSrc} alt="Tag Image" />
            </Box>
            <Box mt="4">
              {currentTag?.description}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Tag;