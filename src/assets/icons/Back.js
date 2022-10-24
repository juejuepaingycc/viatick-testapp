import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Back() {
  return (
    <Svg    
      viewBox="0 0 24 24" 
      width={25} height={25}>
      <Path
        d="m15 4-8 8 8 8"
        stroke="#6d6c6d"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"/>
    </Svg>
  );
}

export default Back;
