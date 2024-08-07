import React, { useState } from 'react';
import useMeasure from 'react-use-measure';
import { useSpring, animated } from '@react-spring/web';

import styles from './styles.module.css';

export default function App() {
  const [open, setOpen] = useState(false);
  const [ref, { width }] = useMeasure();
  const [colorChanged, setColorChanged] = useState(false);
  const props = useSpring({ width: colorChanged ? width : 0 });

  const handleClick = () => {
    setOpen(!open);
    setColorChanged(true); // Set colorChanged to true when clicked
  };

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.main} onClick={handleClick}>
        <animated.div className={styles.fill} style={props} />
        <animated.div className={styles.content}>
          {props.width.to(x => (x === 0 ? 'Start' : x === width ? 'Finish' : x < 100 ? x.toFixed(0) : '100'))}
        </animated.div>
      </div>
    </div>
  );
}




// import React, { useState } from 'react'
// import useMeasure from 'react-use-measure'
// import { useSpring, animated } from '@react-spring/web'

// import styles from './styles.module.css'

// export default function App() {
//   const [open, toggle] = useState(false)
//   const [ref, { width }] = useMeasure()
//   const props = useSpring({ width: open ? width : 0 })

//   return (
//     <div className={styles.container}>
//       <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
//         <animated.div className={styles.fill} style={props} />
//         <animated.div className={styles.content}>{props.width.to(x => x.toFixed(0))}</animated.div>
//       </div>
//     </div>
//   )
// }
