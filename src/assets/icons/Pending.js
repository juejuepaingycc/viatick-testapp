import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Pending() {
  return (
    <Svg  
      viewBox="0 0 24 24" 
      width={17} 
      height={17}>
      <Path
        d="M12 7v5l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        stroke="#f4ebb2"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round" />
    </Svg>
  );
}

export default Pending;
