import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {size} from '../../Size';
import { color } from '../../Colors';

export const Search = (props) => {
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
        d="M21.796 20.204l-4.452-4.454a8.636 8.636 0 10-1.594 1.594l4.456 4.457a1.126 1.126 0 101.594-1.594l-.004-.003zM4.125 10.5a6.375 6.375 0 116.375 6.375A6.382 6.382 0 014.125 10.5z"
        fill={props.fill ?? color.secondary}
      />
    </Svg>
  );
};
