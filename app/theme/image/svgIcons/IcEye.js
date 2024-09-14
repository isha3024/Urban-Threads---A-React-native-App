import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {size} from '../../Size';
import { color } from '../../Colors';

export const Eye = (props) => {
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
        d="M23.531 11.543c-.034-.075-.856-1.899-2.67-3.713C18.434 5.407 15.375 4.125 12 4.125c-3.375 0-6.434 1.282-8.858 3.705C1.327 9.644.506 11.467.469 11.543a1.133 1.133 0 000 .915c.034.076.856 1.899 2.67 3.713 2.427 2.423 5.486 3.704 8.861 3.704 3.375 0 6.434-1.28 8.858-3.704 1.814-1.814 2.636-3.637 2.67-3.713a1.132 1.132 0 00.003-.915zm-4.318 3.094C17.2 16.62 14.774 17.625 12 17.625s-5.2-1.006-7.21-2.989A12.219 12.219 0 012.768 12 12.23 12.23 0 014.79 9.365C6.8 7.38 9.226 6.375 12 6.375s5.2 1.006 7.21 2.99A12.22 12.22 0 0121.233 12a12.227 12.227 0 01-2.023 2.636l.003.001zM12 7.875a4.125 4.125 0 100 8.25 4.125 4.125 0 000-8.25zm0 6a1.875 1.875 0 110-3.751 1.875 1.875 0 010 3.751z"
        fill={props.fill ?? color.inputPlaceHolderTextColor}
      />
    </Svg>
  );
};
