import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {size} from '../../Size';
import { color } from '../../Colors';

export const InputError = (props) => {
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
        d="M12 1.875A10.125 10.125 0 1022.125 12 10.137 10.137 0 0012 1.875zm0 18A7.875 7.875 0 1119.875 12 7.883 7.883 0 0112 19.875zm-1.125-7.5V7.5a1.125 1.125 0 112.25 0v4.875a1.125 1.125 0 11-2.25 0zm2.625 3.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill={props.fiill ?? color.error}
      />
    </Svg>
  );
};
