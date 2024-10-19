import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { size } from '../../Size';
import { color } from '../../Colors';

export const Mic = (props) => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(22)}
      height={props.height ?? size.moderateScale(22)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 16.125a4.88 4.88 0 004.875-4.875V6a4.875 4.875 0 10-9.75 0v5.25A4.88 4.88 0 0012 16.125zM9.375 6a2.625 2.625 0 015.25 0v5.25a2.625 2.625 0 01-5.25 0V6zm3.75 13.802v1.948a1.125 1.125 0 11-2.25 0v-1.948a8.639 8.639 0 01-7.5-8.552 1.125 1.125 0 012.25 0 6.375 6.375 0 1012.75 0 1.125 1.125 0 112.25 0 8.639 8.639 0 01-7.5 8.552z"
        fill={props.fiill ?? color.iconFill}
      />
    </Svg>
  );
};