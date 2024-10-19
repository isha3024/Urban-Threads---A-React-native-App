import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import {size} from '../../Size';
import { color } from '../../Colors';

export const Bell = (props) => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(22)}
      height={props.height ?? size.moderateScale(25)}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.2}
        d="M52 48H12a2 2 0 01-1.72-3C11.928 42.15 14 34.953 14 26a18 18 0 1136 0c0 8.955 2.075 16.15 3.725 19A2 2 0 0152 48z"
        fill={props.bgColor ?? color.customTransparent(0)}
      />
      <Path
        d="M55.45 43.985C54.062 41.595 52 34.833 52 26a20 20 0 10-40 0c0 8.835-2.065 15.595-3.452 17.985A4 4 0 0012 50h10.203a10 10 0 0019.595 0H52a3.999 3.999 0 003.45-6.015zM32 54a6 6 0 01-5.655-4h11.31A5.999 5.999 0 0132 54zm-20-8c1.925-3.31 4-10.98 4-20a16 16 0 1132 0c0 9.013 2.07 16.682 4 20H12z"
        fill={props.fill ?? color.secondary}
      />
    </Svg>
  );
};
