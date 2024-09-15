import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {size} from '../../Size';
import { color } from '../../Colors';

export const Cart = (props) => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(24)}
      height={props.height ?? size.moderateScale(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
     <Path
        d="M9.375 20.25a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm7.875-1.875a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75zm4.825-11.294l-2.558 8.316a2.614 2.614 0 01-2.51 1.853H7.775a2.637 2.637 0 01-2.525-1.904L2.045 4.125h-.92a1.125 1.125 0 010-2.25h1.202a1.882 1.882 0 011.803 1.36l.683 2.39H21a1.125 1.125 0 011.075 1.456zm-2.598.794H5.455l1.959 6.853a.375.375 0 00.36.272h9.233a.375.375 0 00.36-.264l2.11-6.861z"
        fill={props.fill ?? color.secondary}
      />
    </Svg>
  );
};
