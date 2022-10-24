import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Add() {
  return (
    <Svg  
      viewBox="0 0 42 42" 
      width={12} 
      height={12}>
      <Path 
        fill='#fff' 
        d="M42 19H23V0h-4v19H0v4h19v19h4V23h19z" />
    </Svg>
  );
}

export default Add;
