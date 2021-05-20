import React from 'react';
import Motion from './Motion';
/*Adds the foward part to the Motion Component */

const MotionImageForwardRef = React.forwardRef((props, ref ) => (<Motion {...props} handleRef={ref}/> ));
export default MotionImageForwardRef;