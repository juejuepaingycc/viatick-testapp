import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Pin() {
  return (
    <Svg  
      viewBox="-2 0 24 24" 
      width={15} 
      height={15}>
      <Path
        fill='#cac0a5'
        d="M1296 120s-10-8.477-10-14a10 10 0 1 1 20 0c0 5.523-10 14-10 14Zm0-22a8 8 0 0 0-8 8c0 4.418 8 11 8 11s8-6.582 8-11a8 8 0 0 0-8-8Zm0 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
        transform="translate(-1286 -96)"
        style={{
          fill: "#cac0a5",
          fillRule: "evenodd",
        }}/>
    </Svg>
  );
}

export default Pin;
