import React from 'react';
import PropTypes from 'prop-types';
import {componentTypes} from '../../utils/constants';
import BaseElement from './baseElements';
import { fromUnixTime } from 'date-fns/esm';
import MotionImageForwardRef from '../MotionForward';

export default function Image ({ animationKey, ...props }) {
    return(
        <BaseElement animationKey = {animationKey }
        type = {componentTypes.image}
        settings = {{}}>
    <MotionImageForwardRef type = {componentTypes.image} {...props}/>

        </BaseElement>
    );
}
Image.propTypes = { animationKey: PropTypes.string.isRequired,
};