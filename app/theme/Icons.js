/* eslint-disable react/react-in-jsx-scope */
// INFO: all svg icons will go below
import React from 'react';
import { Heart } from './image/svgIcons/IcHeart';
import { HeartFilled } from './image/svgIcons/IcHeartFilled';
import { ArrowRight } from './image/svgIcons/IcArrowRight';
import { EyeOff } from './image/svgIcons/IcEyeOff';
import { Eye } from './image/svgIcons/IcEye';
import { InputError } from './image/svgIcons/IcInputError';
import { CheckCircle } from './image/svgIcons/IcCheckCircle';

export const IcHeart = props => <Heart {...props} />;
export const IcHeartFilled = props => <HeartFilled {...props} />;
export const IcArrowRight = props => <ArrowRight {...props} />;
export const IcEyeOff = props => <EyeOff {...props} />;
export const IcEye = props => <Eye {...props} />;
export const IcInputError = props => <InputError {...props} />;
export const IcCheckCircle = props => <CheckCircle {...props} />;
