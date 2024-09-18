import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { size } from '../../Size';
import { color } from '../../Colors';

export const Google = (props) => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(25)}
      height={props.height ?? size.moderateScale(24)}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_2458_3112)">
        <Path
          d="M24.489 12.225c0-.984-.082-1.701-.259-2.445H12.74v4.438h6.744c-.136 1.102-.87 2.764-2.502 3.88l-.023.148 3.633 2.75.252.025c2.312-2.086 3.645-5.156 3.645-8.796z"
          fill="#4285F4"
        />
        <Path
          d="M12.74 23.918c3.304 0 6.078-1.063 8.104-2.897l-3.862-2.923c-1.034.704-2.42 1.195-4.243 1.195a7.352 7.352 0 01-6.963-4.969l-.143.012-3.778 2.857-.05.134c2.013 3.906 6.147 6.59 10.934 6.59z"
          fill="#34A853"
        />
        <Path
          d="M5.776 14.324a7.21 7.21 0 01-.408-2.365c0-.824.15-1.621.395-2.365l-.007-.159L1.93 6.532l-.126.059A11.747 11.747 0 00.5 11.959c0 1.927.476 3.747 1.305 5.368l3.971-3.003z"
          fill="#FBBC05"
        />
        <Path
          d="M12.74 4.624c2.297 0 3.847.97 4.731 1.78l3.455-3.295C18.804 1.183 16.044 0 12.739 0 7.952 0 3.82 2.684 1.805 6.59l3.958 3.004a7.383 7.383 0 016.976-4.97z"
          fill="#EB4335"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2458_3112">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
