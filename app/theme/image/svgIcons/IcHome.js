import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {size} from '../../Size';
import { color } from '../../Colors';

export const Home = (props) => {
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
        d="M20.771 9.455l-7.495-7.076-.015-.014a1.868 1.868 0 00-2.523 0l-.016.014L3.23 9.455a1.881 1.881 0 00-.604 1.378V19.5A1.875 1.875 0 004.5 21.375H9a1.875 1.875 0 001.875-1.875v-4.125h2.25V19.5A1.875 1.875 0 0015 21.375h4.5a1.875 1.875 0 001.875-1.875v-8.667a1.88 1.88 0 00-.604-1.378zm-1.646 9.67h-3.75V15a1.875 1.875 0 00-1.875-1.875h-3A1.875 1.875 0 008.625 15v4.125h-3.75v-8.13L12 4.268l7.125 6.727v8.13z"
        fill={props.fill ?? color.secondary}
      />
    </Svg>
  );
};
