import React, { useState } from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Flex, Text, Spacer, Input, Textarea } from '@chakra-ui/react';
import { InfoIcon, InfoOutlineIcon, CheckCircleIcon, WarningIcon, QuestionIcon } from '@chakra-ui/icons'; // Importando ícones do Chakra UI
import StatusIndicator from './StatusIndicator'; // Importando o componente StatusIndicator

// Importando imagens
import image1 from '../images/cat_no_bg.png';
import image2 from '../images/cat_no_bg.png';
import image3 from '../images/cat_no_bg.png';

const tagsData = {
  tag4: { imageSrc: image1, description: 'GTM tag was fired bitch!!!!!', category: 'Analytics' },
};

const Tag4 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentTag, setCurrentTag] = useState(null);
  const [buttonText, setButtonText] = useState('Open Modal');
  const [showLoadedText, setShowLoadedText] = useState(false);

  const openModal = (tag) => {
    setCurrentTag(tag);
    setButtonText('CARREGADO');
    setShowLoadedText(false); // Garantir que o texto "CARREGADO" não apareça até o modal ser fechado
    onOpen();
  };

  const handleModalClose = () => {
    setShowLoadedText(true); // Mostrar o texto "CARREGADO" quando o modal é fechado
    setTimeout(() => {
      setButtonText('CARREGADO'); // Animar o texto para "CARREGADO"
    }, 50);
    onClose();
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
              <Button
                onClick={() => openModal(tag)}
                colorScheme="teal" // Mudando a cor do botão para teal
                width="100%"
              >
                {buttonText}
              </Button>
            </Box>
          </Box>
        );
      })}
      <Modal isCentered onClose={handleModalClose} isOpen={isOpen} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex align="center">
              <Box mr={2}><InfoIcon boxSize={6} color="teal.500" /></Box> {/* Mudando a cor do ícone para teal */}
              <Text fontWeight="bold" color="teal.500">{currentTag?.category}</Text> {/* Mudando a cor do texto para teal */}
              <Spacer />
              <Box mr={2}><InfoOutlineIcon boxSize={6} color="teal.500" /></Box> {/* Mudando a cor do ícone para teal */}
              <Text color="teal.500">{currentTag?.description}</Text> {/* Mudando a cor do texto para teal */}
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box textAlign="center">
              <StatusIndicator /> {/* Reintegrando o StatusIndicator */}
            </Box>
            {/* Informações descritivas sobre a tag */}
            <Flex flexDirection="column" mt="4" alignItems="start">
              <Box>
                <Flex alignItems="center">
                  <Box mr={2}><CheckCircleIcon color="green.500" /></Box>
                  <Text fontWeight="bold" color="green.500">Sucesso:</Text> {/* Mudando a cor do texto para verde */}
                </Flex>
                <Text ml="8" color="green.500">A tag foi disparada com sucesso e está rastreando eventos no site.</Text> {/* Mudando a cor do texto para verde */}
              </Box>
              <Box mt="4">
                <Flex alignItems="center">
                  <Box mr={2}><QuestionIcon color="gray.500" /></Box>
                  <Text fontWeight="bold" color="gray.500">Informação adicional:</Text> {/* Mudando a cor do texto para cinza */}
                </Flex>
                <Text ml="8" color="gray.500">Você pode integrar esta tag com outras ferramentas de análise para obter mais insights.</Text> {/* Mudando a cor do texto para cinza */}
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' onClick={handleModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Tag4;
