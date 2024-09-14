/* eslint-disable react/react-in-jsx-scope */
// INFO: all svg icons will go below
import React from 'react';
import { Heart } from './image/svgIcons/IcHeart';
import { HeartFilled } from './image/svgIcons/IcHeartFilled';
import { ArrowRight } from './image/svgIcons/IcArrowRight';

export const IcHeart = props => <Heart {...props} />;
export const IcHeartFilled = props => <HeartFilled {...props} />;
export const IcArrowRight = props => <ArrowRight {...props} />;
