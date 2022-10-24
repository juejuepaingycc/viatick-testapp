import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function UpArrow() {
  return (
    <Svg  
      style={{
        marginBottom: -30
      }}    
      viewBox="0 0 49.656 49.656" 
      width={45} 
      height={45}>
      <Path
        style={{
          fill: "#fff",
        }}
        d="m48.242 35.122-2.828 2.828-20.586-20.586L4.242 37.95l-2.828-2.828 23.414-23.415z"
      />
      <Path
        style={{
          fill:  "#fff",
        }}
        d="M45.414 39.363 24.828 18.778 4.242 39.363 0 35.121l24.828-24.828 24.828 24.828-4.242 4.242zM24.828 15.95l20.586 20.585 1.414-1.414-22-22-22 22 1.414 1.414L24.828 15.95z"
      />
      </Svg>
  );
}

export default UpArrow;
