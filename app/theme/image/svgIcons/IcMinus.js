import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {size} from '../../Size';
import { color } from '../../Colors';

export const Minus = (props) => {
  return (
    <Svg
    width={props.width ?? size.moderateScale(15)}
    height={props.height ?? size.moderateScale(15)}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.345 7.817a.656.656 0 01-.657.656H3.063a.656.656 0 110-1.313h9.625a.656.656 0 01.657.657z"
        fill={props.fill ?? color.secondary}
      />
    </Svg>
  );
};