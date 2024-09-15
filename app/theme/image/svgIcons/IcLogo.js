import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {size} from '../../Size';
import { color } from '../../Colors';

export const Logo = (props) => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(134)}
      height={props.height ?? size.moderateScale(133)}
      viewBox="0 0 134 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M134 44.856H88.598V0h-43.51c0 24.78-20.18 44.856-45.088 44.856v43.288h45.087V133h43.51c0-24.781 20.495-44.856 45.403-44.856V44.856z"
        fill={props.fiill ?? color.primary}
      />
    </Svg>
  );
};
