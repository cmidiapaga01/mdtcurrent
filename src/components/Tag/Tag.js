import React, { useState } from 'react';
import { Box, useDisclosure, Image } from '@chakra-ui/react';
import { useSpring } from '@react-spring/web';
import { scroller } from 'react-scroll';
import TagData from './TagData';
import TagLoadButton from './TagLoadButton';
import TagModal from './TagModal';
import TagConfetti from './TagConfetti';

const Tag = ({id, paddingTop, paddingBottom}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      if (id !== TagData.length) {
      console.log('Scrolling to next card :)');
      const nextId = id + 1;
      const nextSection = `tag${nextId}Section`;
      scroller.scrollTo(nextSection, {
        duration: 500,
        smooth: true,
        offset: 0 // Adjust the offset as needed to accommodate any fixed header
      });
    }}, 3000); // Scroll after 3 seconds
  };

  const tag = TagData.find(tag => tag.id === id);

  return (
    <Box backgroundColor="gray.200" id={`tag${id}Section`} display="flex" justifyContent="center" paddingTop={paddingTop} paddingBottom={paddingBottom}>
      <Box key={`tag${id}`} maxW="sm" backgroundColor="gray.50" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" m="7">
        <Box textAlign="center" display="flex" justifyContent="center">
          <Image src={tag.imageSrcCard} alt="Tag Image" maxWidth="60%" marginTop={12} />
        </Box>
        <Box p="4">
          <TagLoadButton onClick={() => openModal(tag)} props={props}/>
        </Box>
      </Box>
      <TagModal
        isOpen={isOpen}
        onClose={handleModalClose}
        currentTag={currentTag}
        props={props}
        handleAnimationFinish={handleAnimationFinish}
      />

      {animationStarted && (
        <TagConfetti onFinish={handleAnimationFinish} />
      )}
      
    </Box>
  );
};

export default Tag;