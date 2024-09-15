import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {size} from '../../Size';
import { color } from '../../Colors';

export const Account = (props) => {
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
        d="M12.5 1.875A10.125 10.125 0 1022.625 12 10.137 10.137 0 0012.5 1.875zM7.96 18.428a5.625 5.625 0 019.08 0 7.848 7.848 0 01-9.08 0zm1.915-7.178a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0zm8.813 5.62a7.827 7.827 0 00-2.72-2.196 4.875 4.875 0 10-6.937 0 7.827 7.827 0 00-2.719 2.195 7.875 7.875 0 1112.366 0h.01z"
        fill={props.fill ?? color.secondary}
      />
    </Svg>
  );
};
