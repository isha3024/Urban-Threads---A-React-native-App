import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {size} from '../../Size';
import { color } from '../../Colors';

export const Heart = () => {
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
        d="M16.688 2.625c-1.884 0-3.555.743-4.688 2.021-1.133-1.278-2.804-2.021-4.688-2.021a6.195 6.195 0 00-6.187 6.188c0 6.781 9.92 12.2 10.342 12.428a1.125 1.125 0 001.066 0c.422-.228 10.342-5.647 10.342-12.428a6.195 6.195 0 00-6.188-6.188zm-.515 13.346A30.82 30.82 0 0112 18.953a30.82 30.82 0 01-4.173-2.982c-2.031-1.743-4.452-4.4-4.452-7.159a3.937 3.937 0 013.938-3.937c1.668 0 3.065.881 3.645 2.3a1.125 1.125 0 002.084 0c.58-1.419 1.977-2.3 3.646-2.3a3.937 3.937 0 013.937 3.938c0 2.758-2.42 5.415-4.452 7.158z"
        fill={props.fill ?? color.secondary}
      />
    </Svg>
  );
};
