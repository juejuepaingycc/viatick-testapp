import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BigArrow() {
  return (
    <Svg    
      viewBox="0 0 330.002 330.002" 
      width={42} height={42}>
      <Path 
        fill='#fff' 
        d="M324.001 209.25 173.997 96.75a15 15 0 0 0-18 0L6.001 209.25c-6.627 4.971-7.971 14.373-3 21a14.975 14.975 0 0 0 12.012 6.001c3.131 0 6.29-.978 8.988-3.001L164.998 127.5l141.003 105.75c6.629 4.972 16.03 3.627 21-3 4.971-6.627 3.627-16.029-3-21z" />
    </Svg>
  );
}

export default BigArrow;
