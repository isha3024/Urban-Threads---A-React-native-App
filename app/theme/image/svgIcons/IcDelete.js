import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {size} from '../../Size';
import { color } from '../../Colors';

export const Delete = (props) => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(14)}
      height={props.height ?? size.moderateScale(15)}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.5 3h-2.25v-.75A1.75 1.75 0 008.5.5h-3a1.75 1.75 0 00-1.75 1.75V3H1.5a.75.75 0 000 1.5h.25V13A1.25 1.25 0 003 14.25h8A1.25 1.25 0 0012.25 13V4.5h.25a.75.75 0 100-1.5zm-7.25-.75A.25.25 0 015.5 2h3a.25.25 0 01.25.25V3h-3.5v-.75zm5.5 10.5h-7.5V4.5h7.5v8.25zM6.25 6.5v4a.75.75 0 11-1.5 0v-4a.75.75 0 011.5 0zm3 0v4a.75.75 0 11-1.5 0v-4a.75.75 0 011.5 0z"
        fill={props.fill ?? color.error}
      />
    </Svg>
  );
};
