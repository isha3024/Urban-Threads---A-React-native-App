import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import {size} from '../../Size';
import { color } from '../../Colors';

export const Filter = (props) => {
  return (
    <Svg
    width={props.width ?? size.moderateScale(22)}
    height={props.height ?? size.moderateScale(22)}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.125 9.625v8.625a1.125 1.125 0 11-2.25 0V9.625a1.125 1.125 0 012.25 0zM17.75 16a1.125 1.125 0 00-1.125 1.125v1.125a1.125 1.125 0 102.25 0v-1.125A1.125 1.125 0 0017.75 16zM20 12.25h-1.125V1.75a1.125 1.125 0 10-2.25 0v10.5H15.5a1.125 1.125 0 100 2.25H20a1.125 1.125 0 100-2.25zM4.25 13a1.125 1.125 0 00-1.125 1.125v4.125a1.125 1.125 0 002.25 0v-4.125A1.125 1.125 0 004.25 13zM6.5 9.25H5.375v-7.5a1.125 1.125 0 00-2.25 0v7.5H2a1.125 1.125 0 000 2.25h4.5a1.125 1.125 0 100-2.25zm6.75-4.5h-1.125v-3a1.125 1.125 0 10-2.25 0v3H8.75a1.125 1.125 0 000 2.25h4.5a1.125 1.125 0 000-2.25z"
        fill={props.fill ?? color.primary}
      />
    </Svg>
  );
};
