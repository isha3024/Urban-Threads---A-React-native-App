import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {size} from '../../Size';
import { color } from '../../Colors';

export const CheckCircle = (props) => {
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
        d="M16.546 8.954a1.125 1.125 0 010 1.594l-5.25 5.25a1.125 1.125 0 01-1.594 0l-2.25-2.25a1.127 1.127 0 111.594-1.594l1.454 1.452 4.454-4.455a1.125 1.125 0 011.592.003zM22.125 12A10.124 10.124 0 1112 1.875 10.136 10.136 0 0122.125 12zm-2.25 0A7.875 7.875 0 1012 19.875 7.883 7.883 0 0019.875 12z"
        fill={props.fill ?? color.success}
      />
    </Svg>
  );
};
