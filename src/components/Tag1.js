// Tag1.js
import React, { useState } from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Flex, Text, Spacer, Input, Textarea } from '@chakra-ui/react';
import { InfoIcon, InfoOutlineIcon, CheckCircleIcon, WarningIcon, QuestionIcon } from '@chakra-ui/icons'; // Importing Chakra UI icons
import StatusIndicator from './StatusIndicator'; // Importing the StatusIndicator component
import { useSpring, animated } from '@react-spring/web';
import styles from './styles.module.css';
import ConfettiComponent from './Confetti';
import { animateScroll as scroll } from 'react-scroll';
import { Element, scroller } from 'react-scroll';

// Importing images
import image1 from '../images/code.svg';

const Tag1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Corrija a importação de useDisclosure
  const [currentTag, setCurrentTag] = useState(null);
  const [colorChanged, setColorChanged] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const props = useSpring({ width: colorChanged ? 200 : 0 });

  const openModal = (tag) => {
    setCurrentTag(tag);
    setAnimationStarted(false);
    onOpen();
  };

  const handleModalClose = () => {
    onClose();
    setAnimationStarted(true);
    setColorChanged(true);
  };

  const handleAnimationFinish = () => {
    // Handle actions after animation finishes, like showing confetti
    console.log('Animation finished! Show confetti here...');

    // Scroll to Tag2 after animation finishes
    setTimeout(() => {
      console.log('Scrolling to Tag2...');
      scroller.scrollTo('tag2Section', {
        duration: 500,
        smooth: true,
        offset: 0 // Adjust the offset as needed to accommodate any fixed header
      });
    }, 3000); // Scroll after 3 seconds
  };

  const tag = { imageSrc: image1, description: 'GTM tag was fired bitch!!!!!', category: 'Analytics' };

  return (
    <Box backgroundColor="orange" id="tagSection">
      <Box key="tag1" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" m="2">
        <Box textAlign="center">
          <img src={tag.imageSrc} alt="Tag Image" />
        </Box>
        <Box p="4" className={styles.container}>
          <Button
            onClick={() => openModal(tag)}
            className={styles.main}
          >
            <animated.div className={styles.fill} style={props} />
            <animated.div className={styles.content}>
              {props.width.to(x => (x === 0 ? 'Start' : x === 200 ? 'Finish' : ''))}
            </animated.div>
          </Button>
        </Box>
      </Box>
      <Modal isCentered onClose={handleModalClose} isOpen={isOpen} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex align="center">
              <Box mr={2}><InfoIcon boxSize={6} color="blue.500" /></Box>
              <Text fontWeight="bold">{currentTag?.category}</Text>
              <Spacer />
              <Box mr={2}><InfoOutlineIcon boxSize={6} color="blue.500" /></Box>
              <Text>{currentTag?.description}</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box textAlign="center">
              <StatusIndicator /> {/* Reintegrating the StatusIndicator */}
            </Box>
            {/* Descriptive information about the tag */}
            <Flex flexDirection="column" mt="4" alignItems="start">
              <Box>
                <Flex alignItems="center">
                  <Box mr={2}><CheckCircleIcon color="green.500" /></Box>
                  <Text fontWeight="bold" color="green.500">Success:</Text> {/* Changing text color to green */}
                </Flex>
                <Text ml="8" color="green.500">The tag was successfully fired and is tracking events on the site.</Text> {/* Changing text color to green */}
              </Box>
              <Box mt="4">
                <Flex alignItems="center">
                  <Box mr={2}><QuestionIcon color="gray.500" /></Box>
                  <Text fontWeight="bold" color="gray.500">Additional information:</Text> {/* Changing text color to gray */}
                </Flex>
                <Text ml="8" color="gray.500">You can integrate this tag with other analytics tools to gain further insights.</Text> {/* Changing text color to gray */}
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

      {animationStarted && (
        <ConfettiComponent onFinish={handleAnimationFinish} />
      )}

    </Box>
  );
};

export default Tag1;



// import React, { useState } from 'react';
// import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Flex, Text, Spacer, Input, Textarea } from '@chakra-ui/react';
// import { InfoIcon, InfoOutlineIcon, CheckCircleIcon, WarningIcon, QuestionIcon } from '@chakra-ui/icons'; // Importando ícones do Chakra UI
// import StatusIndicator from './StatusIndicator'; // Importando o componente StatusIndicator

// // Importando imagens
// import image1 from '../images/code.svg';

// const Tag1 = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [currentTag, setCurrentTag] = useState(null);
//   const [buttonText, setButtonText] = useState('Open Modal 1');
//   const [showLoadedText, setShowLoadedText] = useState(false);

//   const openModal = (tag) => {
//     setCurrentTag(tag);
//     setButtonText('CARREGADO');
//     setShowLoadedText(false); // Garantir que o texto "CARREGADO" não apareça até o modal ser fechado
//     onOpen();
//   };

//   const handleModalClose = () => {
//     setShowLoadedText(true); // Mostrar o texto "CARREGADO" quando o modal é fechado
//     setTimeout(() => {
//       setButtonText('CARREGADO'); // Animar o texto para "CARREGADO"
//     }, 50);
//     onClose();
//   };

//   const tag = { imageSrc: image1, description: 'GTM tag was fired bitch!!!!!', category: 'Analytics' };

//   return (
//     <Box backgroundColor = "orange" id="tagSection">
//       <Box key="tag1" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" m="2">
//         <Box textAlign="center">
//           <img src={tag.imageSrc} alt="Tag Image" />
//         </Box>
//         <Box p="4">
//           <Button
//             onClick={() => openModal(tag)}
//             colorScheme="blue"
//             width="100%"
//           >
//             {buttonText}
//           </Button>
//         </Box>
//       </Box>
//       <Modal isCentered onClose={handleModalClose} isOpen={isOpen} motionPreset='slideInBottom'>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>
//             <Flex align="center">
//               <Box mr={2}><InfoIcon boxSize={6} color="blue.500" /></Box>
//               <Text fontWeight="bold">{currentTag?.category}</Text>
//               <Spacer />
//               <Box mr={2}><InfoOutlineIcon boxSize={6} color="blue.500" /></Box>
//               <Text>{currentTag?.description}</Text>
//             </Flex>
//           </ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Box textAlign="center">
//               <StatusIndicator /> {/* Reintegrando o StatusIndicator */}
//             </Box>
//             {/* Informações descritivas sobre a tag */}
//             <Flex flexDirection="column" mt="4" alignItems="start">
//               <Box>
//                 <Flex alignItems="center">
//                   <Box mr={2}><CheckCircleIcon color="green.500" /></Box>
//                   <Text fontWeight="bold" color="green.500">Sucesso:</Text> {/* Mudando a cor do texto para verde */}
//                 </Flex>
//                 <Text ml="8" color="green.500">A tag foi disparada com sucesso e está rastreando eventos no site.</Text> {/* Mudando a cor do texto para verde */}
//               </Box>
//               <Box mt="4">
//                 <Flex alignItems="center">
//                   <Box mr={2}><QuestionIcon color="gray.500" /></Box>
//                   <Text fontWeight="bold" color="gray.500">Informação adicional:</Text> {/* Mudando a cor do texto para cinza */}
//                 </Flex>
//                 <Text ml="8" color="gray.500">Você pode integrar esta tag com outras ferramentas de análise para obter mais insights.</Text> {/* Mudando a cor do texto para cinza */}
//               </Box>
//             </Flex>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme='red' onClick={handleModalClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };

// export default Tag1;
