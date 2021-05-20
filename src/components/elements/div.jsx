import React from 'react';
import PropTypes from 'prop-types';
import { componentTypes} from '../../utils/constants';
import BaseElement from './baseElements';
import MotionImageForwardRef from '../MotionForward';

export default function Div ({ animationKey, ... props }) {
    return (
        <BaseElement animationKey = {animationKey} type = {componentTypes.div}>
           <MotionImageForwardRef type = {componentTypes.div} {...props}/> 
        </BaseElement>
    );
}
Div.PropTypes = {
    animationKey: PropTypes.string.isRequired,
};