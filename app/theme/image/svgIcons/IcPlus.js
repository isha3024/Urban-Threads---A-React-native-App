import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { size } from '../../Size';
import { color } from '../../Colors';

export const Plus = (props) => {
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
        d="M13.097 7.817a.657.657 0 01-.656.656H8.285v4.156a.656.656 0 01-1.313 0V8.473H2.816a.656.656 0 010-1.313h4.156V3.004a.656.656 0 111.313 0V7.16h4.156a.656.656 0 01.656.657z"
        fill={props.fill ?? color.secondary}
      />
    </Svg>
  );
};