import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { animated } from "@react-spring/web";
import styles from "./styles.module.css";

const TagLoadButton = ({ onClick, props }) => {
  return (
    <Box p="4" className={styles.container}>
      <Button onClick={onClick} className={styles.main}
      //  bg='gray.200'
      //  borderColor='gray.200'
      //  color='white'
       _hover={{ bg: 'gray.300', color: 'gray.800' }}
       >
        <animated.div className={styles.fill} style={{ background: '#64ede5', ...props }} />
        <animated.div className={styles.content}>
          {props.width.to((x) =>
            x === 0 ? "Start" : x === 200 ? "Finish" : ""
          )}
        </animated.div>
      </Button>
    </Box>
  );
};

export default TagLoadButton;